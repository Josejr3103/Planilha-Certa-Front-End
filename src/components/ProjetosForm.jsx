import React, { useState } from "react";
import ProjetosService from "../services/ProjetosService";
import { useNavigate } from "react-router-dom"; 

const ProjetosForm = () => {
  const [nomeProjeto, setNomeProjeto] = useState("");  
  const [descricaoProjeto, setDescricaoProjeto] = useState(""); 
  const [erro, setErro] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (categoria) => {
  
    const novoProjeto = { nomeProjeto, descricaoProjeto }; 

    try {

      if (categoria === "financeiro") {
        await ProjetosService.cadastrarProjetoFinanceiro(novoProjeto);
      } else if (categoria === "gestao") {
        await ProjetosService.cadastrarProjetoGestao(novoProjeto);
      } else if (categoria === "ti") {
        await ProjetosService.cadastrarProjetoTi(novoProjeto);
      }

      alert(`Projeto cadastrado na categoria ${categoria} com sucesso!`);

      
      setNomeProjeto("");  
      setDescricaoProjeto("");  
      setErro("");
      setShowModal(false);

      
      navigate("/etapas/cadastro");

    } catch (err) {
      console.error(`Erro ao cadastrar projeto na categoria ${categoria}:`, err);
      setErro(`Erro ao cadastrar o projeto na categoria ${categoria}.`);
    }
  };

  return (
    <div className="container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <p className="title">Cadastro de Projeto</p>

        
        <input
          className="inputs"
          type="text"
          placeholder="Nome do Projeto"
          value={nomeProjeto}  
          onChange={(e) => setNomeProjeto(e.target.value)} 
          required
        />

      
        <input
          className="inputs"
          type="text"
          placeholder="Descrição do Projeto"
          value={descricaoProjeto} 
          onChange={(e) => setDescricaoProjeto(e.target.value)}  
          required
        />

     
        <button type="submit" className="button">
          Cadastrar Projeto
        </button>
      </form>

      
      {erro && <p className="error">{erro}</p>}

   
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Escolha a Categoria do Projeto</h3>
            <button
              className="modal-button"
              onClick={() => handleSubmit("financeiro")}
            >
              Financeiro
            </button>
            <button
              className="modal-button"
              onClick={() => handleSubmit("gestao")}
            >
              Gestão
            </button>
            <button
              className="modal-button"
              onClick={() => handleSubmit("ti")}
            >
              TI
            </button>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjetosForm;
