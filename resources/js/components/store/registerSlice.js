import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: { 
    name: '',
    email: '',
    password: '',
    message: '',
    departmentId:'',
    divisionId:'',
    role:'user' 
   },
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    },
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setDepartmentId(state, action) {
      state.departmentId = action.payload.departmentId;
    },
    setDivisionId(state, action) {
      state.divisionId = action.payload.divisionId;
    },
    setRole(state, action) {
      state.role = action.payload.role;
    }
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
