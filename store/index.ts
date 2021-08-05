import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import cartSlice from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    Auth: AuthSlice.reducer,
  },
});

export default store;
