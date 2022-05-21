import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostGrade } from "../../enums/PostGrade";
import Storage from "../../helpers/Storage";

import PostsType from "../../types/PostsType";
import { fetchMyPosts, fetchPosts } from "./postsThunks";






type GradesType = {
  [prop: number]: PostGrade
}

type StoreType = {
  data: PostsType[],
  count: number,
  grades: GradesType,
  marks: number[],
  // likes: number[],
  // dislikes: number[],
  loading: boolean,
  error?: string,
}
const initialState: StoreType = {
  data: [],
  // likes: [],
  // dislikes: [],
  grades: Storage.get("grades", {}),
  marks: Storage.get("marks", []),
  count: 0,
  loading: false,
}



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchAllPosts: () => { },
    setPosts: (state, { payload }: PayloadAction<PostsType[]>) => {
      state.data = payload;
    },

    setPostsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setPostsError: (state, { payload }: PayloadAction<string | undefined>) => {
      state.error = payload;
    },
    likePost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.grades[postId] === PostGrade.like) {
        delete state.grades[postId];
      } else {
        state.grades[postId] = PostGrade.like;
      }
      Storage.set("grades", state.grades);



    },
    dislikePost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.grades[postId] === PostGrade.dislike) {
        delete state.grades[postId];
      } else {
        state.grades[postId] = PostGrade.dislike;
      }

      Storage.set("grades", state.grades);
    },

    markPost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.marks.includes(postId)) {
        state.marks = state.marks.filter(id => id !== postId);
      } else {
        state.marks.push(postId);
      }
      Storage.set("marks", state.marks);
    },
  },


  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(fetchPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      state.count = payload.count;
    });

    builder.addCase(fetchMyPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(fetchMyPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = "Error";
    });

    builder.addCase(fetchMyPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });


  }
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
  ...postsSlice.actions,
  fetchPosts,
  fetchMyPosts,
}