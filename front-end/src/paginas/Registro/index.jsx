export function Registro() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-secondary vw-100 vh-100">
        <div className="d-flex bg-dark text-white align-items-center flex-column justify-content-center w-50 h-50">
          <h2>Cadastre-se</h2>

          <form className="d-flex flex-column w-100 h-50 align-items-center justify-content-center">
            <input
              required
              type="email"
              placeholder="E-mail"
              className="flex-grow-1 m-2 ms-0"
            />

            <input
              required
              type="text"
              placeholder="Usuário"
              className="flex-grow-1 m-2 ms-0"
            />

            <input
              required
              type="password"
              id="password"
              placeholder="Senha"
              className="flex-grow-1 m-2 ms-0"
            />

            <input
              required
              type="password"
              id="confirm_password"
              placeholder="Confirmar Senha"
              className="flex-grow-1 m-2 ms-0"
            />

            <div className="w-100 d-flex justify-content-center">
              <button className="bg-secondary rounded w-25 m-2 ms-0">
                Cadastrar
              </button>
            </div>
          </form>
          <div>
            <div>
              <p>
                Já tem uma conta? <a href="/">Faça login!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
