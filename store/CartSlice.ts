/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    buyedGames: [],
    selectedNumbers: [],
  },
  reducers: {
    buyGames(state, action) {
      const newItens = action.payload;
      state.buyedGames = state.buyedGames.concat(newItens);
      // eslint-disable-next-line no-console
      console.log(state.buyedGames);
    },
    selectNumber(state, action) {
      const newNumber = action.payload;
      const index = state.selectedNumbers.indexOf(newNumber);
      if (index !== -1) {
        state.selectedNumbers.splice(index, 1);
      } else {
        state.selectedNumbers = state.selectedNumbers.concat(newNumber);
      }
    },
    clearNumbers(state) {
      state.selectedNumbers = [];
    },
  },
});

export const CartActions = cartSlice.actions;
export default cartSlice;
