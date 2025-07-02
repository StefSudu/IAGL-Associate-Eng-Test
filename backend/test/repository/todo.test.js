const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  beforeEach(async () => {
    await repository.deleteAll();

    await repository.postTodo("This is a todo example");
  });

  it('should return the todo list', async () => {
    const todos = await repository.getTodos();
    expect(todos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ task: "This is a todo example" }),
      ])
    );
  });

  it('should add a new todo', async () => {
    const newTask = 'Test adding a todo';
    const newTodo = await repository.postTodo(newTask);

    expect(newTodo).toHaveProperty('id');
    expect(newTodo.task).toBe(newTask);

    const todos = await repository.getTodos();
    expect(todos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ task: newTask }),
      ])
    );
  });

  it('should delete all todos', async () => {
    await repository.deleteAll();

    const todos = await repository.getTodos();
    expect(todos).toHaveLength(0);
  });
});
