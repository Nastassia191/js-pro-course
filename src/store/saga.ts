import { all, spawn } from "redux-saga/effects";
import authSaga from "./auth/authSags";
import postsSaga from "./posts/postsSaga";


const saga = function* () {
  yield all([
    spawn(postsSaga),
    spawn(authSaga),
  ])

}

export default saga;