// baseReducer.js
import { SET_base_DATA } from './baseActions';

const initialState = {
  id: null,
  title: '',
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_base_DATA:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

export default baseReducer;
