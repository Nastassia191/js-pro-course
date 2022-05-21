import axios from "axios";
import { all, call, put, spawn, takeEvery } from "redux-saga/effects";
import sagaApi from "../../helpers/sagaApi";
import PostsType from "../../types/PostsType";
import { authActions } from "../auth/authSlice";
import { postsActions } from "./postsSlice";


type FetchAllPostsType = {
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
    const response: FetchAllPostsType = yield axios.get(`https://studapi.teachmeskills.by/blog/posts?limit=${1000}`);
    yield put(postsActions.setPosts(response.data.results));
  } catch {
    yield put(postsActions.setPostsError("server error"));
  } finally {
    yield put(postsActions.setPostsLoading(false));
  }
}


type FetchMyPostsType = {
  data: PostsType[],
};


const fetchMyPostsWatcher = function* () {
  yield takeEvery(postsActions.fetchMyPosts.type, fetchMyPostsWorker);
};

const fetchMyPostsWorker = function* () {
  yield put(postsActions.setPostsLoading(true));
  yield put(postsActions.setPostsError(undefined));
  yield put(postsActions.setPosts([]));

  // let url = `blog/posts/?limit=${1000}`;
  try {
    const response: FetchMyPostsType = yield call(sagaApi.get, `/blog/posts/my_posts`);
    yield put(postsActions.setPosts(response.data));
  } catch {
    yield put(postsActions.setPostsError("server error"));
  } finally {
    yield put(postsActions.setPostsLoading(false));
  }
}



const postsSaga = function* () {
  yield all([
    spawn(fetchAllPostsWatcher),
    spawn(fetchMyPostsWatcher),
  ])

}

export default postsSaga;