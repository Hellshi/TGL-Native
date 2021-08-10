import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import CartSlice from './CartSlice';
import ModalSlice from './ModalSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    Auth: AuthSlice.reducer,
    Modal: ModalSlice.reducer,
  },
});

export default store;
