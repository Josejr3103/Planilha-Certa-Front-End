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
    <div className="container">
      <h2>Buscar Relatórios por CPF</h2>
      <input
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
      />
      <button onClick={buscarRelatoriosPorCpf}>Buscar</button>

      {relatorios.length > 0 ? (
        <table border="1" style={{ marginTop: "20px", width: "100%" }}>
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
        <p>Não há relatórios para exibir.</p>
      )}
    </div>
  );
};

export default RelatorioList;
