/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    autenticate(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const AuthAction = AuthSlice.actions;
export default AuthSlice;
