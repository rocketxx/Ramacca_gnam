// menuReducer.js
import { ADD_TO_MENU } from './menuActions';

const initialState = {
  menuItems: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MENU:
      return {
        ...state,
        menuItems: [...state.menuItems, action.payload],
      };
    default:
      return state;
  }
};

export default menuReducer;
