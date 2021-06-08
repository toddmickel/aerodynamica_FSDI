/**
 *  Action:
 *
 *  An action is an arrow function that returns an object
 *  The object should contain the type (of action), and may contain payload (data)
 *
 **/

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
