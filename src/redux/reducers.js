// reducers.js
const initialState = {
  counters: {},
};

const countersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      const { id, quantity } = action.payload;
      return {
        ...state,
        counters: {
          ...state.counters,
          [id]: quantity,
        },
      };
    default:
      return state;
  }
};

export default countersReducer;
