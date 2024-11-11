import React, { useEffect, useState } from 'react';
import api from '../api/api';

function ListarProjetos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await api.get('/projetos');
        console.log(response.data); 

  
        const sortedProjetos = response.data.sort((a, b) => {
          if (a.isVip && !b.isVip) return -1; 
          if (!a.isVip && b.isVip) return 1;
          return 0; 
        });

        setProjetos(sortedProjetos);
      } catch (error) {
        console.error('Erro ao listar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  return (
    <div>
      <h2>Lista de Projetos</h2>
      {projetos.length === 0 ? (
        <p>Nenhum projeto cadastrado.</p>
      ) : (
        <ul>
          {projetos.map((projeto) => (
            <li key={projeto.idProjeto}>
              <strong>ID:</strong> {projeto.idProjeto} | 
              <strong> Nome:</strong> {projeto.nome || projeto.projetoNome} | 
              <strong> Descrição:</strong> {projeto.descricao || projeto.projetoDescricao} |
              <strong> VIP:</strong> {projeto.isVip ? 'Sim' : 'Não'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListarProjetos;
