import { createSlice } from '@reduxjs/toolkit';

const finYearSlice = createSlice({
  name: 'finYear',
  initialState: { 
    finYear:'2324'
   },
  reducers: {
    setFinYear(state, action) {
      state.finYear = action.payload.finYear;
    }
  },
});

export const finYearActions = finYearSlice.actions;

export default finYearSlice;