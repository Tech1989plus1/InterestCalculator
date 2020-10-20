import { createSlice } from '@reduxjs/toolkit';

const initialState = {id: '0', principal: 0, rate: 0, years: 0};

const calSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    postCalculateData(state, action) {
      return action.payload;
    }
  }
});

export const { postCalculateData } = calSlice.actions;

export default calSlice.reducer;