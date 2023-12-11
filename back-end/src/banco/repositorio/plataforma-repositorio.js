const queryExecutar = require("../connection").queryExecutar;
const queryBuscarVarios = require("../connection").queryBuscarVarios;
const queryBuscarUm = require("../connection").queryBuscarUm;

async function criarPlataformaRepository(input) {
  try {
    const row = await queryExecutar(
      "INSERT INTO plataforma (nome, descricao) VALUES (?, ?)",
      [input.nome, input.descricao]
    );

    const plataforma = await queryBuscarUm(
      "SELECT * FROM plataforma WHERE plataforma.id = ?",
      [row.id]
    );

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao criar uma plataforma: ${error}`);
  }
}

async function buscarPlataformaRepository(id) {
  try {
    const usuario = await queryBuscarUm(
      `SELECT * FROM plataforma WHERE plataforma.id = ?`,
      [id]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar uma plataforma: ${error}`);
  }
}

async function listarPlataformaRepository() {
  try {
    const plataforma = await queryBuscarVarios(`SELECT * FROM plataforma`);

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao listar uma plataforma: ${error}`);
  }
}

async function atualizarPlataformaRepository(id, input) {
  try {
    const plataforma = await queryExecutar(
      `UPDATE plataforma SET plataforma.nome = ?, plataforma.descricao = ? WHERE plataforma.id = ?`,
      [input.nome, input.descricao, id]
    );

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao listar uma plataforma: ${error}`);
  }
}

async function apagarPlataformaRepository(id) {
  try {
    const plataforma = await queryExecutar(
      `DELETE FROM plataforma WHERE plataforma.id = ?`,
      [id]
    );

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao listar uma plataforma: ${error}`);
  }
}

module.exports = {
  criarPlataformaRepository,
  buscarPlataformaRepository,
  listarPlataformaRepository,
  atualizarPlataformaRepository,
  apagarPlataformaRepository,
};
