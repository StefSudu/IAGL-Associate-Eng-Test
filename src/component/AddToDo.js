import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync, deleteAllTodosAsync } from '../features/todo/todo-slice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
				})
			);
			setValue(''); // clear input after submit
		}
	};

	const onDeleteAll = () => {
		dispatch(deleteAllTodosAsync());
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2 mr-2'>
				Add task
			</button>

			<button
				type='button'
				className='btn btn-danger mb-2'
				onClick={onDeleteAll}
			>
				Delete All
			</button>
		</form>
	);
};

export default AddTodoForm;
