import { configureStore } from '@reduxjs/toolkit';
import { bookingSlice } from './slices/booking';

export const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer,
  },
});
