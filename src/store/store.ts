
//import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
//import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware],
});

// const store = createStore(reducers, applyMiddleware(thunk));

sagaMiddleware.run(saga);

export default store;

