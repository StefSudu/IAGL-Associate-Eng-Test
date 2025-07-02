const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  // get todos
  app.get('/api/todo', async (req, res) => {
    const todos = await todoService.getTodos();
    res.json(todos);
  });

  // create a new todo
  app.post('/api/todo', async (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: 'Task is required' });
    }
    const newTodo = await todoService.postTodo(task);
    res.status(201).json(newTodo);
  });

  // delete todos
  app.delete('/api/todo', async (req, res) => {
    await todoService.deleteAll();
    res.sendStatus(204);
  });

  return app;
};

module.exports = server;
