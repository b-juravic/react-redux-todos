import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_TODO } from "./todoReducer";
import Todo from "./Todo";

/**
 * Renders list of Todos.
 * Utilizes useSelector to access todos from store.
 * Utilizes useDispatch to remove a selected todo in store.
 */

function TodoList() {
  const todos = useSelector(todoList => todoList);
  const dispatch = useDispatch();

  function removeTodo(evt) {
    dispatch({ type: REMOVE_TODO, payload: evt.target.id })
  }

  return(
    <ul>
    {todos.map(t => (
      <Todo
        key={t.id}
        id={t.id}
        todo={t.todo}
        removeTodo={removeTodo}
      />))}
    </ul>
  );
}

export default TodoList;