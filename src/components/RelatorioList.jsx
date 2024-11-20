import React, { useState } from "react";
import RelatorioService from "../services/RelatorioService";

const RelatorioList = () => {
  const [cpf, setCpf] = useState("");
  const [relatorios, setRelatorios] = useState([]);

  const buscarRelatoriosPorCpf = () => {
    RelatorioService.obterRelatoriosPorCpf(cpf)
      .then((response) => {
        setRelatorios(response.data);
        console.log("Dados recebidos da API:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar relatórios:", error);
      });
  };

  return (
    <div className="containere">
      <h2 className="titulo-re">Buscar Relatórios por CPF</h2>

<div class="input-container">
     <input
     className="input-re"
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
      />
  <span class="icon-re"> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </span>
</div>

<button onClick={buscarRelatoriosPorCpf} class="cta">
  <span class="hover-underline-animation">Buscar </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button>

     

      {relatorios.length > 0 ? (
        <table className="tabela-re"  style={{ marginRight:"1200px", marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>Nome do Cliente</th>
              <th>Nome do Consultor</th>
              <th>Descrição do Projeto</th>
              <th>Desconto</th>
              <th>Pagamento</th>
              <th>Liquido</th>
              <th>Etapa</th>
            </tr>
          </thead>
          <tbody>
            {relatorios.map((relatorio, index) => (
              <tr key={index}>
                <td>{relatorio.nomeCliente}</td>
                <td>{relatorio.nomeConsultor}</td>
                <td>{relatorio.descicaoProjeto}</td>
                <td>{relatorio.descontoEtapa}</td> 
                <td>{relatorio.pagamento}</td> 
                <td>{relatorio.liquido}</td> 
                <td>{relatorio.nomeEtapa}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="texto-re">Não há relatórios para exibir.</p>
      )}
    </div>
  );
};

export default RelatorioList;
