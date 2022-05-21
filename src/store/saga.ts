import { all, spawn } from "redux-saga/effects";
import postsSaga from "./posts/postsSaga";


const saga = function* () {
  yield all([
    spawn(postsSaga),

  ])

}

export default saga;