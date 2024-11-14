import React, { useState } from 'react';
import { cadastrarClientePadrao, cadastrarClienteVip } from '../services/clienteService';

function ClienteForm() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [contato, setContato] = useState('');

  const handleCadastro = async (event) => {
    event.preventDefault(); 
    const cliente = { nomeCliente: nome, contatoCliente: contato };

    try {
      if (categoria === 'Padrão') {
        await cadastrarClientePadrao(cliente);
        alert('Cliente padrão cadastrado com sucesso!');
      } else {
        await cadastrarClienteVip(cliente);
        alert('Cliente VIP cadastrado com sucesso!');
      }
   
      setNome('');
      setContato('');
    } catch (error) {
      alert('Erro ao cadastrar cliente!');
      console.error(error);
    }
  };

  return (
    <div className='containere'>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <form className="form" onSubmit={handleCadastro}>
        <p className="title">Cadastro de Cliente</p>

        <input
          className='inputs'
          type="text"
          placeholder="Nome do Cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

  

        <select
          className='inputa'
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Padrão">Padrão</option>
          <option value="Vip">Vip</option>
        </select>

        <button type="submit" className='button'>Cadastrar</button>
      </form>
    </div>
  );
}

export default ClienteForm;
