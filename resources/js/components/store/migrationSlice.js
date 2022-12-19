import { createSlice } from '@reduxjs/toolkit';

const migrationSlice = createSlice({
  name: 'migration',
  initialState: { 
    schemeId:'',
    subschemes:[],
    schemeStateName: '',
    schemeCenterName: '',
    schemeStateCode: '',
    schemeCenterCode: '',
    subSchemeName: '',
    subSchemeCode: '',
    subSchemeGender: [],
    subSchemeSocial: [],
    subSchemeSDG: '',
    subSchemeStateShare: '',
    subSchemeCenterShare: '',
    outputs:[],
    outcomes:[],
    message:'',
    riskremarks:'',
    entrymessageriskremarks:'',
    updateRemarkSuccess:false,
    createSchemeStatusSuccess:false,
    createSubSchemeStatusSuccess:false
   },
  reducers: {
    setSchemeId(state, action) {
      state.schemeId = action.payload.schemeId;
    },
    setSubSchemes(state, action) {
      state.subschemes = action.payload.subschemes;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setSchemeStateName(state, action) {
      state.schemeStateName = action.payload.schemeStateName;
    },
    setSchemeCenterName(state, action) {
      state.schemeCenterName = action.payload.schemeCenterName;
    },
    setSchemeStateCode(state, action) {
      state.schemeStateCode = action.payload.schemeStateCode;
    },
    setSchemeCenterCode(state, action) {
      state.schemeCenterCode = action.payload.schemeCenterCode;
    },
    setSubSchemeName(state, action) {
      state.subSchemeName = action.payload.subSchemeName;
    },
    setSubSchemeCode(state, action) {
      state.subSchemeCode = action.payload.subSchemeCode;
    },
    setSubSchemeGender(state, action) {
      state.subSchemeGender = action.payload.subSchemeGender;
    },
    setSubSchemeSocial(state, action) {
      state.subSchemeSocial = action.payload.subSchemeSocial;
    },
    setSubSchemeSDG(state, action) {
      state.subSchemeSDG = action.payload.subSchemeSDG;
    },
    setSubSchemeStateShare(state, action) {
      state.subSchemeStateShare = action.payload.subSchemeStateShare;
    },
    setSubSchemeCenterShare(state, action) {
      state.subSchemeCenterShare = action.payload.subSchemeCenterShare;
    },
    setOutputs(state, action) {
      state.outputs = action.payload.outputs;
    },
    setOutcomes(state, action) {
      state.outcomes = action.payload.outcomes;
    },
    setCreateSchemeStatusSuccess(state, action) {
      state.createSchemeStatusSuccess = action.payload.createSchemeStatusSuccess;
    },
    setCreateSubSchemeStatusSuccess(state, action) {
      state.createSubSchemeStatusSuccess = action.payload.createSubSchemeStatusSuccess;
    },
    setRiskRemarks(state, action) {
      state.riskremarks = action.payload.riskremarks;
    },
    setRiskRemarksEntryMessage(state, action) {
      state.entrymessageriskremarks = action.payload.entrymessageriskremarks;
    },
    setUpdateRemarkSuccess(state, action) {
      state.updateRemarkSuccess = action.payload.updateRemarkSuccess;
    }
  },
});

export const migrationActions = migrationSlice.actions;

export default migrationSlice;
