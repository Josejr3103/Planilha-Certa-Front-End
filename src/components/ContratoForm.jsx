
import React, { useState } from 'react';
import { cadastrarContratoAlta, cadastrarContratoBaixa } from '../services/ContratoService';

const ContratoForm = () => {
  const [cpfCliente, setCpfCliente] = useState('');
  const [valorServico, setValorServico] = useState('');
  const [prioridadeAtendimento, setPrioridadeAtendimento] = useState('Alta');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const contrato = {
      cpfCliente,
      valorServico: parseFloat(valorServico),
      prioridadeAtendimento,
      dataInicio: new Date(),
    };

    try {
      let response;
      if (prioridadeAtendimento === 'Alta') {
        response = await cadastrarContratoAlta(contrato);
      } else {
        response = await cadastrarContratoBaixa(contrato);
      }

      if (response) {
        alert('Contrato cadastrado com sucesso!');
 
        setCpfCliente('');
        setValorServico('');
      }
    } catch (err) {
      setError('Erro ao cadastrar contrato. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Cadastrar Contrato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF Cliente:</label>
          <input
            type="text"
            value={cpfCliente}
            onChange={(e) => setCpfCliente(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Valor do Serviço:</label>
          <input
            type="number"
            value={valorServico}
            onChange={(e) => setValorServico(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Prioridade de Atendimento:</label>
          <select
            value={prioridadeAtendimento}
            onChange={(e) => setPrioridadeAtendimento(e.target.value)}
          >
            <option value="Alta">Alta</option>
            <option value="Baixa">Baixa</option>
          </select>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar Contrato'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ContratoForm;
