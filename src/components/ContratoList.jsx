import React, { useEffect, useState } from 'react';

function ContratoList() {
  const [contratos, setContratos] = useState([]);

  const fetchContratos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/contratos');
      const data = await response.json();
      setContratos(data);
    } catch (error) {
      console.error('Erro ao buscar contratos:', error);
    }
  };

  useEffect(() => {
    fetchContratos();
  }, []);

  const handleDelete = async (idContrato) => {
    try {
      const response = await fetch(`http://localhost:8080/api/contratos/${idContrato}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Contrato excluído com sucesso!');
        fetchContratos(); // Atualiza a lista
      } else {
        alert('Erro ao excluir contrato.');
      }
    } catch (error) {
      console.error('Erro ao excluir contrato:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Contratos</h2>
      <ul>
        {contratos.length === 0 ? (
          <li>Nenhum contrato encontrado.</li>
        ) : (
          contratos.map((contrato) => (
            <li key={contrato.idContrato}>
              <p>
                <strong>ID:</strong> {contrato.idContrato} -{' '}
                <strong>Nome:</strong> {contrato.nomeCliente} -{' '}
                <strong>Valor Líquido:</strong> {contrato.valorLiquido}
              </p>
              <button onClick={() => handleDelete(contrato.idContrato)}>Excluir</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ContratoList;
