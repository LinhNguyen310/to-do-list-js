import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_TODO_BASE_URL
});

export { apiClient };