
import React, { useEffect, useState } from "react";
import EtapasService from "../services/EtapasService";

const EtapasList = () => {
  const [etapas, setEtapas] = useState([]);

  const carregarEtapas = async () => {
    try {
      const response = await EtapasService.listarEtapas();
      setEtapas(response.data);
    } catch (error) {
      console.error("Erro ao carregar as etapas:", error);
    }
  };

  const handleEditarImplementacao = async (id) => {
    const etapa = { idEtapa: id };
    try {
      await EtapasService.editarEtapaImplementacao(id, etapa);
      alert("Etapa movida para Implementação com sucesso!");
      carregarEtapas();
    } catch (error) {
      alert("Erro ao mover para Implementação.");
    }
  };

  const handleEditarRevisaoFinal = async (id) => {
    const etapa = { idEtapa: id };
    try {
      await EtapasService.editarEtapaRevisaoFinal(id, etapa);
      alert("Etapa movida para Revisão Final com sucesso!");
      carregarEtapas();
    } catch (error) {
      alert("Erro ao mover para Revisão Final.");
    }
  };

  const handleEditarConclusao = async (id) => {
    const etapa = { idEtapa: id };
    try {
      await EtapasService.editarEtapaConclusao(id, etapa);
      alert("Etapa movida para Conclusão com sucesso!");
      carregarEtapas();
    } catch (error) {
      alert("Erro ao mover para Conclusão.");
    }
  };

  useEffect(() => {
    carregarEtapas();
  }, []);

  return (
    <div className="container">
  
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            
            <th>Faturamento</th>
            <th>Pagamento Etapa 1</th>
            <th>Pagamento Etapa 2</th>
            <th>Pagamento Etapa 3</th>
            <th>Pagamento Final</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {etapas.length === 0 ? (
            <tr>
              <td colSpan="4">Nenhuma etapa encontrada.</td>
            </tr>
          ) : (
            etapas.map((etapa) => (
              <tr key={etapa.idEtapa}>
                <td>{etapa.idEtapa}</td>
                <td>{etapa.nome}</td>
           
                <td>{etapa.faturamento}</td>
                <td>{etapa.liquidoET1}</td>
                <td>{etapa.liquidoET2}</td>
                <td>{etapa.liquidoET3}</td>
                <td>{etapa.liquido}</td>
                

                <td>
                  <button onClick={() => handleEditarImplementacao(etapa.idEtapa)}>
                    Implementação
                  </button>
                  <button onClick={() => handleEditarRevisaoFinal(etapa.idEtapa)}>
                    Revisão Final
                  </button>
                  <button onClick={() => handleEditarConclusao(etapa.idEtapa)}>
                    Conclusão
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EtapasList;
