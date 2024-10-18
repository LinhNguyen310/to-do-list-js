const { fetchTodos } = require('../services/todoService');

fetchTodos().then((data) => {
    console.log("Fetched todos:", data)
}).catch((error) => {
    console.error("Error fetching todos:", error);
})