import React, { useState, useEffect } from 'react';
import  ProjetosService  from '../services/ProjetosService';

function ProjetosList() {
  const [projetos, setProjetos] = useState([]);
  const [editandoProjeto, setEditandoProjeto] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [descricaoEditada, setDescricaoEditada] = useState('');
  const [isModalAberto, setIsModalAberto] = useState(false);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const data = await ProjetosService.listarProjetos();
        setProjetos(data);
      } catch (error) {
        console.error('Erro ao listar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  const iniciarEdicao = (projeto) => {
    setEditandoProjeto(projeto);
    setNomeEditado(projeto.nomeProjeto);
    setDescricaoEditada(projeto.descricaoProjeto);
    setIsModalAberto(true);
  };

  const cancelarEdicao = () => {
    setEditandoProjeto(null);
    setNomeEditado('');
    setDescricaoEditada('');
    setIsModalAberto(false);
  };

  const confirmarEdicao = async () => {
    if (!editandoProjeto) return;

    const projetoAtualizado = {
      ...editandoProjeto,
      nomeProjeto: nomeEditado,
      descricaoProjeto: descricaoEditada,
    };

    try {
      await ProjetosService.editarProjeto(projetoAtualizado);
      const projetosAtualizados = projetos.map((projeto) =>
        projeto.idProjeto === editandoProjeto.idProjeto ? projetoAtualizado : projeto
      );
      setProjetos(projetosAtualizados);
      cancelarEdicao();
      alert('Projeto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao editar projeto:', error);
      alert('Erro ao atualizar projeto.');
    }
  };

  const handleExcluir = async (idProjeto) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este projeto?');
    if (!confirmacao) return;

    try {
      await ProjetosService.excluirProjeto(idProjeto);
      setProjetos(projetos.filter((projeto) => projeto.idProjeto !== idProjeto));
      alert('Projeto excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
      alert('Erro ao excluir projeto.');
    }
  };

  return (
    <>
      <div className='container'>
       

        {projetos.length > 0 ? (
          <table className='tabela-projetos'>
            <thead>
              <tr>
                <th>Nome do Projeto</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {projetos.map((projeto) => (
                <tr key={projeto.idProjeto}>
                  {editandoProjeto?.idProjeto === projeto.idProjeto ? (
                    <>
                      <td colSpan="3">
                        <div className="modal" style={isModalAberto ? { display: 'block' } : { display: 'none' }}>
                          <div className="modal-content">
                            <h3>Edição de Projeto</h3>
                            <div className="group">
                              <input
                                className='input'
                                type="text"
                                value={nomeEditado}
                                onChange={(e) => setNomeEditado(e.target.value)}
                              />
                              <span className="highlight"></span>
                              <span className="bar"></span>
                              <label>Nome do Projeto</label>
                            </div>

                            <textarea
                              className='input'
                              value={descricaoEditada}
                              onChange={(e) => setDescricaoEditada(e.target.value)}
                            />
                            <div className='botoes'>
                              <button className='buttono-modal' onClick={cancelarEdicao}>Cancelar</button>
                              <button className='button-modal' onClick={confirmarEdicao}>Salvar</button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className='projeto-nome'>{projeto.nomeProjeto}</td>
                      <td className='projeto-descricao'>{projeto.descricaoProjeto}</td>
                      <td className='acoes'>
                        <button onClick={() => iniciarEdicao(projeto)} className="Btn">Editar <svg class="svg" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg></button>
                        
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum projeto cadastrado.</p>
        )}
      </div>
    </>
  );
}

export default ProjetosList;
