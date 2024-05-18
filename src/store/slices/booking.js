import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking: [],
};
export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, { payload }) => {
      console.log(payload);
      state.booking.push(payload);
    },
    removeBooking: (state, { payload }) => {
      state.booking = state.booking.filter((booking) => booking.id !== payload);
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
