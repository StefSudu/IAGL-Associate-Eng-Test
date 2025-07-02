let todoList = [
  {
    "id": "123123",
    "task": "This is a todo example"
  }
];

const generateId = () => Date.now().toString();

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  postTodo: (newTask) => {
    const newTodo = { id: generateId(), task: newTask };
    todoList.push(newTodo);
    return Promise.resolve(newTodo);
  },

  deleteAll: () => {
    todoList = [];
    return Promise.resolve();
  }
};
