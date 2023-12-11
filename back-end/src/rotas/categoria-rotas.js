const express = require("express");
const {
  listarCategoriaServico,
  buscarCategoriaServico,
} = require("../servico/categoria-servico");
const { validacao } = require("../middleware/middleware-validacao-body");
const {
  buscarCategoriaPorIdEsquema,
} = require("../validacao/categoria-validacao-esquema");
const rotasCategoria = express();

rotasCategoria.get("/categoria", async (request, response) => {
  try {
    const categoria = await listarCategoriaServico();

    return response.status(200).json({
      data: categoria,
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

rotasCategoria.get(
  "/categoria/:id",
  validacao(buscarCategoriaPorIdEsquema),
  async (request, response) => {
    try {
      const input = request.params;

      const categoria = await buscarCategoriaServico(input.id);

      return response.status(200).json({
        data: categoria,
      });
    } catch (error) {
      response.status(400).json({
        error: error.message,
      });
    }
  }
);

module.exports = rotasCategoria;
