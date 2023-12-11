import { useState } from "react";
import { Cabecalho } from "../../componentes/Cabecalho";
import { TabelaJogo } from "./TabelaJogo";

export function GerenciarJogo() {
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
    // {
    //   name: "Nota",
    // },
    // {
    //   name: "Plataforma",
    // },
  ]);

  const [jogos] = useState([
    {
      id: 1,
      nome: "Ragnarok",
      descricao: "Lore impsom",
      categorias: [
        {
          id: 1,
          nome: "Zerado",
        },
      ],
    },
    {
      id: 2,
      nome: "Ragnarok",
      descricao: "Lore impsom",
      categorias: [
        {
          id: 1,
          nome: "Zerado",
        },
      ],
    },
    {
      id: 3,
      nome: "Ragnarok",
      descricao: "Lore impsom",
      categorias: [
        {
          id: 1,
          nome: "Zerado",
        },
      ],
    },
    {
      id: 4,
      nome: "Ragnarok",
      descricao: "Lore impsom",
      categorias: [
        {
          id: 1,
          nome: "Zerado",
        },
      ],
    },
    {
      id: 5,
      nome: "Ragnarok",
      descricao: "Lore impsom",
      categorias: [
        {
          id: 1,
          nome: "Zerado",
        },
      ],
    },
  ]);

  return (
    <>
      <Cabecalho />
      <div className="d-flex align-items-center justify-content-center flex-column my-4">
        <div className="d-flex w-50 bg-dark text-white fs-3 rounded py-2">
          <div className="d-flex align-items-center justify-content-center w-100">
            <span>Gerenciar meus jogos</span>
          </div>
        </div>

        <div className="w-100 d-flex flex-column">
          <div className="d-flex w-50">
            <a
              href="criar-jogo"
              className="w-25 py-2 text-center bg-dark text-white border-rounded text-decoration-none"
            >
              Adicionar Jogo
            </a>
          </div>

          <div className="w-100 justify-content-start align-items-start">
            <TabelaJogo linhas={jogos} colunas={colunas} />
          </div>
        </div>
      </div>
    </>
  );
}
