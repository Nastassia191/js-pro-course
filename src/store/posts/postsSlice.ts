import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostGrade } from "../../enums/PostGrade";

import PostsType from "../../types/PostsType";
import { fetchPosts } from "./postsThunks";

const getGradesFromStorage = (): GradesType => {
  try {
    return JSON.parse(localStorage.getItem("grades") || "") as GradesType;
  } catch {
    return {}
  }
}

const setGradesToStorage = (data: GradesType) => {
  try {
    localStorage.setItem("grades", JSON.stringify(data));
  } catch { }

}

type GradesType = {
  [prop: number]: PostGrade
}

type StoreType = {
  data: PostsType[],
  count: number,
  grades: GradesType,
  // likes: number[],
  // dislikes: number[],
  loading: boolean,
  error?: string,
}
const initialState: StoreType = {
  data: [],
  // likes: [],
  // dislikes: [],
  grades: getGradesFromStorage(),
  count: 0,
  loading: false,
}



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likePost: (state, { payload }: PayloadAction<number>) => {
      if (state.grades[payload] === PostGrade.like) {
        delete state.grades[payload];
      } else {
        state.grades[payload] = PostGrade.like;
      }
      setGradesToStorage(state.grades);
      //localStorage.setItem("grades", JSON.stringify(state.grades));


    },
    dislikePost: (state, { payload }: PayloadAction<number>) => {
      if (state.grades[payload] === PostGrade.dislike) {
        delete state.grades[payload];
      } else {
        state.grades[payload] = PostGrade.dislike;
      }

      setGradesToStorage(state.grades);
      // localStorage.setItem("grades", JSON.stringify(state.grades));



      // if (!state.dislikes.includes(payload)) {
      //   state.dislikes.push(payload);
      //   state.likes = state.likes.filter(id => i d !== payload);
      // } else {
      //   state.dislikes = state.dislikes.filter(id => id !== payload);
      // }


    }
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