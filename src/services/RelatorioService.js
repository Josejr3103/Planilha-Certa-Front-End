import axios from "axios";

const API_URL = "http://localhost:8080/api/relatorios";

class RelatorioService {
  obterRelatoriosPorCpf(cpfCliente) {
    return axios.get(`${API_URL}/por-cpf`, {
      params: { cpfCliente },

    });
  }
}

export default new RelatorioService();
