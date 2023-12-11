const {
  criarJogoRepository,
  buscarJogoRepository,
  buscarJogoPorUsuarioRepository,
  listarJogosRepository,
  atualizarJogoRepository,
  apagarJogoRepository,
  buscarJogoPorNomeEUsuarioRepository,
} = require("../banco/repositorio/jogo-repositorio");
const {
  criarJogoCategoriaServico,
  atualizarJogoCategoriaServico,
  apagarJogoCategoriaServico,
} = require("./jogo-categoria-servico");

async function criarJogoServico(input) {
  try {
    const jogo = {
      nome: input.nome,
      descricao: input.descricao,
      nota: input.nota,
      fk_plataforma: input.fk_plataforma,
      fk_categoria: input.fk_categoria,
      fk_usuario: input.fk_usuario,
    };

    const jogoExistente = await buscarJogoPorNomeEUsuarioRepository(jogo);

    if (jogoExistente) {
      throw new Error("O jogo já existe.");
    }

    const novoJogo = await criarJogoRepository(jogo);

    const jogoCategoria = {
      fk_categoria: input.fk_categoria,
      fk_jogo: novoJogo.id,
    };

    await criarJogoCategoriaServico(jogoCategoria);

    return jogoCategoria;
  } catch (error) {
    console.log(error);
    throw new Error(`Erro ao criar um jogo: ${error.message}`);
  }
}

async function buscarJogoPorUsuarioServico(input) {
  try {
    const jogoExistente = await buscarJogoPorUsuarioRepository(input);

    if (!jogoExistente) {
      throw new Error("O jogo não existe.");
    }

    const dadosCombinados = jogoExistente.reduce((acc, item) => {
      if (!acc[item.nome]) {
        acc[item.nome] = {
          id: item.id,
          nome: item.nome,
          nota: item.nota,
          descricao: item.descricao,
          plataforma_id: item.plataforma_id,
          plataforma_nome: item.plataforma_nome,
          plataforma_descricao: item.plataforma_descricao,
          jogo_categoria_id: item.jogo_categoria_id,
          categorias: [],
        };
      }

      acc[item.nome].categorias.push({
        categoria_id: item.categoria_id,
        categoria_nome: item.categoria_nome,
      });

      return acc;
    }, {});

    return Object.values(dadosCombinados);
  } catch (error) {
    throw new Error(`Erro ao buscar um jogo: ${error.message}`);
  }
}

async function buscarJogoServico(id) {
  try {
    const jogoExistente = await buscarJogoRepository(id);

    if (!jogoExistente) {
      throw new Error("O jogo não existe.");
    }

    const dadosCombinados = jogoExistente.reduce((acc, item) => {
      if (!acc[item.nome]) {
        acc[item.nome] = {
          id: item.id,
          jogo_categoria: [],
          nome: item.nome,
          nota: item.nota,
          descricao: item.descricao,
          plataforma_id: item.plataforma_id,
          plataforma_nome: item.plataforma_nome,
          plataforma_descricao: item.plataforma_descricao,
          categorias: [],
        };
      }

      acc[item.nome].categorias.push({
        categoria_id: item.categoria_id,
        categoria_nome: item.categoria_nome,
      });

      acc[item.nome].jogo_categoria.push({
        jogo_categoria_id: item.jogo_categoria_id,
      });

      return acc;
    }, {});

    return Object.values(dadosCombinados)[0];
  } catch (error) {
    throw new Error(`Erro ao buscar um jogo: ${error.message}`);
  }
}

async function listarJogoServico() {
  try {
    const jogos = await listarJogosRepository(input);

    return jogos;
  } catch (error) {
    throw new Error(`Erro ao listar os jogos: ${error.message}`);
  }
}

async function atualizarJogoServico(input) {
  try {
    const jogo = {
      id: input.id,
      nome: input.nome,
      descricao: input.descricao,
      nota: input.nota,
      fk_plataforma: input.fk_plataforma,
      fk_categoria: input.fk_categoria,
      fk_usuario: input.fk_usuario,
    };

    const jogoExistente = await buscarJogoServico(input.id);

    const jogoExistenteNome = await buscarJogoPorNomeEUsuarioRepository(jogo);

    if (!jogoExistente) {
      throw new Error("O jogo não existe.");
    } else if (jogoExistenteNome && jogo.id != jogoExistenteNome?.id) {
      throw new Error("O jogo já existe.");
    }

    await atualizarJogoCategoriaServico(jogoExistente, jogo);

    const jogoAtualizado = await atualizarJogoRepository(jogo.id, jogo);

    return jogoAtualizado;
  } catch (error) {
    throw new Error(`Erro ao atualizar um jogo: ${error.message}`);
  }
}

async function apagarJogoServico(input) {
  try {
    const jaExiste = await buscarJogoRepository(input.id);

    if (!jaExiste) {
      throw new Error(
        `Nenhum jogo com esse id foi encontrado na base de dados.`
      );
    }

    await apagarJogoCategoriaServico(input.id);

    const jogo = await apagarJogoRepository(input);

    return jogo;
  } catch (error) {
    throw new Error(`Erro ao apagar um jogo: ${error.message}`);
  }
}

module.exports = {
  criarJogoServico,
  buscarJogoServico,
  apagarJogoServico,
  atualizarJogoServico,
  listarJogoServico,
  buscarJogoPorUsuarioServico,
};
