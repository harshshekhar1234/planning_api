import { createSlice } from '@reduxjs/toolkit';

const reportCategorySlice = createSlice({
  name: 'reportcategory',
  initialState: { 
    subschemes: [],
    message:'' 
   },
  reducers: {
    setSubschemes(state, action) {
      state.subschemes = action.payload.subschemes;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    }
  },
});

export const reportCategoryActions = reportCategorySlice.actions;

export default reportCategorySlice;
