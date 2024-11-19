import axios from 'axios';

const API_URL = 'http://localhost:8080/api/projetos';

const ProjetosService = {
  async listarProjetos() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao listar projetos: ' + err.message);
    }
  },

  async cadastrarProjetoFinanceiro(projeto) {
    try {
      const response = await axios.post(`${API_URL}/financeiro`, projeto);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao cadastrar projeto financeiro: ' + err.message);
    }
  },

  async cadastrarProjetoGestao(projeto) {
    try {
      const response = await axios.post(`${API_URL}/gestao`, projeto);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao cadastrar projeto de gestão: ' + err.message);
    }
  },

  async cadastrarProjetoTi(projeto) {
    try {
      const response = await axios.post(`${API_URL}/ti`, projeto);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao cadastrar projeto de TI: ' + err.message);
    }
  },

  async editarProjeto(projeto) {
    try {
      const response = await axios.put(`${API_URL}/${projeto.idProjeto}`, projeto);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao editar projeto: ' + err.message);
    }
  },

  async excluirProjeto(idProjeto) {
    try {
      await axios.delete(`${API_URL}/${idProjeto}`);
    } catch (err) {
      throw new Error('Erro ao excluir projeto: ' + err.message);
    }
  },
};

export default ProjetosService;
