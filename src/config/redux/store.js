//
//
//
// Steps for state Management in redux
//1. Submit Action.
//2. Handle Action in it's reducer.
//3.Register Hrere -> Reducers
//

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";

export const store = configureStore({
  reducer: {
    aurh: authReducer,
  },
});
