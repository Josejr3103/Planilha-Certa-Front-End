
import axios from "axios";

const API_URL = "http://localhost:8080/api/clientes";

class ClienteService {
  cadastrarClientePadrao(cliente) {
    return axios.post(`${API_URL}/padrao`, cliente);
  }

  cadastrarClienteVip(cliente) {
    return axios.post(`${API_URL}/vip`, cliente);
  }

  listarClientes() {
    return axios.get(API_URL);
  }

  editarCliente(id, cliente) {
    return axios.put(`${API_URL}/${id}`, cliente);
  }

  excluirCliente(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new ClienteService();
