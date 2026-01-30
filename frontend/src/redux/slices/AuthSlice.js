import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: undefined,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: () => {},
  },
});

export const { setUserInfo } = AuthSlice.actions;

export default AuthSlice.reducer;
