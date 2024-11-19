import React, { useEffect, useState } from "react";

function ContratoList() {
  const [contratos, setContratos] = useState([]);
  const [cpf, setCpf] = useState("");

  const fetchContratos = async (cpf) => {
    try {
      const response = await fetch(
        cpf
          ? `http://localhost:8080/api/contratos?cpf=${cpf}`
          : "http://localhost:8080/api/contratos"
      );
      const data = await response.json();
      setContratos(data);
    } catch (error) {
      console.error("Erro ao buscar contratos:", error);
    }
  };

  useEffect(() => {
    fetchContratos();
  }, []);

  const handleDelete = async (idContrato) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/contratos/${idContrato}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        alert("Contrato excluído com sucesso!");
        fetchContratos(cpf);
      } else {
        alert("Erro ao excluir contrato.");
      }
    } catch (error) {
      console.error("Erro ao excluir contrato:", error);
    }
  };

  return (
    <div className="container">
   


      {contratos.length > 0 ? (
        <table  >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Cliente</th>
              <th>Valor Líquido</th>
             
            </tr>
          </thead>
          <tbody>
            {contratos.map((contrato) => (
              <tr key={contrato.idContrato}>
                <td>{contrato.idContrato}</td>
                <td>{contrato.nomeCliente}</td>
                <td>{contrato.valorLiquido} R$</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Não há contratos para exibir.</p>
      )}
    </div>
  );
}

export default ContratoList;
