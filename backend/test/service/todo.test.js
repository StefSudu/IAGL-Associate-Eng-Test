const todoService = require('../../src/service/todo');

describe('todoService', () => {
  let mockRepository;
  let service;

  beforeEach(() => {
    mockRepository = {
      getTodos: jest.fn(),
      postTodo: jest.fn(),
      deleteAll: jest.fn(),
    };
    service = todoService(mockRepository);
  });

  test('getTodos calls repository.getTodos and returns its result', async () => {
    const mockTodos = [{ id: '1', task: 'Test todo' }];
    mockRepository.getTodos.mockResolvedValue(mockTodos);

    const todos = await service.getTodos();

    expect(mockRepository.getTodos).toHaveBeenCalledTimes(1);
    expect(todos).toBe(mockTodos);
  });

  test('postTodo calls repository.postTodo with correct argument and returns its result', async () => {
    const newTask = 'New task';
    const mockNewTodo = { id: '2', task: newTask };
    mockRepository.postTodo.mockResolvedValue(mockNewTodo);

    const result = await service.postTodo(newTask);

    expect(mockRepository.postTodo).toHaveBeenCalledWith(newTask);
    expect(result).toBe(mockNewTodo);
  });

  test('deleteAll calls repository.deleteAll and returns its result', async () => {
    mockRepository.deleteAll.mockResolvedValue();

    await service.deleteAll();

    expect(mockRepository.deleteAll).toHaveBeenCalledTimes(1);
  });
});
