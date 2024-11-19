
import React, { useState } from "react";
import EtapasService from "../services/EtapasService";

const EtapasForm = () => {
  const [etapa, setEtapa] = useState({
    nome: "",
    descricao: "",
  });

  const handleCadastrar = async () => {
    try {
      await EtapasService.cadastrarEtapasAnaliseInicial(etapa);
      alert("Etapa cadastrada com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar a etapa.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Nova Etapa</h2>
      <button onClick={handleCadastrar}>Cadastrar Etapa Análise Inicial</button>
    </div>
  );
};

export default EtapasForm;
