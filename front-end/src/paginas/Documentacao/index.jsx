import { Cabecalho } from "../../componentes/Cabecalho";

export function Documentacao() {
  return (
    <>
      <Cabecalho />
      <div className="d-flex align-items-center justify-content-center flex-column my-4">
        <div className="d-flex w-50 bg-dark text-white fs-3 rounded py-2">
          <div className="d-flex align-items-center justify-content-center w-100">
            <span>Documentação</span>
          </div>
        </div>

        <div className="d-flex w-50 bg-dark text-white rounded py-2 my-4 justify-content-center align-items-center">
          <div className="w-75 d-flex flex-column justify-content-center align-items-center">
            <div>
              <h1 className="align-self-center mb-4">
                Bem-vindo ao Dominus Pro
              </h1>
              <h2 className="">Visão Geral</h2>
              <p className="text-justify fs-6">
                A Dominus Pro oferece uma plataforma completa para administrar e
                desfrutar de uma vasta gama de jogos. Com recursos de
                catalogação e organização, proporcionamos uma experiência de
                gerenciamento de jogos simplificada.
              </p>
            </div>
            <div>
              <h2>Recursos Principais</h2>
              <span className="fw-600">Gerenciamento de Jogos:</span>
              <p className="text-justify fs-6">
                Tenha controle total sobre seus jogos, adicione novos jogos
                atribuindo notas, plataforma e categorizando de acordo com sua
                experiência personalizada. Tenha controle total sobre os jogos,
                removendo, alterando a depender da sua necessidade.
              </p>
              <span className="fw-600">Gerenciamento de Plataforma:</span>
              <p className="text-justify fs-6">
                Temos uma proposta diferente para a plataforma, a medida que os
                usuários forem cadastrando as plataformas, essas plataformas
                poderão ser utilizadas por todos. Temos validações para
                alterações da plataforma limitando ao usuário a atualizar ou
                remover uma plataforma que tenha jogos vinculados.
              </p>
              <span className="fw-600">Meus jogos:</span>
              <p className="text-justify fs-6">
                Tenha uma lista com todos os seus jogos, com filtro para
                conseguir buscar aquele jogo mais rápido. Tenha acesso a mais
                informações do seu jogo ao clicar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
