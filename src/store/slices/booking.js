import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking: [
    {
      id: 1,
      title: 'The Matrix',
      time: '12:01',
      seats: [1, 2, 3, 4],
    },
    {
      id: 2,
      title: 'The Matrix',
      time: '12:02',
      seats: [1, 2, 3, 4],
    },
    {
      id: 3,
      title: 'The Matrix',
      time: '12:03',
      seats: [1, 2, 3, 4],
    },
  ],
};
export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, { payload }) => {
      state.booking.push(payload);
    },
    removeBooking: (state, { payload }) => {
      state.booking = state.booking.filter((booking) => booking.id !== payload);
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
