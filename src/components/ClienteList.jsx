import React, { useEffect, useState } from 'react';
import { listarClientes, editarCliente, excluirCliente } from '../services/clienteService';

function ClienteList() {
  const [clientes, setClientes] = useState([]);
  const [editandoCliente, setEditandoCliente] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [categoriaEditada, setCategoriaEditada] = useState('');
  const [isModalAberto, setIsModalAberto] = useState(false); 

 
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await listarClientes();

      
        const sortedClientes = data.sort((a, b) => {
          if (a.categoriaCliente === 'Vip' && b.categoriaCliente !== 'Vip') return -1;
          if (a.categoriaCliente !== 'Vip' && b.categoriaCliente === 'Vip') return 1;
          return 0;
        });

        setClientes(sortedClientes);
      } catch (error) {
        console.error('Erro ao listar clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  const iniciarEdicao = (cliente) => {
    setEditandoCliente(cliente);
    setNomeEditado(cliente.nomeCliente);
    setCategoriaEditada(cliente.categoriaCliente);
    setIsModalAberto(true); 
  };


  const cancelarEdicao = () => {
    setEditandoCliente(null);
    setNomeEditado('');
    setCategoriaEditada('');
    setIsModalAberto(false); 
  };


  const confirmarEdicao = async () => {
    if (!editandoCliente) return;

    const clienteAtualizado = {
      ...editandoCliente,
      nomeCliente: nomeEditado,
      categoriaCliente: categoriaEditada,
    };

    try {
      await editarCliente(editandoCliente.idCliente, clienteAtualizado);
      const clientesAtualizados = clientes.map((cliente) =>
        cliente.idCliente === editandoCliente.idCliente ? clienteAtualizado : cliente
      );

      setClientes(clientesAtualizados);
      cancelarEdicao();
      alert('Cliente atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
      alert('Erro ao atualizar cliente.');
    }
  };

 
  const handleExcluir = async (idCliente) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este cliente?');
    if (!confirmacao) return;

    try {
      await excluirCliente(idCliente);
      setClientes(clientes.filter((cliente) => cliente.idCliente !== idCliente));
      alert('Cliente excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      alert('Erro ao excluir cliente.');
    }
  };

  return (
    <>
   
    <div className='container'>
   
    <div >
       <h2 className='titulo'>Lista de Usuários</h2>
      
      
      {clientes.length > 0 ? (
        <ul className='lista'>
          {clientes.map((cliente) => (
            <li className='listaa' key={cliente.idCliente}>
              {editandoCliente?.idCliente === cliente.idCliente ? (
                
                <div className="modal" style={isModalAberto ? { display: 'block' } : { display: 'none' }}>
                  <div className="modal-content">


                    <h3>Editar Cliente</h3>
                    <input
                      className='inputs'
                      type="text"
                      value={nomeEditado}
                      onChange={(e) => setNomeEditado(e.target.value)}
                      placeholder="Nome do Cliente"
                    />
                    <select
                      className='inputs'
                      value={categoriaEditada}
                      onChange={(e) => setCategoriaEditada(e.target.value)}
                    >
                      <option value="Padrão">Padrão</option>
                      <option value="Vip">Vip</option>
                    </select>
                    <button className='botao-modal' onClick={confirmarEdicao}>Salvar  </button>
                    <button onClick={cancelarEdicao}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <div className=''>
                  <p className='pa'>{cliente.nomeCliente} - {cliente.categoriaCliente}</p>
                  <hr />

                  <button onClick={() => iniciarEdicao(cliente)} class="Btn">Editar
                    <svg class="svg" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                  </button>




                  <button onClick={() => handleExcluir(cliente.idCliente)} className='delete'><span class="texte">Deletar</span><span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
                      </path></svg></span></button>

                </div>



              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum cliente cadastrado.</p>
      )}
    </div>
    </div>
    </>);
}

export default ClienteList;
