import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Adjust the URL according to your Django backend address
});

export default api;
