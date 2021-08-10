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
      picture: {
        created_at: '',
        file: '',
        id: '',
        name: '',
        subtype: '',
        type: '',
        updated_at: '',
        url: '',
        user_id: 0,
      },
    },
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logOut(state) {
      state.user = {
        name: '',
        email: '',
        picture: {
          created_at: '',
          file: '',
          id: '',
          name: '',
          subtype: '',
          type: '',
          updated_at: '',
          url: '',
          user_id: 0,
        },
        is_admin: false,
      };
      state.isAuth = false;
    },
    upadateUser(state, action) {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.picture.url = action.payload.uri;
    },
  },
});

export const AuthAction = AuthSlice.actions;
export default AuthSlice;
