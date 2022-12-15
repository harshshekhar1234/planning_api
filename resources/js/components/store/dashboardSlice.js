import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { 
    departmentIndicatorCount: [],
    statusUpdate: [],
    countIndicators: {},
    countIndicatorsDivision: {}
   },
  reducers: {
    setDepartmentIndicatorCount(state, action) {
      state.departmentIndicatorCount = action.payload.departmentIndicatorCount;
    },
    setStatusUpdate(state, action) {
        state.statusUpdate = action.payload.statusUpdate;
    },
    setCountIndicators(state, action) {
        state.countIndicators = action.payload.countIndicators;
    },
    setCountIndicatorsDivision(state, action) {
      state.countIndicatorsDivision = action.payload.countIndicatorsDivision;
  }
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
