const {
  criarPlataformaRepository,
  buscarPlataformaRepository,
  listarPlataformaRepository,
} = require("../banco/repositorio/plataforma-repositorio");

async function criarPlataformaServico(input) {
  try {
    const plataforma = await criarPlataformaRepository(input);

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao criar uma plataforma: ${error}`);
  }
}

async function buscarPlataformaServico(input) {
  try {
    const plataforma = await buscarPlataformaRepository(input);

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao buscar uma plataforma: ${error}`);
  }
}

async function listarPlataformaServico() {
  try {
    const plataforma = await listarPlataformaRepository();

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao listar uma plataforma: ${error}`);
  }
}

async function atualizarPlataformaServico(input) {
  try {
    const plataforma = await atualizarPlataformaRepository(input);

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao atualizar uma plataforma: ${error}`);
  }
}

async function apagarPlataformaServico(input) {
  try {
    const plataforma = await apagarPlataformaRepository(input);

    return plataforma;
  } catch (error) {
    throw new Error(`Erro ao apagar uma plataforma: ${error}`);
  }
}

module.exports = {
  criarPlataformaServico,
  buscarPlataformaServico,
  apagarPlataformaServico,
  atualizarPlataformaServico,
  listarPlataformaServico,
};
