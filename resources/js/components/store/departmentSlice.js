import { createSlice } from '@reduxjs/toolkit';

const departmentSlice = createSlice({
  name: 'department',
  initialState: { 
    name: '',
    id: 0,
    message: '',
    departmentId:''
   },
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    },
    setId(state, action) {
      state.id = action.payload.id;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setDepartmentId(state, action) {
      state.departmentId = action.payload.departmentId;
    }
  },
});

export const departmentActions = departmentSlice.actions;

export default departmentSlice;
