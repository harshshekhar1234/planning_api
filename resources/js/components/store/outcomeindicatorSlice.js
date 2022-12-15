import { createSlice } from '@reduxjs/toolkit';

const outcomeindicatorSlice = createSlice({
  name: 'outcomeindicator',
  initialState: { 
    outcomeindicators: [],
    outcomeindicatorName:'', 
    message: '',
    searchMessage:'',
    searchOutcomeIndicator:[],
    outcomeIndicatorDeleteId:'',
    outcomeIndicatorDeleteSuccess:false,
    outcomeIndicatorDeleteFailure:false
   },
  reducers: {
    setOutcomeIndicator(state, action) {
      state.outcomeindicators = action.payload.outcomeindicators;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setOutcomeIndicatorName(state, action) {
      state.outcomeindicatorName = action.payload.outcomeindicatorName;
    },
    setOutcomeIndicatorSearchMessage(state, action) {
      state.searchMessage = action.payload.searchMessage;
    },
    setOutcomeIndicatorSearch(state, action) {
      state.searchOutcomeIndicator = action.payload.searchOutcomeIndicator;
    },
    setOutcomeIndicatorDeleteId(state, action) {
      state.outcomeIndicatorDeleteId = action.payload.outcomeIndicatorDeleteId;
    },
    setOutcomeIndicatorDeleteSuccess(state, action) {
      state.outcomeIndicatorDeleteSuccess = action.payload.outcomeIndicatorDeleteSuccess;
    },
    setOutcomeIndicatorDeleteFailure(state, action) {
      state.outcomeIndicatorDeleteFailure = action.payload.outcomeIndicatorDeleteFailure;
    },
  },
});

export const outcomeindicatorActions = outcomeindicatorSlice.actions;

export default outcomeindicatorSlice;
