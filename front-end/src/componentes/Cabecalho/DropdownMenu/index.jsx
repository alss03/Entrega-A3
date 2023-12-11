import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dropdown-menu.css";

export function DropdownMenu() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef();

  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuAberto(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="d-flex d-flex align-items-center hidden align-items-center align-items-center w-10 justify-content-center menu-container"
      ref={menuRef}
    >
      <div
        className={`menu-icon hidden ${menuAberto ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`menu py-4 ${menuAberto ? "open" : ""}`}>
        <ul>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="gerenciar-jogo"
            >
              Gerenciar meus jogos
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="gerenciar-plataforma"
            >
              Gerenciar plataformas
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="documentacao"
            >
              Documentação
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="/"
              id="sair"
              onClick={logout}
            >
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}