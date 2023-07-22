// restaurantReducer.js
import { SET_RESTAURANT_DATA } from './restaurantActions';

const initialState = {
  id: null,
  title: '',
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANT_DATA:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
