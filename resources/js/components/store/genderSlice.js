import { createSlice } from '@reduxjs/toolkit';

const genderSlice = createSlice({
  name: 'gender',
  initialState: { 
    gender: [],
    editGender:[],
    editGenderMessage:''
   },
  reducers: {
    setGender(state, action) {
      state.gender = action.payload.gender;
    },
    setEditGender(state, action) {
      state.editGender = action.payload.editGender;
    },
    setEditGenderMessage(state, action) {
      state.editGenderMessage = action.payload.editGenderMessage;
    }
  },
});

export const genderActions = genderSlice.actions;

export default genderSlice;
