import { createSlice } from '@reduxjs/toolkit';

const finYearSlice = createSlice({
  name: 'finYear',
  initialState: { 
    finYear:'2324',
    pubFinYear:'2324'
   },
  reducers: {
    setFinYear(state, action) {
      state.finYear = action.payload.finYear;
    },
    setPubFinYear(state, action) {
      state.pubFinYear = action.payload.pubFinYear;
    }
  },
});

export const finYearActions = finYearSlice.actions;

export default finYearSlice;