/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'Modal',
  initialState: {
    isVisible: false,
    error: '',
  },
  reducers: {
    openModal (state, action) {
      state.isVisible = true;
      state.error = action.payload;
    },
    closeModal (state) {
      state.isVisible = false;
      state.error = '';
    },
  },
});

export const ModalActions = modalSlice.actions;
export default modalSlice;
