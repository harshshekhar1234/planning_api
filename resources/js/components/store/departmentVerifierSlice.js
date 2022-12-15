import { createSlice } from '@reduxjs/toolkit';

const departmentVerifierSlice = createSlice({
  name: 'verifier',
  initialState: { 
    subschemes: [],
    message:'',
    update:false,
    updateApprove:false,
    updateReview:false,
    quaterTs:'',
    comment:'',
    commentDisplay:'',
    sendemailapprovaldetail:'',
    sendemailreviewdetail:'',
    entrymessagecomment:'',
    reviewNotificationSuccess:false,
    reviewNotificationFailure:false,
    approveNotificationSuccess:false,
    approveNotificationFailure:false,
    finalApproveNotificationSuccess:false,
    finalApproveNotificationFailure:false,
    fromDate:'',
    toDate:''
   },
  reducers: {
    setSubschemes(state, action) {
      state.subschemes = action.payload.subschemes;
    },
    setUpdate(state, action) {
      state.update = action.payload.update;
    },
    setUpdateApprove(state, action) {
        state.updateApprove = action.payload.updateApprove;
    },
    setUpdateReview(state, action) {
        state.updateReview = action.payload.updateReview;
    },
    setComment(state, action) {
      state.comment = action.payload.comment;
    },
    setFromDate(state, action) {
      state.fromDate = action.payload.fromDate;
    },
    setToDate(state, action) {
      state.toDate = action.payload.toDate;
    },
    setSendEmailApprovalDetail(state, action) {
      state.sendemailapprovaldetail = action.payload.sendemailapprovaldetail;
    },
    setSendEmailReviewDetail(state, action) {
      state.sendemailreviewdetail = action.payload.sendemailreviewdetail;
    },
    setEntryMessageComment(state, action) {
      state.entrymessagecomment = action.payload.entrymessagecomment;
    },
    setApproveNotificationSuccess(state, action) {
      state.approveNotificationSuccess = action.payload.approveNotificationSuccess;
    },
    setApproveNotificationFailure(state, action) {
      state.approveNotificationFailure = action.payload.approveNotificationFailure;
    },
    setReviewNotificationFailure(state, action) {
      state.reviewNotificationFailure = action.payload.reviewNotificationFailure;
    },
    setReviewNotificationSuccess(state, action) {
      state.reviewNotificationSuccess = action.payload.reviewNotificationSuccess;
    },
    setCommentDisplay(state, action) {
      state.commentDisplay = action.payload.commentDisplay;
    },
    setFinalApproveNotificationSuccess(state, action) {
      state.finalApproveNotificationSuccess = action.payload.finalApproveNotificationSuccess;
    },
    setFinalApproveNotificationFailure(state, action) {
      state.finalApproveNotificationFailure = action.payload.finalApproveNotificationFailure;
    },
    setQuaterTs(state, action) {
      state.quaterTs = action.payload.quaterTs;
    },
  },
});

export const departmentVerifierActions = departmentVerifierSlice.actions;

export default departmentVerifierSlice;
