import React from 'react';
import { useDispatch } from "react-redux";
import { REMOVE_TODO } from "./todoReducer";

/**
 * Renders todos and dispatches to remove a todo from store if clicked
 * Props:
 * -- todos passed down from app component
 */

function TodoList({ todos }) {
  const dispatch = useDispatch();

  function removeTodo(evt) {
    dispatch({ type: REMOVE_TODO, payload: evt.target.id })
  }

  const todoList = todos.map(t => (
    <li
      key={t.id}
      id={t.id}
      todo={t.todo}>
      {t.todo}
      <button id={t.id} onClick={removeTodo}>Delete</button>
    </li>
  ));

  return (
    <ul>
      {todoList}
    </ul>
  );
}

export default TodoList;