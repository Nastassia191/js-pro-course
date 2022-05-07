
//import { composeWithDevTools } from 'redux-devtools-extension';
//import { createStore } from "redux";
import reducers from "./reducers";
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: reducers
});

export default store;

