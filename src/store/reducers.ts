import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";



export default combineReducers({
  // [name]: nameReducer
  clicker: clickerReducer,
  post: postReducer,
});