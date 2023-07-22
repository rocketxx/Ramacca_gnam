// menuActions.js
export const ADD_TO_MENU = 'ADD_TO_MENU';

export const addToMenu = (idRestaurants, baseId, quantity, ingredients) => ({
  type: ADD_TO_MENU,
  payload: { idRestaurants, baseId, quantity, ingredients },
});
