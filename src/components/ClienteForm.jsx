import React, { useState } from "react";
import ClienteService from "../services/ClienteService";

function ClienteForm() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [categoria, setCategoria] = useState("padrao");
  const [historico, setHistorico] = useState("");
  const [pontos, setPontos] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cliente = {
      nomeCliente: nome,
      cpfCliente: cpf,
      categoriaCliente: categoria,
      historicoContratos: historico,
      pontos: parseInt(pontos),
    };

    try {
      if (categoria === "padrao") {
        await ClienteService.cadastrarClientePadrao(cliente);
        alert("Cliente Padrão cadastrado com sucesso!");
      } else if (categoria === "vip") {
        await ClienteService.cadastrarClienteVip(cliente);
        alert("Cliente VIP cadastrado com sucesso!");
      }

      setNome("");
      setCpf("");
      setHistorico("");
      setPontos(0);
      setCategoria("padrao");
      
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao cadastrar cliente!");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Cadastro de Cliente</p>
        
        <input
          className="inputs"
          type="text"
          placeholder="Nome do Cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          className="inputs"
          type="text"
          placeholder="CPF do Cliente"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <select
          className="inputa"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="padrao">Padrão</option>
          <option value="vip">Vip</option>
        </select>

     

        <button type="submit" className="button">Cadastrar Cliente</button>
      </form>
    </div>
  );
}

export default ClienteForm;
