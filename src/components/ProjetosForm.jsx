
import React, { useState } from "react";
import ProjetosService from "../services/ProjetosService"; 

const ProjetosForm = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoProjeto = { nome, descricao };
      await ProjetosService.criarProjeto(novoProjeto);
      setNome(""); 
      setDescricao(""); 
    } catch (err) {
      setErro("Erro ao cadastrar o projeto");
    }
  };

  return (
    <div>
      <h1>Cadastrar Projeto</h1>
      {erro && <p>{erro}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Projeto</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ProjetosForm;
