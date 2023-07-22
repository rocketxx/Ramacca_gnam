// restaurantActions.js
export const SET_BASE_DATA = 'SET_BASE_DATA';

export const setBaseData = (id, title) => ({
  type: SET_RESTAURANT_DATA,
  payload: { id, title },
});
