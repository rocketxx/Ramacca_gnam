// Reducer per gestire lo stato delle quantità e degli ID dei contatori
const initialState = {
    counters: [],
  };
  
  const countersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_QUANTITY':
        const { id, quantity } = action.payload;
        console.log("AAA ",action.payload)
        const updatedCounters = state.counters.map((counter) =>
          counter.id === id ? { ...counter, quantity } : counter
        );
        return { ...state, counters: updatedCounters };
      default:
        return state;
    }
  };
  
  export default countersReducer;
  