import React, { useState } from "react"; 
import { cadastrarContratoAlta, cadastrarContratoBaixa } from "../services/ContratoService";
import { useNavigate } from "react-router-dom";  

const ContratoForm = () => {
  const [cpfCliente, setCpfCliente] = useState("");
  const [valorServico, setValorServico] = useState("");
  const [prioridadeAtendimento, setPrioridadeAtendimento] = useState("Alta");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const contrato = {
      cpfCliente,
      valorServico: parseFloat(valorServico),
      prioridadeAtendimento,
      dataInicio: new Date(),
    };

    try {
      if (prioridadeAtendimento === "Alta") {
        await cadastrarContratoAlta(contrato);
        alert("Contrato de Alta Prioridade cadastrado com sucesso!");
      } else {
        await cadastrarContratoBaixa(contrato);
        alert("Contrato de Baixa Prioridade cadastrado com sucesso!");
      }

      setCpfCliente("");
      setValorServico("");
      setPrioridadeAtendimento("Alta");

      navigate("/projetos/cadastro");

    } catch (err) {
      console.error("Erro ao cadastrar contrato:", err);
      alert("Erro ao cadastrar contrato!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Cadastrar Contrato</p>

        <input
          className="inputs"
          type="text"
          placeholder="CPF do Cliente"
          value={cpfCliente}
          onChange={(e) => setCpfCliente(e.target.value)}
          required
        />

        <input
          className="inputs"
          type="number"
          placeholder="Valor do Serviço"
          value={valorServico}
          onChange={(e) => setValorServico(e.target.value)}
          required
        />

        <select
          className="inputa"
          value={prioridadeAtendimento}
          onChange={(e) => setPrioridadeAtendimento(e.target.value)}
        >
          <option value="Alta">Alta</option>
          <option value="Baixa">Baixa</option>
        </select>

        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar Contrato"}
        </button>
      </form>
    </div>
  );
};

export default ContratoForm;
