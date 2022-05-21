import { all, call, put, spawn, takeEvery } from "redux-saga/effects";
import sagaApi from "../../helpers/sagaApi";
import ProfileType from "../../types/profileType";
import { authActions } from "./authSlice";



type FetchProfileType = {
  data: ProfileType,
};


const fetchProfileWatcher = function* () {
  yield takeEvery(authActions.fetchProfile.type, fetchProfileWorker);
};


const fetchProfileWorker = function* () {
  const response: FetchProfileType = yield call(sagaApi.get, `/auth/users/me/`);
  yield put(authActions.setProfile(response.data));

}


const authSaga = function* () {
  yield all([
    spawn(fetchProfileWatcher),
  ])

}

export default authSaga;




