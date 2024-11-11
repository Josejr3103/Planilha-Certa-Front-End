import axios from 'axios';


const BASE_URL = "http://localhost:8080/api/clientes";


export const cadastrarClientePadrao = async (cliente) => {
  try {
    const response = await axios.post(`${BASE_URL}/padrao`, cliente);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar cliente padrão:', error);
    throw error;
  }
};


export const cadastrarClienteVip = async (cliente) => {
  try {
    const response = await axios.post(`${BASE_URL}/vip`, cliente);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar cliente VIP:', error);
    throw error;
  }
};


export const listarClientes = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    throw error;
  }
};


export const editarCliente = async (idCliente, cliente) => {
  try {
    await axios.put(`${BASE_URL}/${idCliente}`, cliente);
  } catch (error) {
    console.error('Erro ao editar cliente:', error);
    throw error;
  }
};


export const excluirCliente = async (idCliente) => {
  try {
    await axios.delete(`${BASE_URL}/${idCliente}`);
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    throw error;
  }
};
