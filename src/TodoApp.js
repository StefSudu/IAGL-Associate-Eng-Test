import React from "react";
import AddTodoForm from "./component/AddToDo";
import TodoList from "./component/TodoList";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}