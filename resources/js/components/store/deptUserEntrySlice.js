import { createSlice } from '@reduxjs/toolkit';

const deptUserEntrySlice = createSlice({
  name: 'deptuserentry',
  initialState: { 
    outputcreatemessage: '',
    outcomecreatemessage: '',
    indicatorEdit: {},
    outcomeindicatorEdit: {},
    indicatorTargetEdit: {},
    outcomeindicatorTargetEdit: {},
    outcomeeditmessage: '',
    outputeditmessage: '',
    riskremarks:'',
    entrymessageriskremarks:'',
    updateRemarkSuccess:false,
    newoutputnotificationsuccess:false,
    newoutcomenotificationsuccess:false,
    newoutputnotificationfailure:false,
    newoutcomenotificationfailure:false,
    outputindicatoreditnotificationsuccess:false,
    outcomeindicatoreditnotificationsuccess:false,
    outputindicatoreditnotificationfailure:false,
    outcomeindicatoreditnotificationfailure:false,
    newoutputindicatornotificationsuccess:false,
    newoutcomeindicatornotificationsuccess:false,
    newoutputindicatornotificationfailure:false,
    newoutcomeindicatornotificationfailure:false,
   },
  reducers: {
    setOutputCreateMessage(state, action) {
      state.outputcreatemessage = action.payload.outputcreatemessage;
    },
    setOutcomeCreateMessage(state, action) {
      state.outcomecreatemessage = action.payload.outcomecreatemessage;
    },
    setIndicatorEdit(state, action) {
      state.indicatorEdit = action.payload.indicatorEdit;
    },
    setOutcomeIndicatorEdit(state, action) {
      state.outcomeindicatorEdit = action.payload.outcomeindicatorEdit;
    },
    setIndicatorTargetEdit(state, action) {
      state.indicatorTargetEdit = action.payload.indicatorTargetEdit;
    },
    setOutcomeIndicatorTargetEdit(state, action) {
      state.outcomeindicatorTargetEdit = action.payload.outcomeindicatorTargetEdit;
    },
    setOutputEditMessage(state, action) {
      state.outputeditmessage = action.payload.outputeditmessage;
    },
    setOutcomeEditMessage(state, action) {
      state.outcomeeditmessage = action.payload.outcomeeditmessage;
    },
    setRiskRemarks(state, action) {
      state.riskremarks = action.payload.riskremarks;
    },
    setRiskRemarksEntryMessage(state, action) {
      state.entrymessageriskremarks = action.payload.entrymessageriskremarks;
    },
    setUpdateRemarkSuccess(state, action) {
      state.updateRemarkSuccess = action.payload.updateRemarkSuccess;
    },
    setNewOutputNotificationSuccess(state, action) {
      state.newoutputnotificationsuccess = action.payload.newoutputnotificationsuccess;
    },
    setNewOutcomeNotificationSuccess(state, action) {
      state.newoutcomenotificationsuccess = action.payload.newoutcomenotificationsuccess;
    },
    setNewOutcomeNotificationFailure(state, action) {
      state.newoutcomenotificationfailure = action.payload.newoutcomenotificationfailure;
    },
    setNewOutputNotificationFailure(state, action) {
      state.newoutputnotificationfailure = action.payload.newoutputnotificationfailure;
    },
    setOutputIndicatorEditNotificationSuccess(state, action) {
      state.outputindicatoreditnotificationsuccess = action.payload.outputindicatoreditnotificationsuccess;
    },
    setOutcomeIndicatorEditNotificationSuccess(state, action) {
      state.outcomeindicatoreditnotificationsuccess = action.payload.outcomeindicatoreditnotificationsuccess;
    },
    setOutputIndicatorEditNotificationFailure(state, action) {
      state.outputindicatoreditnotificationfailure = action.payload.outputindicatoreditnotificationfailure;
    },
    setOutcomeIndicatorEditNotificationFailure(state, action) {
      state.outcomeindicatoreditnotificationfailure = action.payload.outcomeindicatoreditnotificationfailure;
    },
    setNewOutputIndicatorNotificationSuccess(state, action) {
      state.newoutputindicatornotificationsuccess = action.payload.newoutputindicatornotificationsuccess;
    },
    setNewOutcomeIndicatorNotificationSuccess(state, action) {
      state.newoutcomeindicatornotificationsuccess = action.payload.newoutcomeindicatornotificationsuccess;
    },
    setNewOutcomeIndicatorNotificationFailure(state, action) {
      state.newoutcomeindicatornotificationfailure = action.payload.newoutcomeindicatornotificationfailure;
    },
    setNewOutputIndicatorNotificationFailure(state, action) {
      state.newoutputindicatornotificationfailure = action.payload.newoutputindicatornotificationfailure;
    }
  },
});

export const deptUserEntryActions = deptUserEntrySlice.actions;

export default deptUserEntrySlice;
