
const API_URL = 'http://localhost:8080/api/contratos';

export const cadastrarContratoAlta = async (contrato) => {
  try {
    const response = await fetch(`${API_URL}/alta`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contrato),
    });
    if (!response.ok) {
      throw new Error('Erro ao cadastrar contrato');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const cadastrarContratoBaixa = async (contrato) => {
  try {
    const response = await fetch(`${API_URL}/baixa`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contrato),
    });
    if (!response.ok) {
      throw new Error('Erro ao cadastrar contrato');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
