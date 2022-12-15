import { createSlice } from '@reduxjs/toolkit';

const outcomesSlice = createSlice({
  name: 'outcomes',
  initialState: { 
    outcomes: [],
    outcomeName:'', 
    message: '',
    searchMessage:'',
    searchOutcome:[],
    editOutcome:'',
    editOutcomeId:'',
    editOutcomeMessage:'',
    updateOutcome:false,
    outcomeDeleteId:'',
    outcomeDeleteSuccess:false,
   },
  reducers: {
    setOutcomes(state, action) {
      state.outcomes = action.payload.outcomes;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setOutcomeName(state, action) {
      state.outcomeName = action.payload.outcomeName;
    },
    setOutcomeSearchMessage(state, action) {
      state.searchMessage = action.payload.searchMessage;
    },
    setOutcomeSearch(state, action) {
      state.searchOutcome = action.payload.searchOutcome;
    },
    setEditOutcome(state, action) {
      state.editOutcome = action.payload.editOutcome;
    },
    setOutcomeUpdate(state, action) {
      state.updateOutcome = action.payload.updateOutcome;
    },
    setEditOutcomeId(state, action) {
      state.editOutcomeId = action.payload.editOutcomeId;
    },
    setEditOutcomeMessage(state, action) {
      state.editOutcomeMessage = action.payload.editOutcomeMessage;
    },
    setOutcomeDeleteId(state, action) {
      state.outcomeDeleteId = action.payload.outcomeDeleteId;
    },
    setOutcomeDeleteSuccess(state, action) {
      state.outcomeDeleteSuccess = action.payload.outcomeDeleteSuccess;
    }
  },
});

export const outcomesActions = outcomesSlice.actions;

export default outcomesSlice;
