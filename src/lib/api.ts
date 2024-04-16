import axios from 'axios'

 export const  api = axios.create({
  baseURL: 'http://localhost:8000/',
})
// Intercepta as respostas de erro de rede
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Verifica se é um erro de rede
    if (!error.response) {
      console.error('Erro de conexão com o servidor:', error.message);
      throw new Error('Erro de conexão com o servidor. Verifique sua conexão com a internet.');
    }
    return Promise.reject(error);
  }
);
export default api;

