import axios from 'axios';

const API_URL = 'http://localhost:8080/api/projetos';

const ProjetosService = {
 
  async listarProjetos() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao listar projetos');
    }
  },


  async cadastrarProjeto(projeto) {
    try {
      const response = await axios.post(`${API_URL}/financeiro`, projeto);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao cadastrar projeto');
    }
  },

 
  async editarProjeto(projeto) {
    try {
      const response = await axios.put(`${API_URL}/${projeto.idProjeto}`, projeto);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao editar projeto');
    }
  },


  async excluirProjeto(idProjeto) {
    try {
      await axios.delete(`${API_URL}/${idProjeto}`);
    } catch (err) {
      throw new Error('Erro ao excluir projeto');
    }
  },
};

export default ProjetosService;
