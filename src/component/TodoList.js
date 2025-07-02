import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../features/todo/todo-slice';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div className="w-full max-w-2xl mx-auto mt-6">
            <ul className="space-y-4">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} id={todo.id} title={todo.task} completed={todo.completed} />
                    ))
                ) : (
                    <li className="text-center text-gray-500">No todos!</li>
                )}
            </ul>
        </div>
    );
};

export default TodoList;