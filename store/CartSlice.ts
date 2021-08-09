/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../interface';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    buyedGames: <CartItem[]> [],
  },
  reducers: {
    buyGames(state, action) {
      const newItens = action.payload;
      state.buyedGames = state.buyedGames.concat(newItens);
    },
    deleteGame (state, action) {
      state.buyedGames.splice(action.payload, 1);
    },
    clearCart(state) {
      state.buyedGames = [];
    },
  },
});

export const CartActions = cartSlice.actions;
export default cartSlice;
