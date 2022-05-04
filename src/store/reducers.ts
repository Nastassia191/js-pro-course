import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";



export default combineReducers({
  // [name]: nameReducer
  clicker: clickerReducer,

});