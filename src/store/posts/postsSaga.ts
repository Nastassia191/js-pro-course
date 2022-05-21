import axios from "axios";
import { all, put, spawn, takeEvery } from "redux-saga/effects";
import PostsType from "../../types/PostsType";
import { postsActions } from "./postsSlice";


type ResponseType = {
  data: {
    results: PostsType[],
    count: number,

  }
};


const fetchAllPostsWatcher = function* () {
  yield takeEvery(postsActions.fetchAllPosts.type, fetchAllPostsWorker);
};

const fetchAllPostsWorker = function* () {
  yield put(postsActions.setPostsLoading(true));
  yield put(postsActions.setPostsError(undefined));
  yield put(postsActions.setPosts([]));

  let url = `blog/posts/?limit=${1000}`;
  try {
    const response: ResponseType = yield axios.get(`https://studapi.teachmeskills.by/blog/posts?limit=${1000}`);
    yield put(postsActions.setPosts(response.data.results));
  } catch {
    yield put(postsActions.setPostsError("server error"));
  } finally {
    yield put(postsActions.setPostsLoading(false));
  }
}


const postsSaga = function* () {
  yield all([
    spawn(fetchAllPostsWatcher),
  ])

}

export default postsSaga;