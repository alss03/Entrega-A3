const { queryExecutar, queryBuscarUm } = require("../connection");

async function criarJogoCategoriaRepository(jogo) {
  try {
    const row = await queryExecutar(
      `INSERT INTO jogo_categoria (fk_jogo, fk_categoria) VALUES (?, ?)`,
      [jogo.fk_jogo, jogo.fk_categoria]
    );

    const jogoCategoria = await queryBuscarUm(
      "SELECT * FROM jogo_categoria WHERE jogo_categoria.id = ?",
      [row.id]
    );

    return jogoCategoria;
  } catch (error) {
    throw error;
  }
}

async function buscarJogoPorCategoriaExistenteRepository(jogo) {
  try {
    const jogoCategoria = await queryBuscarUm(
      `SELECT * FROM jogo_categoria
      WHERE fk_categoria = ?`,
      [jogo.fk_categoria]
    );

    return jogoCategoria;
  } catch (error) {
    throw error;
  }
}

async function buscarMeusJogosCategoriaExistenteRepository(jogo) {
  try {
    const jogoCategoria = await queryBuscarUm(
      `SELECT * FROM jogo_categoria
      WHERE fk_jogo = ? AND fk_categoria = ?`,
      [jogo.fk_jogo, jogo.fk_categoria]
    );

    return jogoCategoria;
  } catch (error) {
    throw error;
  }
}

async function apagarJogoCategoriaRepository(id) {
  try {
    const rows = await queryExecutar(
      "DELETE FROM jogo_categoria WHERE fk_jogo = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function atualizarJogoCategoriaRepository(id, jogo) {
  try {
    await queryExecutar(
      "UPDATE jogo_categoria SET fk_jogo = ?, fk_categoria = ? WHERE id = ?",
      [jogo.fk_jogo, jogo.fk_categoria, id]
    );

    const rows = await queryBuscarUm(
      `SELECT * FROM jogo_categoria WHERE id = ?`,
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  apagarJogoCategoriaRepository,
  atualizarJogoCategoriaRepository,
  buscarJogoPorCategoriaExistenteRepository,
  buscarMeusJogosCategoriaExistenteRepository,
  criarJogoCategoriaRepository,
};
