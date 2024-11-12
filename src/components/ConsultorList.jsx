import React, { useState, useEffect } from "react";
import { listarConsultores, editarConsultor, excluirConsultor } from "../api/consultorApi";

const ConsultorList = () => {
  const [consultores, setConsultores] = useState([]);
  const [nomeEdit, setNomeEdit] = useState("");
  const [especializacaoEdit, setEspecializacaoEdit] = useState("");
  const [idEdit, setIdEdit] = useState(null);
  const [error, setError] = useState("");
  const [isModalAberto, setIsModalAberto] = useState(false);

  useEffect(() => {
    const fetchConsultores = async () => {
      try {
        const response = await listarConsultores();
        setConsultores(response.data);
      } catch (err) {
        setError("Erro ao carregar consultores");
      }
    };
    fetchConsultores();
  }, []);

  const handleEdit = (consultor) => {
    setNomeEdit(consultor.nomeConsultor);
    setEspecializacaoEdit(consultor.especializacao);
    setIdEdit(consultor.idConsultor);
    setIsModalAberto(true);
  };

  const handleSaveEdit = async () => {
    if (!nomeEdit || !especializacaoEdit) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    const consultorEdit = { nomeConsultor: nomeEdit, especializacao: especializacaoEdit };

    try {
      await editarConsultor(idEdit, consultorEdit);
      setError(""); 
      alert("Consultor atualizado com sucesso!");
      setIdEdit(null);
      setNomeEdit("");
      setEspecializacaoEdit("");
      setIsModalAberto(false);
    } catch (err) {
      setError("Erro ao editar consultor");
    }
  };

  const handleDelete = async (id) => {
    try {
      await excluirConsultor(id);
      alert("Consultor excluído com sucesso!");
      setConsultores(consultores.filter(consultor => consultor.idConsultor !== id));  
    } catch (err) {
      setError("Erro ao excluir consultor");
    }
  };

  return (
    <div className='containere'>
      <div>
        <h2 className='titulo'>Lista de Consultores</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
  
        {consultores.length > 0 ? (
          <ul className='lista'>
            {consultores.map((consultor) => (
              <li className='listaa' key={consultor.idConsultor}>
                {idEdit === consultor.idConsultor ? (
                  <div className="modal" style={isModalAberto ? { display: 'block' } : { display: 'none' }}>
                    <div className="modal-content">
                      <h3>Edição de Consultor</h3>
                      <div className="group">
                        <input
                          className='input'
                          type="text"
                          value={nomeEdit}
                          onChange={(e) => setNomeEdit(e.target.value)}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Nome do Consultor</label>
                      </div>
  
                      <select
                        className='inputs'
                        value={especializacaoEdit}
                        onChange={(e) => setEspecializacaoEdit(e.target.value)}
                      >
                        <option value="Financeiro">Financeiro</option>
                        <option value="Gestão">Gestão</option>
                        <option value="TI">TI</option>
                      </select>
  
                      <div className='botoes'>
                        <button className='buttono-modal' onClick={() => setIsModalAberto(false)}>Cancelar</button>
                        <button className='button-modal' onClick={handleSaveEdit}>Salvar</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=''>
                    <p className='pa'>{consultor.nomeConsultor} - {consultor.especializacao}</p>
                    <hr />
  
                    <button onClick={() => handleEdit(consultor)} className="Btn">
                      Editar
                      <svg className="svg" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                      </svg>
                    </button>
  
                    <button onClick={() => handleDelete(consultor.idConsultor)} className='delete'>
                      <span className="texte">Deletar</span>
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum consultor cadastrado.</p>
        )}
      </div>
    </div>
  );
  
};

export default ConsultorList;
