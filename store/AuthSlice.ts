/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    isAuth: false,
    user: {
      name: '',
      email: '',
      is_admin: false,
      picture: {},
    },
  },
  reducers: {
    login(state, action) {
      state.user = action.payload();
      state.isAuth = true;
    },
    logOut(state) {
      state.user = {
        name: '',
        email: '',
        picture: {},
        is_admin: false,
      };
      state.isAuth = false;
    },
  },
});

export const AuthAction = AuthSlice.actions;
export default AuthSlice;
