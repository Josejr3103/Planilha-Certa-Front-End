import React, { useState } from 'react';
import { cadastrarClientePadrao, cadastrarClienteVip } from '../services/clienteService';

function ClienteForm() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Normal');
  const [contato, setContato] = useState('');

  const handleCadastro = async () => {
    const cliente = { nomeCliente: nome, contatoCliente: contato };
    try {
      if (categoria === 'Normal') {
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
    }
  };

  return (
    <div className='containere'>

<form class="form">


  
    <p class="title">Cadastro de Cliente </p>
   
        <div class="flex">
       
    </div>  
            
    <label>
    <input
    className='input'
        type="text"
        placeholder="Nome do Cliente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
        <span>Nome do Cliente</span>
    </label> 
        
    <label>
    <input
    className='input'
        type="text"
        placeholder="Contato"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
      />
        <span>Contato</span>
    </label>
    <label>
    <select
    className='inputa'
     value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Padrão">Padrão</option>
        <option value="Vip">Vip</option>
      </select>
        <span>Categoria</span>
    </label>
    <button className='button' onClick={handleCadastro}>Cadastrar</button>

</form>






    </div>
  );
}

export default ClienteForm;
