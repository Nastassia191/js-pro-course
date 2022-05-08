
//import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit';
//import thunk from "redux-thunk";


const store = configureStore({
  reducer
});

// const store = createStore(reducers, applyMiddleware(thunk));

export default store;

