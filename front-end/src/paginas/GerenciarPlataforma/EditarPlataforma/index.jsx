import { useState } from "react";
import { Cabecalho } from "../../../componentes/Cabecalho";
import { useNavigate } from "react-router-dom";

export function EditarPlataforma() {
  const initialValues = {
    nome: "",
    descricao: "",
    fk_usuario: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  return (
    <>
      <Cabecalho />
      <div className="d-flex align-items-center justify-content-center flex-column my-4">
        <div className="d-flex bg-dark text-white align-items-center flex-column justify-content-center w-50 h-50">
          <h2>Editar Plataforma</h2>

          <form className="d-flex flex-column w-100 h-50 align-items-center justify-content-center my-4">
            <label className="text-white d-flex" htmlFor="nome">
              {" "}
              Nome{" "}
            </label>
            <input
              className="w-50 m-2 ms-0 h-10"
              name="nome"
              id="nome"
              required
              placeholder="Nome do Jogo"
              value={values.nome}
              onChange={(event) =>
                setValues({ ...values, nome: event.target.value })
              }
            />

            <label className="text-white d-flex" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              id="descricao"
              className="w-50 m-2 ms-0 h-10 text-justify"
              name="descricao"
              rows="4"
              cols="50"
              required
              value={values.descricao}
              onChange={(event) =>
                setValues({ ...values, descricao: event.target.value })
              }
              placeholder="Descrição"
            ></textarea>

            <div className="py-3 d-flex w-50 align-items-center justify-content-center">
              <div className="w-100">
                <button
                  className="bg-primary text-white border-0 rounded p-2 w-100"
                  type="submit"
                >
                  Salvar
                </button>
              </div>
              <div className="w-100">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-danger text-white border-0 rounded ml-2 p-2 w-100 mx-2"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
