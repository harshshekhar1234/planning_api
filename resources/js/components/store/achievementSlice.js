import { createSlice } from '@reduxjs/toolkit';

const achievementSlice = createSlice({
  name: 'achievements',
  initialState: { 
    result: [],
    message: '',
    entrymessage:'',
    achievements:[],
    time:'',
    value:'',
    update:false,
    timeEdit:'',
    valueEdit:'',
    updateoutputedit:false,
    entrymessageedit:'',
    riskremarks:' ',
    entrymessageriskremarks:'',
    updateRemarkSuccess:false,
    updateRemarkFailure:false,
    entrymessageoutcome:'',
    achievementsoutcome:[],
    timeoutcome:'',
    timeoutcomeEdit:'',
    valueoutcome:'',
    valueoutcomeEdit:'',
    entrymessageeditoutcome:'',
    updateoutcomeedit:false,
    updateoutcome:false,
    outputAchSuccess:false,
    outcomeAchSuccess:false,
    outputAchFailure:false,
    outcomeAchFailure:false,
    outputAchEditSuccess:false,
    outputAchEditFailure:false,
    outcomeAchEditSuccess:false,
    outcomeAchEditFailure:false,
    addAchievement:false
   },
  reducers: {
    setResult(state, action) {
      state.result = action.payload.result;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setAchievements(state, action) {
        state.achievements = action.payload.achievements;
    },
    setTime(state, action) {
        state.time = action.payload.time;
    },
    setValue(state, action) {
        state.value = action.payload.value;
    },
    setEntryMessage(state, action) {
        state.entrymessage = action.payload.entrymessage;
    },
    setUpdate(state, action) {
        state.update = action.payload.update;
    },
    setValueEdit(state, action) {
        state.valueEdit = action.payload.valueEdit;
    },
    setTimeEdit(state, action) {
        state.timeEdit = action.payload.timeEdit;
    },
    setEntryMessageEdit(state, action) {
        state.entrymessageedit = action.payload.entrymessageedit;
    },
    setAchievementsOutcome(state, action) {
        state.achievementsoutcome = action.payload.achievementsoutcome;
    },
    setTimeOutcome(state, action) {
        state.timeoutcome = action.payload.timeoutcome;
    },
    setValueOutcome(state, action) {
        state.valueoutcome = action.payload.valueoutcome;
    },
    setEntryMessageOutcome(state, action) {
        state.entrymessageoutcome = action.payload.entrymessageoutcome;
    },
    setUpdateOutcome(state, action) {
        state.updateoutcome = action.payload.updateoutcome;
    },
    setUpdateRemarkSuccess(state, action) {
        state.updateRemarkSuccess = action.payload.updateRemarkSuccess;
    },
    setUpdateRemarkFailure(state, action) {
        state.updateRemarkFailure = action.payload.updateRemarkFailure;
    },
    setRiskRemarks(state, action) {
        state.riskremarks = action.payload.riskremarks;
    },
    setRiskRemarksEntryMessage(state, action) {
        state.entrymessageriskremarks = action.payload.entrymessageriskremarks;
    },
    setOutputAchSuccess(state, action) {
        state.outputAchSuccess = action.payload.outputAchSuccess;
    },
    setOutcomeAchSuccess(state, action) {
        state.outcomeAchSuccess = action.payload.outcomeAchSuccess;
    },
    setOutputAchFailure(state, action) {
        state.outputAchFailure = action.payload.outputAchFailure;
    },
    setOutcomeAchFailure(state, action) {
        state.outcomeAchFailure = action.payload.outcomeAchFailure;
    },
    setOutputUpdateEdit(state, action) {
        state.updateoutputedit = action.payload.updateoutputedit;
    },
    setOutputAchEditSuccess(state, action) {
        state.outputAchEditSuccess = action.payload.outputAchEditSuccess;
    },
    setOutputAchEditFailure(state, action) {
        state.outputAchEditFailure = action.payload.outputAchEditFailure;
    },
    setAddAchievement(state, action) {
        state.addAchievement = action.payload.addAchievement;
    },
    setValueOutcomeEdit(state, action) {
        state.valueoutcomeEdit = action.payload.valueoutcomeEdit;
    },
    setTimeOutcomeEdit(state, action) {
        state.timeoutcomeEdit = action.payload.timeoutcomeEdit;
    },
    setEntryMessageOutcomeEdit(state, action) {
        state.entrymessageeditoutcome = action.payload.entrymessageeditoutcome;
    },
    setOutcomeUpdateEdit(state, action) {
        state.updateoutcomeedit = action.payload.updateoutcomeedit;
    },
    setOutcomeAchEditSuccess(state, action) {
        state.outcomeAchEditSuccess = action.payload.outcomeAchEditSuccess;
    },
    setOutcomeAchEditFailure(state, action) {
        state.outcomeAchEditFailure = action.payload.outcomeAchEditFailure;
    }
  },
});

export const achievementActions = achievementSlice.actions;

export default achievementSlice;
