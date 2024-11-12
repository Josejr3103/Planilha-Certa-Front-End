import axios from "axios";

const BASE_URL = "http://localhost:8080/api/consultores";

export const cadastrarConsultorFinanceiro = async (consultor) => {
  return await axios.post(`${BASE_URL}/financeiro`, consultor);
};

export const cadastrarConsultorGestao = async (consultor) => {
  return await axios.post(`${BASE_URL}/gestao`, consultor);
};

export const cadastrarConsultorTI = async (consultor) => {
  return await axios.post(`${BASE_URL}/ti`, consultor);
};

export const listarConsultores = async () => {
  return await axios.get(BASE_URL);
};

export const editarConsultor = async (id, consultor) => {
  return await axios.put(`${BASE_URL}/${id}`, consultor);
};

export const excluirConsultor = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};
