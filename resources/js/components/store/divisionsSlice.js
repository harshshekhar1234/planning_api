import { createSlice } from '@reduxjs/toolkit';

const divisionsSlice = createSlice({
  name: 'divisions',
  initialState: { 
    divisions: [],
    division: '',
    message: '',
    divisionId:'',
    divisionReport:{},
    divisionAll:[]
   },
  reducers: {
    setDivisions(state, action) {
      state.divisions = action.payload.divisions;
    },
    setDivision(state, action) {
      state.division = action.payload.division;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setDivisionId(state, action) {
      state.divisionId = action.payload.divisionId;
    },
    setDivisionReport(state, action) {
      state.divisionReport = action.payload.divisionReport;
    },
    setDivisionAll(state, action) {
      state.divisionAll = action.payload.divisionAll;
    }
  },
});

export const divisionsActions = divisionsSlice.actions;

export default divisionsSlice;
