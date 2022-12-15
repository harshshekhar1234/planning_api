import { createSlice } from '@reduxjs/toolkit';

const outlaySlice = createSlice({
  name: 'outlay',
  initialState: { 
    outlay: '',
    sanctioned: '',
    allotment: '',
    expenditure: '',
    time:'',
    financialDetails:[],
    entrymessage: '',
    updateOutlay:false,
    financialentrynotificationsuccess:false,
    financialentrynotificationfailure:false,
    sanctionedEdit:'',
    allotmentEdit:'',
    expenditureEdit:'',
    timeEdit:'',
    entrymessageedit: '',
    updateOutlayEdit:false,
    financialentrynotificationsuccessedit:false,
    financialentrynotificationfailureedit:false,
    stateShare:'',
    centerShare:'',
    editStateShare:'',
    editCenterShare:'',
    editOutlayMessage:''
   },
  reducers: {
    setOutlay(state, action) {
      state.outlay = action.payload.outlay;
    },
    setSanctioned(state, action) {
      state.sanctioned = action.payload.sanctioned;
    },
    setAllotment(state, action) {
      state.allotment = action.payload.allotment;
    },
    setExpenditure(state, action) {
      state.expenditure = action.payload.expenditure;
    },
    setOutlayTime(state, action) {
      state.time = action.payload.time;
    },
    setStateShare(state, action) {
      state.stateShare = action.payload.stateShare;
    },
    setCenterShare(state, action) {
      state.centerShare = action.payload.centerShare;
    },
    setEditStateShare(state, action) {
      state.editStateShare = action.payload.editStateShare;
    },
    setEditCenterShare(state, action) {
      state.editCenterShare = action.payload.editCenterShare;
    },
    setEditOutlayMessage(state, action) {
      state.editOutlayMessage = action.payload.editOutlayMessage;
    },
    setFinancialDetails(state, action) {
      state.financialDetails = action.payload.financialDetails;
    },
    setEntryMessage(state, action) {
      state.entrymessage = action.payload.entrymessage;
    },
    setFinancialEntryNotificationSuccess(state, action) {
      state.financialentrynotificationsuccess = action.payload.financialentrynotificationsuccess;
    },
    setFinancialEntryNotificationFailure(state, action) {
      state.financialentrynotificationfailure = action.payload.financialentrynotificationfailure;
    },
    setUpdateOutlay(state, action) {
      state.updateOutlay = action.payload.updateOutlay;
    },
    setSanctionedEdit(state, action) {
      state.sanctionedEdit = action.payload.sanctionedEdit;
    },
    setAllotmentEdit(state, action) {
      state.allotmentEdit = action.payload.allotmentEdit;
    },
    setExpenditureEdit(state, action) {
      state.expenditureEdit = action.payload.expenditureEdit;
    },
    setOutlayTimeEdit(state, action) {
      state.timeEdit = action.payload.timeEdit;
    },
    setEntryMessageEdit(state, action) {
      state.entrymessageedit = action.payload.entrymessageedit;
    },
    setUpdateOutlayEdit(state, action) {
      state.updateOutlayEdit = action.payload.updateOutlayEdit;
    },
    setFinancialEntryNotificationSuccessEdit(state, action) {
      state.financialentrynotificationsuccessedit = action.payload.financialentrynotificationsuccessedit;
    },
    setFinancialEntryNotificationFailureEdit(state, action) {
      state.financialentrynotificationfailureedit = action.payload.financialentrynotificationfailureedit;
    }
  },
});

export const outlayActions = outlaySlice.actions;

export default outlaySlice;
