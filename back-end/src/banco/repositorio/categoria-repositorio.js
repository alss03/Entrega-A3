const queryBuscarVarios = require("../connection").queryBuscarVarios;
const queryBuscarUm = require("../connection").queryBuscarUm;

async function buscarCategoriaRepository(id) {
  try {
    const usuario = await queryBuscarUm(
      `SELECT * FROM categoria WHERE categoria.id = ?`,
      [id]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um categoria: ${error}`);
  }
}

async function listarCategoriasRepository() {
  try {
    const categoria = await queryBuscarVarios(`SELECT * FROM categoria`);

    return categoria;
  } catch (error) {
    throw new Error(`Erro ao listar os categorias: ${error}`);
  }
}

module.exports = {
  buscarCategoriaRepository,
  listarCategoriasRepository,
};
