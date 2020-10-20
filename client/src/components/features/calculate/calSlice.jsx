import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: '0', principal: 10000, rate: 5.5, years: 10}
];

const calSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    postCalculate(state, action) {

    }
  }
});

export const { postCalculate } = calSlice.actions;

export default calSlice.reducer;