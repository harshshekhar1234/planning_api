import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { language: 'english' },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload.language;
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice;