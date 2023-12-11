import { useState } from "react";
import { Cabecalho } from "../../../componentes/Cabecalho";
import { useNavigate } from "react-router-dom";

export function EditarJogo() {
  const initialValues = {
    nome: "",
    descricao: "",
    fk_plataforma: "",
    nota: "",
    fk_usuario: "",
  };
  const [values, setValues] = useState(initialValues);
  const [platforms] = useState([]);
  const [categories] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <Cabecalho />
      <div className="d-flex align-items-center justify-content-center flex-column my-4">
        <div className="d-flex bg-dark text-white align-items-center flex-column justify-content-center w-50 h-50">
          <h2>Editar Jogo</h2>

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

            <label className="text-white d-flex" htmlFor="plataforma">
              Nota
            </label>
            <select
              className="w-50 m-2 ms-0 h-10"
              name="nota"
              id="nota"
              required
              value={values.nota}
              onChange={(event) =>
                setValues({ ...values, nota: event.target.value })
              }
            >
              <option>Selecione uma nota</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <label className="color-white d-flex" htmlFor="fk_plataforma">
              Plataforma
            </label>
            <select
              className="w-50 m-2 ms-0 h-10"
              name="fk_plataforma"
              id="fk_plataforma"
              value={values.fk_plataforma}
              required
              onChange={(event) =>
                setValues({ ...values, fk_plataforma: event.target.value })
              }
            >
              <option>Selecione uma plataforma</option>
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.nome}
                </option>
              ))}
            </select>

            <label className="color-white d-flex" htmlFor="fk_categoria">
              Categorias
            </label>
            <select
              className="w-50 m-2 ms-0 h-10"
              name="fk_categoria"
              id="fk_categoria"
              value={values.fk_categoria}
              required
              onChange={(event) => {
                const selectedOptions = Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                );
                setValues({ ...values, fk_categoria: selectedOptions });
              }}
              multiple
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nome}
                </option>
              ))}
            </select>
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
