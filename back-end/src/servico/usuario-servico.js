const {
  buscarUsuarioPorEmailRepository,
  listarUsuarioRepository,
  buscarUsuarioRepository,
  criarUsuarioRepository,
} = require("../banco/repositorio/usuario-repositorio");
const criptografarSenha = require("../util/criptografar-senha");
const descriptografarSenha = require("../util/descriptografar-senha");

async function loginService(input) {
  try {
    const usuario = await buscarUsuarioPorEmailRepository(input.email);

    if (!usuario) {
      throw new Error(`Esse usuário não existe no banco de dados`);
    }

    const senhaValida = await descriptografarSenha(input.senha, usuario.senha);

    if (!senhaValida) {
      throw new Error(`Senha invalida`);
    }

    return senhaValida;
  } catch (error) {
    throw new Error(`Erro ao fazer login: ${error.message}`);
  }
}

async function criarUsuarioServico(data) {
  try {
    const jaExiste = await buscarUsuarioPorEmailRepository(data.email);

    if (jaExiste) {
      throw new Error(
        `Já existe um usuário com esse e-mail cadastrado no banco de dados.`
      );
    }

    const senhaCriptografada = await criptografarSenha(data.senha);

    const input = {
      ...data,
      senha: senhaCriptografada,
    };

    const usuario = await criarUsuarioRepository(input);

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao criar um usuario: ${error.message}`);
  }
}

async function buscarUsuarioServico(input) {
  try {
    const usuario = await buscarUsuarioRepository(input.id);

    return usuario;
  } catch (error) {
    throw new Error(`Erro ao buscar um usuario: ${error.message}`);
  }
}

async function listarUsuarioServico() {
  try {
    const usuarios = await listarUsuarioRepository();

    return usuarios;
  } catch (error) {
    throw new Error(`Erro ao listar um usuario: ${error.message}`);
  }
}

module.exports = {
  criarUsuarioServico,
  buscarUsuarioServico,
  listarUsuarioServico,
  loginService,
};
