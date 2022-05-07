import PostsType from "../../types/PostsType";


export type PostStateType = {
  data?: PostsType,
  loading: boolean,
  error: boolean,
}

export enum PostActionTypes {
  SET_DATA = "SET_DATA",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}


type setDataAction = {
  type: PostActionTypes.SET_DATA,
  payload?: PostsType,
}

type setLoadingAction = {
  type: PostActionTypes.SET_LOADING,
  payload: boolean,
}

type setErrorAction = {
  type: PostActionTypes.SET_ERROR,
  payload: boolean,
}

export type PostActionType =
  setDataAction
  | setLoadingAction
  | setErrorAction;


