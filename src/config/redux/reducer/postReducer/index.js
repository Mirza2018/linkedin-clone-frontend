import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../action/postAction";

const initialState = {
  post: [],
  isError: false,
  postFetched: false,
  isSuccess: false,
  isLoading: false,
  loggedIn: false,
  message: "",
  comments: [],
  postId: "",
};

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: () => initialState,
    resetPostId: (state) => {
      state.postId = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
        state.message = "Fetching all the posts...";
      })
      .addCase(getAllPosts.fulfilled, (state,action) => {
        state.isError = false;
        state.postFetched = true;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.post = action.payload.posts;
        state.message = "Post Fetched Successfully";
      })
      .addCase(getAllPosts.rejected, (state,action) => {
        state.isError = false;
        state.isLoading = false;
        state.post = [];
        state.message = action.payload
      });
  },
});


export default postsSlice.reducer