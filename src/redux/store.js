// store.js
import { configureStore } from '@reduxjs/toolkit';
import countersReducer from './reducers';

const store = configureStore({
  reducer: {
    counters: countersReducer,
  },
});

export default store;
