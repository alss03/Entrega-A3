import { PropTypes } from "prop-types";

TabelaPlataforma.propTypes = {
  colunas: PropTypes.array,
  linhas: PropTypes.array,
  // atualizarLinhas: PropTypes.func,
};

export function TabelaPlataforma(props) {
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
          {props.linhas.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td className="text-justify text-overflow-ellipses">
                {item.descricao}
              </td>
              <td>
                <a className="color-black" href={`./editar-plataforma?id=${item.id}`}>
                  <span className="material-symbols-outlined">edit</span>
                </a>
                <a className="color-black" href={`./apagar-plataforma?id=${item.id}`}>
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
