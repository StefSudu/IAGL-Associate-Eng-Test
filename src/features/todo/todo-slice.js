import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('http://localhost:9091/api/todo');
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
);

export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:9091/api/todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ task: payload.title }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const deleteAllTodosAsync = createAsyncThunk(
	'todos/deleteAllTodosAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:9091/api/todo`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return true;
		  } else {
			throw new Error('Failed to delete all todos');
		  }
	}
);

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		}
	},
    extraReducers: (builder) => {
        builder
            .addCase(getTodosAsync.fulfilled, (state, action) => {
                return action.payload.todos;
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.push(action.payload.todo);
            })
			.addCase(deleteAllTodosAsync.fulfilled, (state) => {
				return [];
			});

    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
