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
      /**
       * Create a copy of the state, then travel the array to look for the product
       * with the same _ID and only add it if it doesn't exist.  If it does exist,
       * update the quantity with the quantity being sent.
       */
      let stateCopy = [...state];

      /**
       *  if the product (action.payload) exist inside the copy (compare by id)
       *    then just update the quantity of the object that exist in copy
       *  otherwise
       *     push the product to stateCopy
       */
      for (let i = 0; i < stateCopy.length; i++) {
        if (stateCopy[i]._id === action.payload._id) {
          stateCopy[i].quantity += action.payload.quantity;
          return stateCopy;
        }
      }

      // Returning a copy of the state (cart) with the new product added
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter((prod) => prod._id !== action.payload);

    case "CLEAR_CART":
      let newState = [];
      return newState;

    default:
      return state;
  }
};

export default cartReducer;
