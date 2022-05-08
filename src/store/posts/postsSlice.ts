import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PostsType from "../../types/PostsType";
import { fetchPosts } from "./postsThunks";

type StoreType = {
  data: PostsType[],
  count: number,
  loading: boolean,
  error?: string,
}
const initialState: StoreType = {
  data: [],
  count: 0,
  loading: false,
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
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


  }
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
  ...postsSlice.actions,
  fetchPosts,
}