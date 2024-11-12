import React, { useState, useEffect } from 'react';

function ConsultorList() {
  const [consultores, setConsultores] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [emailEditado, setEmailEditado] = useState('');

  // Carregar consultores do localStorage
  useEffect(() => {
    const consultoresSalvos = JSON.parse(localStorage.getItem('consultores')) || [];
    setConsultores(consultoresSalvos);
  }, []);

  // Função para salvar edição
  const salvarEdicao = (index) => {
    const consultoresAtualizados = [...consultores];
    consultoresAtualizados[index] = { nome: nomeEditado, email: emailEditado };
    setConsultores(consultoresAtualizados);
    localStorage.setItem('consultores', JSON.stringify(consultoresAtualizados));
    cancelarEdicao();
  };

  // Função para iniciar edição
  const iniciarEdicao = (index) => {
    setEditandoIndex(index);
    setNomeEditado(consultores[index].nome);
    setEmailEditado(consultores[index].email);
  };

  // Função para cancelar edição
  const cancelarEdicao = () => {
    setEditandoIndex(null);
    setNomeEditado('');
    setEmailEditado('');
  };

  // Função para excluir consultor
  const excluirConsultor = (index) => {
    const consultoresAtualizados = consultores.filter((_, i) => i !== index);
    setConsultores(consultoresAtualizados);
    localStorage.setItem('consultores', JSON.stringify(consultoresAtualizados));
  };

  return (
    <div>
      <h2>Lista de Consultores</h2>
      <ul>
        {consultores.map((consultor, index) => (
          <li key={index}>
            {editandoIndex === index ? (
              <>
                <input
                  type="text"
                  value={nomeEditado}
                  onChange={(e) => setNomeEditado(e.target.value)}
                  placeholder="Nome"
                />
                <input
                  type="email"
                  value={emailEditado}
                  onChange={(e) => setEmailEditado(e.target.value)}
                  placeholder="Email"
                />
                <button onClick={() => salvarEdicao(index)}>Salvar</button>
                <button onClick={cancelarEdicao}>Cancelar</button>
              </>
            ) : (
              <>
                {consultor.nome} - {consultor.email}
                <button onClick={() => iniciarEdicao(index)}>Editar</button>
                <button onClick={() => excluirConsultor(index)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultorList;
