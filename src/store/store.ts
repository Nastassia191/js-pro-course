
//import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";


// const store = configureStore({
//   reducer: reducers
// });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

