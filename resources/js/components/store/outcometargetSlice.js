import { createSlice } from '@reduxjs/toolkit';

const outcometargetSlice = createSlice({
  name: 'outcometargets',
  initialState: { 
    targets: [],
    value:'', 
    message: '',
    year:'',
    measurement:''
   },
  reducers: {
    setOutcomeTargets(state, action) {
      state.targets = action.payload.targets;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setOutcomeTargetValue(state, action) {
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

export const outcometargetActions = outcometargetSlice.actions;

export default outcometargetSlice;
