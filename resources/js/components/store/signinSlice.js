import { createSlice } from '@reduxjs/toolkit';

const signinSlice = createSlice({
  name: 'signin',
  initialState: { 
    email: '',
    password: '',
    message: ''
   },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    }
  },
});

export const signinActions = signinSlice.actions;

export default signinSlice;