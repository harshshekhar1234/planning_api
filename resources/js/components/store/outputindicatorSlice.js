import { createSlice } from '@reduxjs/toolkit';

const outputindicatorSlice = createSlice({
  name: 'outputindicator',
  initialState: { 
    outputindicators: [],
    outputindicatorName:'', 
    message: '',
    searchMessage:'',
    searchOutputIndicator:[],
    outputIndicatorDeleteId:'',
    outputIndicatorDeleteSuccess:false,
    outputIndicatorDeleteFailure:false
   },
  reducers: {
    setOutputIndicator(state, action) {
      state.outputindicators = action.payload.outputindicators;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setOutputIndicatorName(state, action) {
      state.outputindicatorName = action.payload.outputindicatorName;
    },
    setOutputIndicatorSearchMessage(state, action) {
      state.searchMessage = action.payload.searchMessage;
    },
    setOutputIndicatorSearch(state, action) {
      state.searchOutputIndicator = action.payload.searchOutputIndicator;
    },
    setOutputIndicatorDeleteId(state, action) {
      state.outputIndicatorDeleteId = action.payload.outputIndicatorDeleteId;
    },
    setOutputIndicatorDeleteSuccess(state, action) {
      state.outputIndicatorDeleteSuccess = action.payload.outputIndicatorDeleteSuccess;
    },
    setOutputIndicatorDeleteFailure(state, action) {
      state.outputIndicatorDeleteFailure = action.payload.outputIndicatorDeleteFailure;
    },
  },
});

export const outputindicatorActions = outputindicatorSlice.actions;

export default outputindicatorSlice;
