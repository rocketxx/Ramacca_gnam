// import { configureStore } from '@reduxjs/toolkit';
// import countersReducer from './reducers';

import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "./reducers";
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: countersReducer,
});
export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}