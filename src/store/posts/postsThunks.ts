import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import PostsFilterType from "../../component/postsPage/PostsFilterTypes";
import PostsType from "../../types/PostsType";
import actions from "../actions";
//import { PostActionType, PostActionTypes } from "./types";

const URL = "https://studapi.teachmeskills.by/blog/posts/";



type FetchPostsType = {
  data: PostsType[],
  count: number,
}


export const fetchPosts = createAsyncThunk<FetchPostsType, PostsFilterType, { rejectValue: string }>(
  "posts/fetchPosts",
  async ({ page, limit, ordering, author, lesson_num }, thunkApi) => {
    const offset = limit * (page - 1);

    let url = `${URL}?limit=${limit}&offset=${offset}&ordering=${ordering}`;

    if (author) {
      url += `&author=${author}`;
    }

    if (lesson_num) {
      url += `&lesson_num=${lesson_num}`;
    }

    try {
      const response = await axios.get(url);
      return {
        data: response.data.results as PostsType[],
        count: response.data.count as number,
      }

    } catch {
      return thunkApi.rejectWithValue("server error");
    }

  }
)


export const fetchAllPosts = createAsyncThunk<FetchPostsType, undefined, { rejectValue: string }>(
  "posts/fetchAllPosts",
  async (_, thunkApi) => {

    let url = `${URL}?limit=${1000}`;

    try {
      const response = await axios.get(url);
      return {
        data: response.data.results as PostsType[],
        count: response.data.count as number,
      }

    } catch {
      return thunkApi.rejectWithValue("server error");
    }

  }
)