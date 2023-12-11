import { useState } from "react";
import { Cabecalho } from "../../componentes/Cabecalho";
import { TabelaPlataforma } from "./TabelaPlataforma";

export function GerenciarPlataforma() {
  const [colunas] = useState([
    {
      nome: "Id",
    },
    {
      nome: "Nome",
    },
    {
      nome: "Descrição",
    },
  ]);

  const [jogos] = useState([
    {
      id: 1,
      nome: "PSN",
      descricao: "Lore impsom",
    },
    {
      id: 2,
      nome: "PSN",
      descricao: "Lore impsom",
    },
    {
      id: 3,
      nome: "PSN",
      descricao: "Lore impsom",
    },
    {
      id: 4,
      nome: "PSN",
      descricao: "Lore impsom",
    },
    {
      id: 5,
      nome: "PSN",
      descricao: "Lore impsom",
    },
  ]);

  return (
    <>
      <Cabecalho />
      <div className="d-flex align-items-center justify-content-center flex-column my-4">
        <div className="d-flex w-50 bg-dark text-white fs-3 rounded py-2">
          <div className="d-flex align-items-center justify-content-center w-100">
            <span>Gerenciar minhas plataformas</span>
          </div>
        </div>

        <div className="w-100 d-flex flex-column">
          <div className="d-flex w-50">
            <a
              href="criar-plataforma"
              className="w-25 py-2 text-center bg-dark text-white border-rounded text-decoration-none"
            >
              Adicionar Plataforma
            </a>
          </div>

          <div className="w-100 justify-content-start align-items-start">
            <TabelaPlataforma linhas={jogos} colunas={colunas} />
          </div>
        </div>
      </div>
    </>
  );
}
