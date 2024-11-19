
import axios from "axios";

const API_URL = "http://localhost:8080/api/etapas";

class EtapasService {

  cadastrarEtapasAnaliseInicial(etapa) {
    return axios.post(API_URL, etapa);
  }


  listarEtapas() {
    return axios.get(API_URL);
  }


  editarEtapaImplementacao(id, etapa) {
    return axios.put(`${API_URL}/implementacao/${id}`, etapa);
  }


  editarEtapaRevisaoFinal(id, etapa) {
    return axios.put(`${API_URL}/revisaofinal/${id}`, etapa);
  }

  
  editarEtapaConclusao(id, etapa) {
    return axios.put(`${API_URL}/conclusao/${id}`, etapa);
  }


  excluirEtapa(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new EtapasService();
