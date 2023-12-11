import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../paginas/Login";
import { Registro } from "../paginas/Registro";
import { GerenciarJogo } from "../paginas/GerenciarJogo";
import { GerenciarPlataforma } from "../paginas/GerenciarPlataforma";
import { Documentacao } from "../paginas/Documentacao";
import { CriarJogo } from "../paginas/GerenciarJogo/CriarJogo";
import { ApagarJogo } from "../paginas/GerenciarJogo/ApagarJogo";
import { EditarJogo } from "../paginas/GerenciarJogo/EditarJogo";
import { EditarPlataforma } from "../paginas/GerenciarPlataforma/EditarPlataforma";
import { CriarPlataforma } from "../paginas/GerenciarPlataforma/CriarPlataforma";
import { ApagarPlataforma } from "../paginas/GerenciarPlataforma/ApagarPlataforma";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/gerenciar-jogo" element={<GerenciarJogo />} />
        <Route path="/gerenciar-plataforma" element={<GerenciarPlataforma />} />
        <Route path="/documentacao" element={<Documentacao />} />
        <Route path="/editar-jogo" element={<EditarJogo />} />
        <Route path="/criar-jogo" element={<CriarJogo />} />
        <Route path="/apagar-jogo" element={<ApagarJogo />} />
        <Route path="/editar-plataforma" element={<EditarPlataforma />} />
        <Route path="/criar-plataforma" element={<CriarPlataforma />} />
        <Route path="/apagar-plataforma" element={<ApagarPlataforma />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
