/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    Isauth: false,
  },
  reducers: {
    autenticate(state) {
      state.Isauth = true;
    },
    logOut(state) {
      state.Isauth = false;
    },
  },
});

export const AuthAction = AuthSlice.actions;
export default AuthSlice;
