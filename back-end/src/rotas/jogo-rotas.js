const express = require("express");
const {
  buscarJogoServico,
  listarJogoServico,
  criarJogoServico,
  apagarJogoServico,
  atualizarJogoServico,
  buscarJogoPorUsuarioServico,
} = require("../servico/jogo-servico");
const {
  buscarJogoValidacaoEsquema,
  atualizarJogoValidacaoEsquema,
  buscarJogoPorUsuarioValidacaoEsquema,
} = require("../validacao/jogo-validacao-esquema");
const criarJogoCategoriaValidacaoEsquema =
  require("../validacao/jogo-validacao-esquema").criarJogoValidacaoEsquema;
const validacao = require("../middleware/middleware-validacao-body").validacao;
const rotasJogo = express();

rotasJogo.post(
  "/jogo",
  validacao(criarJogoCategoriaValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.body;

      const jogo = await criarJogoServico(input);

      return response.status(201).json({
        data: jogo,
      });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasJogo.get("/jogo", async (request, response) => {
  try {
    const input = request.body;

    const jogo = await listarJogoServico(input);

    return response.status(200).json({
      data: jogo,
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

rotasJogo.get(
  "/jogo/:id",
  validacao(buscarJogoValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.params;

      const jogo = await buscarJogoServico(input.id);

      return response.status(200).json(jogo);
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasJogo.get(
  "/jogo/porUsuario/:fk_usuario",
  validacao(buscarJogoPorUsuarioValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.params;

      const jogo = await buscarJogoPorUsuarioServico(input.fk_usuario);

      return response.status(200).json(jogo);
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasJogo.put(
  "/jogo/:id",
  validacao(atualizarJogoValidacaoEsquema),
  async (request, response) => {
    try {
      const params = request.params;
      const body = request.body;

      const input = {
        id: params.id,
        nome: body.nome,
        descricao: body.descricao,
        fk_plataforma: body.fk_plataforma,
        nota: body.nota,
        fk_categoria: body.fk_categoria,
        fk_usuario: body.fk_usuario,
      };

      const jogoAtualizado = await atualizarJogoServico(input);

      return response.status(200).json({
        data: jogoAtualizado,
      });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasJogo.delete(
  "/jogo/:id",
  validacao(buscarJogoValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.params;

      await apagarJogoServico(input);

      return response.status(204).send();
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

module.exports = rotasJogo;
