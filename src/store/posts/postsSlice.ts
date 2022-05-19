import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostGrade } from "../../enums/PostGrade";
import Storage from "../../helpers/Storage";

import PostsType from "../../types/PostsType";
import { fetchAllPosts, fetchMyPosts, fetchPosts } from "./postsThunks";






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
    likePost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.grades[postId] === PostGrade.like) {
        delete state.grades[postId];
      } else {
        state.grades[postId] = PostGrade.like;
      }
      Storage.set("grades", state.grades);
      //localStorage.setItem("grades", JSON.stringify(state.grades));


    },
    dislikePost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.grades[postId] === PostGrade.dislike) {
        delete state.grades[postId];
      } else {
        state.grades[postId] = PostGrade.dislike;
      }

      Storage.set("grades", state.grades);
      // localStorage.setItem("grades", JSON.stringify(state.grades));



      // if (!state.dislikes.includes(payload)) {
      //   state.dislikes.push(payload);
      //   state.likes = state.likes.filter(id => i d !== payload);
      // } else {
      //   state.dislikes = state.dislikes.filter(id => id !== payload);
      // }


    },
    // setFetchPostsLoading: (state, action: PayloadAction<boolean>) => {
    //   state.loading = action.payload;
    // },
    // setFetchPostsError: (state, action: PayloadAction<boolean>) => {
    //   state.error = action.payload;
    // },
    // setPostsData: (state, action: PayloadAction<PostsType[]>) => {
    //   state.data = action.payload;
    // },
    // setPostsCount: (state, action: PayloadAction<number>) => {
    //   state.count = action.payload;
    // },
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


    builder.addCase(fetchAllPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(fetchAllPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
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
  fetchAllPosts,
  fetchMyPosts,
}