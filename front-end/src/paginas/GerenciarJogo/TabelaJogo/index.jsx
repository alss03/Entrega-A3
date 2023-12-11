import { PropTypes } from "prop-types";

TabelaJogo.propTypes = {
  colunas: PropTypes.array,
  linhas: PropTypes.array,
  // atualizarLinhas: PropTypes.func,
};

export function TabelaJogo(props) {
  return (
    <div className="table-responsive vw-100 my-4">
      <table className="table table-hover">
        <thead>
          <tr>
            {props.colunas.map((coluna, index) => (
              <th key={index} scope="col">
                {coluna.nome}
              </th>
            ))}
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.linhas.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td className="text-justify text-overflow-ellipses">
                {item.descricao}
              </td>
              <td>
                <a className="color-black" href={`./editar-jogo?id=${item.id}`}>
                  <span className="material-symbols-outlined">edit</span>
                </a>
                <a className="color-black" href={`./apagar-jogo?id=${item.id}`}>
                  <span className="material-symbols-outlined">delete</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
