import { useState } from "react";
import { login } from "../../servicos/usuario-servico";
import { toast } from "react-toastify";

export function Login() {
  const valoresIniciais = {
    email: "",
    senha: "",
  };
  const [valores, setValores] = useState(valoresIniciais);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await login(valores);

      console.log(response);
    } catch (error) {
      toast(error.data.message);
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-secondary vw-100 vh-100">
        <div className="d-flex bg-dark text-white align-items-center flex-column justify-content-center w-50 h-50">
          <h2>Entrar</h2>

          <form
            onSubmit={(event) => onSubmit(event)}
            className="d-flex flex-column w-100 h-50 align-items-center justify-content-center"
          >
            <input
              required
              type="email"
              placeholder="E-mail"
              className=" m-2 ms-0"
              onChange={(event) =>
                setValores({ ...valores, email: event.target.value })
              }
            />

            <input
              required
              type="password"
              id="password"
              placeholder="Senha"
              className=" m-2 ms-0 h-10"
              onChange={(event) =>
                setValores({ ...valores, senha: event.target.value })
              }
            />

            <div className="w-100 d-flex justify-content-center">
              <button
                type="submit"
                className="bg-secondary rounded w-25 m-2 ms-0"
              >
                Faça login
              </button>
            </div>
          </form>
          <div>
            <div>
              <p>
                Não tem uma conta? <a href="registro">Registre-se!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
