const {
  criarJogoCategoriaRepository,
  buscarJogoPorCategoriaExistenteRepository,
} = require("../banco/repositorio/jogo-categoria-repositorio");
const {
  buscarJogoPorNomeEUsuarioRepository,
} = require("../banco/repositorio/jogo-repositorio");
const { buscarJogoServico } = require("./jogo-servico");

async function criarJogoCategoriaServico(input) {
  try {
    const meusJogosCategoria = {
      fk_jogo: input.fk_jogo,
      fk_categoria: input.fk_categoria,
    };

    const promisesBuscaCategoria = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente =
          await buscarJogoPorCategoriaExistenteRepository({
            fk_jogo: meusJogosCategoria.fk_jogo,
            fk_categoria: categoria,
          });
        return categoriaExistente;
      }
    );

    const categoriasExistenteResultados = await Promise.all(
      promisesBuscaCategoria
    );

    const existeCategoriaExistente = categoriasExistenteResultados.some(
      (categoria) => categoria
    );

    if (existeCategoriaExistente) {
      throw new Error(
        "Esse jogo já possui essa categoria associada na sua lista de jogos."
      );
    }

    const promisesCriarCategorias = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await criarJogoCategoriaRepository({
          fk_jogo: meusJogosCategoria.fk_jogo,
          fk_categoria: categoria,
        });
        return categoriaExistente;
      }
    );

    const promisesCriarCategoriasAguardar = await Promise.all(
      promisesCriarCategorias
    );

    return promisesCriarCategoriasAguardar;
  } catch (error) {
    throw new Error(
      `Erro ao adicionar o jogo a sua lista de jogos: ${error.message}`
    );
  }
}

async function atualizarJogoCategoriaServico(jogoCategoria, input) {
  try {
    const listaDeJogos = {
      id: jogoCategoria.id,
      nome: jogoCategoria.nome,
      descricao: jogoCategoria.descricao,
      nota: jogoCategoria.nota,
      fk_plataforma: jogoCategoria.fk_plataforma,
      fk_categoria: jogoCategoria.fk_categoria,
      fk_usuario: jogoCategoria.fk_usuario,
    };

    const promisesApagarJogoCategoria = listaDeJogos.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await apagarJogoCategoriaRepository(
          listaDeJogos.fk_jogo
        );
        return categoriaExistente;
      }
    );

    await Promise.all(promisesApagarJogoCategoria);

    const promisesBuscaCategoria = input.fk_categoria.map(async (categoria) => {
      const categoriaExistente =
        await buscarMeusJogosCategoriaExistenteRepository({
          fk_jogo: listaDeJogos.fk_jogo,
          fk_categoria: categoria,
        });
      return categoriaExistente;
    });

    const categoriasExistenteResultados = await Promise.all(
      promisesBuscaCategoria
    );

    const existeCategoriaExistente = categoriasExistenteResultados.some(
      (categoria) => categoria
    );

    if (existeCategoriaExistente) {
      const error = new Error("Esse jogo não existe.");
      error.statusCode = 404;
      throw error;
    }

    const promisesCriarCategoria = input.fk_categoria.map(async (categoria) => {
      const categoriaExistente = await criarJogoCategoriaRepository({
        fk_jogo: listaDeJogos.fk_jogo,
        fk_categoria: categoria,
      });
      return categoriaExistente;
    });

    // Aguarda todas as promessas serem resolvidas
    const criarCategoriasResultados = await Promise.all(promisesCriarCategoria);

    return criarCategoriasResultados;
  } catch (error) {
    throw new Error(`Erro ao atualizar um jogo categoria: ${error}`);
  }
}

async function apagarJogoCategoriaServico(input) {
  try {
    const meusJogosCategoria = {
      fk_jogo: input.id,
      fk_categoria: input.categorias,
    };

    const promisesBuscaCategoria = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente =
          await buscarMeusJogosCategoriaExistenteRepository({
            fk_jogo: meusJogosCategoria.fk_jogo,
            fk_categoria: categoria.categoria_id,
          });
        return categoriaExistente;
      }
    );

    const categoriasExistenteResultados = await Promise.all(
      promisesBuscaCategoria
    );

    const existeCategoriaExistente = categoriasExistenteResultados.some(
      (categoria) => categoria
    );

    if (!existeCategoriaExistente) {
      const error = new Error("Esse jogo não existe.");
      error.statusCode = 404;
      throw error;
    }

    const promisesApagarJogoCategoria = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await apagarJogoCategoriaRepository(
          meusJogosCategoria.fk_jogo
        );
        return categoriaExistente;
      }
    );

    const promisesApagarJogoCategoriaAguardar = await Promise.all(
      promisesApagarJogoCategoria
    );

    return promisesApagarJogoCategoriaAguardar;
  } catch (error) {
    throw new Error(`Erro ao apagar um jogo categoria: ${error}`);
  }
}

module.exports = {
  criarJogoCategoriaServico,
  apagarJogoCategoriaServico,
  atualizarJogoCategoriaServico,
};
