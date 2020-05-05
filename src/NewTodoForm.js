import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { ADD_TODO } from "./todoReducer";

/**
 * Renders for for user to add new todo. Utilizes
 * Adds unique id via uuid and utilizes UseDispatch to add new todo to store.
 * State:
 * -- todoFormData- user input todo item
 */

function NewTodoForm() {
  const [todoFormData, setTodoFormData] = useState({todo: ""});
  const dispatch = useDispatch();

  // updates state on change
  function onChange(evt) {
    setTodoFormData({todo: evt.target.value});
  }

  // on form submit updates store with new todo item
  function onSubmit(evt) {
    evt.preventDefault();
    const finalForm = {...todoFormData, id: uuid()};

    dispatch({type: ADD_TODO, payload: finalForm});
  }

  const { todo } = todoFormData;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo">Todo:</label>
      <input
        id="todo"
        name="todo"
        type="text"
        value={todo}
        onChange={onChange}>
      </input>
      <button>Add Todo</button>
    </form>
  );

}

export default NewTodoForm;