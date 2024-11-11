import React, { useState } from 'react';
import api from '../api/api';

function CadastrarProjeto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novoProjeto = { nome, descricao };

    try {
      await api.post('/projetos', novoProjeto);
      alert('Projeto cadastrado com sucesso!');
      setNome('');
      setDescricao('');
    } catch (error) {
      console.error('Erro ao cadastrar projeto:', error);
      alert('Erro ao cadastrar o projeto.');
    }
  };

  return (
    <div>
      <h2>Cadastrar Projeto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarProjeto;
