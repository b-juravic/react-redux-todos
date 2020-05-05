import React from 'react';
import './App.css';
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList"

/**
 * Renders NewTodoForm and TodoList.
 */

function App() {

  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
