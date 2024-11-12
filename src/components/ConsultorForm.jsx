import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConsultorForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    const novoConsultor = { nome, email };
    const consultoresExistentes = JSON.parse(localStorage.getItem('consultores')) || [];
    consultoresExistentes.push(novoConsultor);
    localStorage.setItem('consultores', JSON.stringify(consultoresExistentes));

    setNome('');
    setEmail('');
    navigate('/consultor/lista');
  };

  return (
    <div>
      <h2>Cadastrar Consultor</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default ConsultorForm;
