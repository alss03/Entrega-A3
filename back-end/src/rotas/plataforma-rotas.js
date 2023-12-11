const express = require("express");
const {
  listarPlataformaServico,
  buscarPlataformaServico,
  criarPlataformaServico,
} = require("../servico/plataforma-servico");
const criarPlataformaValidacaoEsquema =
  require("../validacao/plataforma-validacao-esquema").criarPlataformaValidacaoEsquema;
const validacao = require("../middleware/middleware-validacao-body").validacao;
const rotasPlataforma = express();

rotasPlataforma.post(
  "/plataforma",
  validacao(criarPlataformaValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.body;

      const plataforma = await criarPlataformaServico(input);

      return response.status(201).json({
        data: plataforma,
      });
    } catch (error) {
            response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasPlataforma.get("/plataforma", async (request, response) => {
  try {
    const input = request.body;

    const plataforma = await listarPlataformaServico(input);

    return response.status(200).json({
      data: plataforma,
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

rotasPlataforma.get("/plataforma/:id", async (request, response) => {
  try {
    const input = request.params;

    const plataforma = await buscarPlataformaServico(input.id);

    return response.status(200).json({
      data: plataforma,
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

module.exports = rotasPlataforma;
