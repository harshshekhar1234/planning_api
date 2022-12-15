import { createSlice } from '@reduxjs/toolkit';

const departmentMakerSlice = createSlice({
  name: 'maker',
  initialState: { 
    subschemes: [],
    message:'',
    update:false,
    submitNotificationSuccess:false,
    submitNotificationFailure:false,
    correctNotificationSuccess:false,
    correctNotificationFailure:false,
    comment:'',
    sendEmail:false,
    mailDetail:'',
    quaterTs:''
   },
  reducers: {
    setSubschemes(state, action) {
      state.subschemes = action.payload.subschemes;
    },
    setUpdate(state, action) {
      state.update = action.payload.update;
    },
    setSubmitNotificationSuccess(state, action) {
      state.submitNotificationSuccess = action.payload.submitNotificationSuccess;
    },
    setSubmitNotificationFailure(state, action) {
      state.submitNotificationFailure = action.payload.submitNotificationFailure;
    },
    setCorrectNotificationSuccess(state, action) {
      state.correctNotificationSuccess = action.payload.correctNotificationSuccess;
    },
    setCorrectNotificationFailure(state, action) {
      state.correctNotificationFailure = action.payload.correctNotificationFailure;
    },
    setComment(state, action) {
      state.comment = action.payload.comment;
    },
    setSendEmail(state, action) {
      state.sendEmail = action.payload.sendEmail;
    },
    setEmailDetail(state, action) {
      state.mailDetail = action.payload.mailDetail;
    },
    setQuaterTs(state, action) {
      state.quaterTs = action.payload.quaterTs;
    },
  },
});

export const departmentMakerActions = departmentMakerSlice.actions;

export default departmentMakerSlice;
