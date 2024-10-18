import { apiClient } from "./apiClient";

const fetchTodos = async () => {
    try {
        const response = await apiClient.get('/todos'); // Correct path
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export { fetchTodos };