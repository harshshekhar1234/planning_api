import { createSlice } from '@reduxjs/toolkit';

const outputtargetSlice = createSlice({
  name: 'targets',
  initialState: { 
    targets: [],
    value:'', 
    message: '',
    year:'',
    measurement:''
   },
  reducers: {
    setOutputTargets(state, action) {
      state.targets = action.payload.targets;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setOutputTargetValue(state, action) {
      state.value = action.payload.value;
    },
    setTargetYear(state, action) {
      state.year = action.payload.year;
    },
    setTargetMeasurement(state, action) {
      state.measurement = action.payload.measurement;
    }
  },
});

export const outputtargetActions = outputtargetSlice.actions;

export default outputtargetSlice;
