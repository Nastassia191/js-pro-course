import axios from "axios";
import PostsType from "../../types/PostsType";
import actions from "../actions";
import { PostActionType, PostActionTypes } from "./types";


const URL = "https://studapi.teachmeskills.by/blog/posts/";

export const fetchPost = (id?: string) =>
  async (dispatch: any) => {
    dispatch(actions.setPostLoading(true));
    dispatch(actions.setPost(undefined));
    dispatch(actions.setPostError(false));
    const url = `${URL}/${id}`;

    try {
      const response = await axios.get(url);
      dispatch(actions.setPost(response.data as PostsType));
    } catch {
      dispatch(actions.setPostError(true));
    } finally {
      dispatch(actions.setPostLoading(false));
    }

  }


export const setPost = (value?: PostsType): PostActionType => ({
  type: PostActionTypes.SET_DATA,
  payload: value,
})

export const setPostLoading = (value: boolean): PostActionType => ({
  type: PostActionTypes.SET_LOADING,
  payload: value,
})

export const setPostError = (value: boolean): PostActionType => ({
  type: PostActionTypes.SET_ERROR,
  payload: value,
})