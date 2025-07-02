import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todo-slice';

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
}) 
