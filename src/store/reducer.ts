import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";
import { postsReducer } from "./posts/postsSlice";

const reducer = {
  // [name]: nameReducer
  clicker: clickerReducer,
  post: postReducer,
  posts: postsReducer,
  auth: authReducer,
}

export default reducer;