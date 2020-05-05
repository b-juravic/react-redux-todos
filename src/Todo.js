import React from 'react';


/**
 * Renders a single toto item with a delete button for removing.
 * Props:
 * -- id = unique todo id, will be used to identify todo for delete.
 * -- todo = todo from store passed down from TodoList.
 * -- removeTodo = function used to remove todo from store, passed down from TodoList.
 */
function Todo({ id, todo, removeTodo }) {


  return (
    <li id={id}>
      {todo}
      <button id={id} onClick={removeTodo}>Delete</button>
    </li>
  );
}

export default Todo;