const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },

    postTodo: async (newTask) => {
      return await repository.postTodo(newTask);
    },
    
    deleteAll: async () => {
      return await repository.deleteAll();
    }
  };
};

module.exports = todoService;
