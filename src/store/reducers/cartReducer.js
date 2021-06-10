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
      // Returning a copy of the state (cart) with the new product added
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      // do something
      return state;

    default:
      return state;
  }
};

export default cartReducer;
