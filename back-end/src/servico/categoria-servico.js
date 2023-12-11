const {
  buscarCategoriaRepository,
  listarCategoriasRepository,
} = require("../banco/repositorio/categoria-repositorio");

async function buscarCategoriaServico(id) {
  try {
    const jogo = await buscarCategoriaRepository(id);

    return jogo;
  } catch (error) {
    throw new Error(`Erro ao buscar uma categoria: ${error.message}`);
  }
}

async function listarCategoriaServico() {
  try {
    const jogos = await listarCategoriasRepository();

    return jogos;
  } catch (error) {
    throw new Error(`Erro ao listar as categorias: ${error.message}`);
  }
}

module.exports = {
  buscarCategoriaServico,
  listarCategoriaServico,
};
