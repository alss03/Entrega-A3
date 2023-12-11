import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from "../rotas/Rotas";

function App() {
  return (
    <>
        <Rotas  />
        <ToastContainer theme="colored" />
    </>
  );
}

export default App;