import { createSlice } from '@reduxjs/toolkit';

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: { 
    departments: [],
    message: ''
   },
  reducers: {
    setDepartments(state, action) {
      state.departments = action.payload.departments;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    }
  },
});

export const departmentsActions = departmentsSlice.actions;

export default departmentsSlice;
