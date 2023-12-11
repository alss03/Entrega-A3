const queryExecutar = require("../connection").queryExecutar;
const queryBuscarVarios = require("../connection").queryBuscarVarios;
const queryBuscarUm = require("../connection").queryBuscarUm;

async function criarUsuarioRepository(input) {
  try {
    const row = await queryExecutar(
      "INSERT INTO usuario (usuario, nome, email, senha) VALUES (?, ?, ?, ?)",
      [input.usuario, input.nome, input.email, input.senha]
    );

    const usuario = await queryBuscarUm(
      "SELECT * FROM usuario WHERE usuario.id = ?",
      [row.id]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao criar um usuario: ${error}`);
  }
}

async function buscarUsuarioRepository(id) {
  try {
    const usuario = await queryBuscarUm(
      `SELECT * FROM usuario WHERE usuario.id = ?`,
      [id]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um usuario: ${error}`);
  }
}

async function buscarUsuarioPorEmailRepository(email) {
  try {
    const usuario = await queryBuscarUm(
      `SELECT * FROM usuario WHERE usuario.email = ?`,
      [email]
    );

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um usuario: ${error}`);
  }
}

async function listarUsuarioRepository() {
  try {
    const usuario = await queryBuscarVarios(`SELECT * FROM usuario`);

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao listar um usuario: ${error}`);
  }
}

module.exports = {
  criarUsuarioRepository,
  buscarUsuarioRepository,
  listarUsuarioRepository,
  buscarUsuarioPorEmailRepository,
};
