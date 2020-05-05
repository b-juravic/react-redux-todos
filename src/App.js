import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList"

/**
 * Renders NewTodoForm and TodoList.
 * Utilizes useSelector to access todos from state
 */

function App() {

  // move to TodoList component
  const todos = useSelector(todoList => todoList);

  return (
    <div className="App">
      <NewTodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
