import { createSlice } from '@reduxjs/toolkit';

const socialSlice = createSlice({
  name: 'social',
  initialState: { 
    social: [],
    editSocial: [],
    editSocialMessage:''
   },
  reducers: {
    setSocial(state, action) {
      state.social = action.payload.social;
    },
    setEditSocial(state, action) {
      state.editSocial = action.payload.editSocial;
    },
    setEditSocialMessage(state, action) {
      state.editSocialMessage = action.payload.editSocialMessage;
    }
  },
});

export const socialActions = socialSlice.actions;

export default socialSlice;
