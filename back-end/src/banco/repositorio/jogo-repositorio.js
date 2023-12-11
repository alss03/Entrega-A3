const queryExecutar = require("../connection").queryExecutar;
const queryBuscarVarios = require("../connection").queryBuscarVarios;
const queryBuscarUm = require("../connection").queryBuscarUm;

async function criarJogoRepository(input) {
  try {
    const row = await queryExecutar(
      "INSERT INTO jogo (nome, descricao, nota, fk_plataforma, fk_usuario) VALUES (?, ?, ?, ?, ?)",
      [
        input.nome,
        input.descricao,
        input.nota,
        input.fk_plataforma,
        input.fk_usuario,
      ]
    );

    const jogo = await queryBuscarUm("SELECT * FROM jogo WHERE jogo.id = ?", [
      row.id,
    ]);

    return jogo;
  } catch (error) {
    throw new Error(`Erro ao criar um jogo: ${error}`);
  }
}

async function buscarJogoPorUsuarioRepository(id) {
  try {
    const usuario = await queryBuscarVarios(
      `SELECT jogo_categoria.id as jogo_categoria_id, 
      jogo.id, categoria.id as categoria_id, 
      categoria.nome as categoria_nome, 
      jogo.nome,jogo.nota, jogo.descricao, 
      plataforma.id as plataforma_id, 
      plataforma.nome as plataforma_nome, 
      plataforma.descricao as plataforma_descricao 
      FROM jogo 
      INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id 
      INNER JOIN jogo_categoria ON jogo_categoria.fk_jogo = jogo.id 
      INNER JOIN categoria ON jogo_categoria.fk_categoria = categoria.id 
      WHERE jogo.fk_usuario = ?`,
      [id]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um jogo: ${error}`);
  }
}

async function buscarJogoRepository(id) {
  try {
    const usuario = await queryBuscarVarios(
      `SELECT jogo_categoria.id as jogo_categoria_id, 
      jogo.id, categoria.id as categoria_id, 
      categoria.nome as categoria_nome, 
      jogo.nome,jogo.nota, jogo.descricao, 
      plataforma.id as plataforma_id, 
      plataforma.nome as plataforma_nome, 
      plataforma.descricao as plataforma_descricao 
      FROM jogo 
      INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id 
      INNER JOIN jogo_categoria ON jogo_categoria.fk_jogo = jogo.id 
      INNER JOIN categoria ON jogo_categoria.fk_categoria = categoria.id 
      WHERE jogo.id = ?`,
      [id]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um jogo: ${error}`);
  }
}

async function buscarJogoPorNomeEUsuarioRepository(input) {
  try {
    const usuario = await queryBuscarUm(
      `SELECT * FROM jogo WHERE jogo.nome = ? AND jogo.fk_usuario = ?`,
      [input.nome, input.fk_usuario]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um jogo: ${error}`);
  }
}

async function listarJogosRepository() {
  try {
    const jogo = await queryBuscarVarios(`SELECT * FROM jogo`);

    return jogo;
  } catch (error) {
    throw new Error(`Erro ao listar os jogos: ${error}`);
  }
}

async function atualizarJogoRepository(id, input) {
  try {
    await queryExecutar(
      `UPDATE jogo SET jogo.nome = ?, jogo.descricao = ? WHERE jogo.id = ?`,
      [input.nome, input.descricao, id]
    );

    const jogo = await database.query(
      `SELECT jogo.id, jogo.nome, jogo.nota,  jogo.descricao, plataforma.nome as plataforma_nome, plataforma.descricao as plataforma_descricao from jogo INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id WHERE jogo.id = ? `,
      [id]
    );

    return jogo;
  } catch (error) {
    throw new Error(`Erro ao atualizar um jogo: ${error}`);
  }
}

async function apagarJogoRepository(id) {
  try {
    const jogo = await queryExecutar(`DELETE FROM jogo WHERE jogo.id = ?`, [
      id,
    ]);

    return jogo;
  } catch (error) {
    throw new Error(`Erro ao apagar um jogo: ${error}`);
  }
}

module.exports = {
  criarJogoRepository,
  buscarJogoRepository,
  listarJogosRepository,
  atualizarJogoRepository,
  apagarJogoRepository,
  buscarJogoPorUsuarioRepository,
  buscarJogoPorNomeEUsuarioRepository,
};
