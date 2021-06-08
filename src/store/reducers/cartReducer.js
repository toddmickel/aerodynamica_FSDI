/**
 * Reducer:
 *
 * A reducer is an arrow function that receives the state and the action (in that order).
 * Shall return the received state (if no changes made) or a new state
 *
 */

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let copy = [...state, action.payload];
      return copy;

    case "REMOVE_FROM_CART":
      // do something
      return state;

    default:
      return state;
  }
};

export default cartReducer;
