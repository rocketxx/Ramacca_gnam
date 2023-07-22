// restaurantActions.js
export const SET_RESTAURANT_DATA = 'SET_RESTAURANT_DATA';

export const setRestaurantData = (id, title) => ({
  type: SET_RESTAURANT_DATA,
  payload: { id, title },
});
