import React, { useState } from "react";
import { cadastrarConsultorFinanceiro, cadastrarConsultorGestao, cadastrarConsultorTI } from "../api/consultorApi";

const ConsultorForm = () => {
  const [nome, setNome] = useState("");
  const [especializacao, setEspecializacao] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !especializacao) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    const consultor = { nomeConsultor: nome, especializacao };

    try {
      if (especializacao === "Financeiro") {
        await cadastrarConsultorFinanceiro(consultor);
      } else if (especializacao === "Gestão") {
        await cadastrarConsultorGestao(consultor);
      } else if (especializacao === "TI") {
        await cadastrarConsultorTI(consultor);
      }
      setError("");
      setNome("");  
      setEspecializacao(""); 
      alert("Consultor cadastrado com sucesso!");
    } catch (err) {
      setError("Erro ao cadastrar consultor");
    }
  };

  return (
    <div className="containere">
      <form className="form" onSubmit={handleSubmit}>
      <p className="titlee">Cadastro de Consultor</p>
        <div>
         
          <input
          placeholder="Nome do Consultor"
          className="inputs"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
         
          <select
          className="inputaa"
            value={especializacao}
            onChange={(e) => setEspecializacao(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Gestão">Gestão</option>
            <option value="TI">TI</option>
          </select>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="buttona" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ConsultorForm;
