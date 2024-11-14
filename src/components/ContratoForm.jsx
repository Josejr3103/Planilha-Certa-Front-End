import React, { useState } from 'react';

function ContratoForm() {
  const [contrato, setContrato] = useState({
    idCliente: '',
    nomeCliente: '',
    dataInicio: '',
    valorServico: '',
    desconto: '',
    prioridadeAtendimento: 'alta', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContrato((prevContrato) => ({
      ...prevContrato,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl =
      contrato.prioridadeAtendimento === 'alta'
        ? 'http://localhost:8080/api/contratos/alta'
        : 'http://localhost:8080/api/contratos/baixa';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idCliente: contrato.idCliente,
          nomeCliente: contrato.nomeCliente,
          dataInicio: contrato.dataInicio,
          valorServico: parseFloat(contrato.valorServico),
          desconto: parseFloat(contrato.desconto),
          prioridadeAtendimento: contrato.prioridadeAtendimento,
        }),
      });
      if (response.ok) {
        alert('Contrato cadastrado com sucesso!');
        setContrato({
          idCliente: '',
          nomeCliente: '',
          dataInicio: '',
          valorServico: '',
          desconto: '',
          prioridadeAtendimento: 'alta',
        });
      } else {
        alert('Erro ao cadastrar contrato.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Contrato</h2>
      <div>
        <label>ID Cliente:</label>
        <input
        placeholder='ID do Cliente'
          type="number"
          name="idCliente"
          value={contrato.idCliente}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nome Cliente:</label>
        <input
        placeholder='Nome do Cliente'
          type="text"
          name="nomeCliente"
          value={contrato.nomeCliente}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Data Início:</label>
        <input
        placeholder='Data de início'
          type="date"
          name="dataInicio"
          value={contrato.dataInicio}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Valor Serviço:</label>
        <input
        placeholder='Valor do Serviço'
          type="number"
          name="valorServico"
          value={contrato.valorServico}
          onChange={handleChange}
          required
        />
      </div>
        
      <div>
        <label>Prioridade:</label>
        <select
      
          name="prioridadeAtendimento"
          value={contrato.prioridadeAtendimento}
          onChange={handleChange}
        >
          <option value="alta">Alta</option>
          <option value="baixa">Baixa</option>
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default ContratoForm;
