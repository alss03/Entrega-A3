import Logo from "../../assets/logo.png";
import { DropdownMenu } from "./DropdownMenu";
import "./cabecalho.css";

export function Cabecalho() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center vw-100 w-mobile-100">
        <DropdownMenu />
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-between align-items-center w-75 w-mobile-100 flex-nowrap">
          <a className="navbar-brand">
            <img
              src={Logo}
              width="250"
              height="75"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <a
            className="navbar-brand d-mobile-none d-tablet-none d-laptop-none"
            href="gerenciar-jogo"
          >
            <span style={{ fontSize: "1vw" }}>Gerenciar Meus Jogos</span>
          </a>
          <a
            className="navbar-brand d-mobile-none d-tablet-none d-laptop-none"
            href="gerenciar-plataforma"
          >
            <span style={{ fontSize: "1vw" }}>Gerenciar Plataformas</span>
          </a>
          <a
            className="navbar-brand d-mobile-none d-tablet-none d-laptop-none"
            href="documentacao"
          >
            <span style={{ fontSize: "1vw" }}>Documentação</span>
          </a>
          <a
            className="navbar-brand d-mobile-none d-tablet-none d-laptop-none"
            onClick={() => console.log('saiu')}
          >
            <span style={{ fontSize: "1vw" }}>Sair</span>
          </a>
        </nav>
      </nav>
    </header>
  );
}
