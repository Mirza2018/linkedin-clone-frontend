import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../action/authAction";


const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  loggedId: false,
  message: "",
  profileFetched: false,
  connections: [],
  connectionRequest: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reducers: {
      reset: () => initialState,
      handleLoginUser: (state) => {
        state.message = "hello";
      },
      //   loadingUser: async (user) => {
      //     const request = axios.post("/login", {});
      //     const response = [];
      //       state.user = request.data.token;
      //       local
      //   },

      extreReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.message = "knocking the door...";
          })
          .addCase(loginUser.fullfilled, (state, action) => {});
      },
    },
  },
});
