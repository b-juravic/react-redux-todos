const INITIAL_STATE = [{todo: "first todo", id: "1"}];
const ADD_TODO = "ADD";
const REMOVE_TODO = "REMOVE";

/**
 * todoReducer
 * specifies how store todo list should be initialized and udpated
 */

function todoReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(todo => (todo.id !== action.payload));

    default:
      return state;
  }
}

export default todoReducer;
export { ADD_TODO, REMOVE_TODO };