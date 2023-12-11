const express = require("express");
const {
  listarUsuarioServico,
  buscarUsuarioServico,
  criarUsuarioServico,
  loginService,
} = require("../servico/usuario-servico");
const {
  buscarUsuarioValidacaoEsquema,
  loginUsuarioValidacaoEsquema,
} = require("../validacao/usuario-validacao-esquema");
const criarUsuarioValidacaoEsquema =
  require("../validacao/usuario-validacao-esquema").criarUsuarioValidacaoEsquema;
const validacao = require("../middleware/middleware-validacao-body").validacao;
const rotasUsuario = express();

rotasUsuario.post(
  "/registrar",
  validacao(criarUsuarioValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.body;

      const usuario = await criarUsuarioServico(input);

      return response.status(201).json({
        data: usuario,
      });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasUsuario.get("/usuario", async (request, response) => {
  try {
    const usuarios = await listarUsuarioServico();

    return response.status(200).json({
      usuarios,
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

rotasUsuario.get(
  "/usuario/:id",
  validacao(buscarUsuarioValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.params;

      const usuario = await buscarUsuarioServico(input);

      return response.status(200).json({
        usuario,
      });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

rotasUsuario.post(
  "/login",
  validacao(loginUsuarioValidacaoEsquema),
  async (request, response) => {
    try {
      const input = request.body;

      const usuarioLogado = await loginService(input);

      return response.status(201).json({
        auth: usuarioLogado,
      });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

module.exports = rotasUsuario;
