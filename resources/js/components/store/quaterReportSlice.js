import { createSlice } from '@reduxjs/toolkit';

const quaterReportSlice = createSlice({
  name: 'quaterreport',
  initialState: { 
    quaterreports: [],
    divisionReportId:{},
    quater:'',
    financialyear:'',
    message:'',
    fromDate:'',
    toDate:''
   },
  reducers: {
    setQuaterReports(state, action) {
      state.quaterreports = action.payload.quaterreports;
    },
    setDivisionReportId(state, action) {
        state.divisionReportId = action.payload.divisionReportId;
    },
    setQuater(state, action) {
      state.quater = action.payload.quater;
    },
    setToDate(state, action) {
      state.toDate = action.payload.toDate;
    },
    setFromDate(state, action) {
      state.fromDate = action.payload.fromDate;
    },
    setFinancialYear(state, action) {
      state.financialyear = action.payload.financialyear;
    },
    setMessage(state, action) {
        state.message = action.payload.message;
    },
  },
});

export const quaterReportActions = quaterReportSlice.actions;

export default quaterReportSlice;
