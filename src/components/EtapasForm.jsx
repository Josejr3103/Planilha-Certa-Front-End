import React, { useState } from "react"; 
import EtapasService from "../services/EtapasService";
import { useNavigate } from "react-router-dom";  

const EtapasForm = () => {
  const [etapa, setEtapa] = useState({
    nome: "",
    descricao: "",
  });

  const navigate = useNavigate(); 

  const handleCadastrar = async () => {
    try {
      await EtapasService.cadastrarEtapasAnaliseInicial(etapa);
      alert("Etapa cadastrada com sucesso!");
      
      
      navigate("/etapas/lista");
    } catch (error) {
      alert("Erro ao cadastrar a etapa.");
      console.error(error);
    }
  };

  return (
    <div className="containere">
      <h2 className="titulo-re">Cadastrar Nova Etapa</h2>
      
<div>
    <button class="btt" onClick={handleCadastrar}><i class="animation"></i>Cadastrar Etapa Análise Inicial<i class="animation"></i>
    </button>
</div>

    </div>
  );
};

export default EtapasForm;
