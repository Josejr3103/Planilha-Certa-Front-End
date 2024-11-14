
import axios from "axios";

const API_URL = "http://localhost:8080/api/contratos";

export const listarContratos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar contratos", error);
    throw error;
  }
};

export const cadastrarContratoPriorAlta = async (contrato) => {
  try {
    const response = await axios.post(`${API_URL}/alta`, contrato);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar contrato (prioridade alta)", error);
    throw error;
  }
};

export const cadastrarContratoPriorBaixa = async (contrato) => {
  try {
    const response = await axios.post(`${API_URL}/baixa`, contrato);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar contrato (prioridade baixa)", error);
    throw error;
  }
};

export const editarContrato = async (id, contrato) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, contrato);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar contrato", error);
    throw error;
  }
};

export const excluirContrato = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir contrato", error);
    throw error;
  }
};
