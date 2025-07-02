import React from 'react';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    return (
        <li
            className={`flex justify-between items-center p-4 border rounded-md shadow-md ${
                completed ? 'bg-green-100 border-green-400' : 'bg-white border-gray-300'
            }`}
        >
            <span className={`text-lg ${completed ? 'line-through text-gray-500' : ''}`}>
                {title}
            </span>
        </li>
    );
};

export default TodoItem;