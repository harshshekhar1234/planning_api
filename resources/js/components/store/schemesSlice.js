import { createSlice } from '@reduxjs/toolkit';

const schemesSlice = createSlice({
  name: 'schemes',
  initialState: { 
    schemes: [],
    schemeStateName: '',
    schemeCenterName: '',
    schemeCenterCode: '',
    schemeStateCode: '',
    schemeSearch:[],
    message: '',
    searchMessage:'',
    editSchemeId:'',
    editSchemeStateName:'',
    editSchemeCenterName: '',
    editSchemeCenterCode: '',
    editSchemeStateCode: '',
    editmessage: '',
    deleteSchemeId:'',
    editNotificationSuccess:false,
    deleteNotificationSuccess:false,
    updateScheme:false
   },
  reducers: {
    setSchemes(state, action) {
      state.schemes = action.payload.schemes;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setUpateScheme(state, action) {
      state.updateScheme = action.payload.updateScheme;
    },
    setEditNotificationSuccess(state, action) {
      state.editNotificationSuccess = action.payload.editNotificationSuccess;
    },
    setDeleteNotificationSuccess(state, action) {
      state.deleteNotificationSuccess = action.payload.deleteNotificationSuccess;
    },
    setEditSchemeId(state, action) {
      state.editSchemeId = action.payload.editSchemeId;
    },
    setDeleteSchemeId(state, action) {
      state.deleteSchemeId = action.payload.deleteSchemeId;
    },
    setEditMessage(state, action) {
      state.editmessage = action.payload.editmessage;
    },
    setSchemeStateName(state, action) {
      state.schemeStateName = action.payload.schemeStateName;
    },
    setSchemeCenterName(state, action) {
      state.schemeCenterName = action.payload.schemeCenterName;
    },
    setSchemeCenterCode(state, action) {
      state.schemeCenterCode = action.payload.schemeCenterCode;
    },
    setSchemeStateCode(state, action) {
      state.schemeStateCode = action.payload.schemeStateCode;
    },
    setSchemeSearch(state, action) {
      state.schemeSearch = action.payload.schemeSearch;
    },
    setSchemeSearchMessage(state, action) {
      state.searchMessage = action.payload.searchMessage;
    },
    setEditSchemeStateName(state, action) {
      state.editSchemeStateName = action.payload.editSchemeStateName;
    },
    setEditSchemeCenterName(state, action) {
      state.editSchemeCenterName = action.payload.editSchemeCenterName;
    },
    setEditSchemeCenterCode(state, action) {
      state.editSchemeCenterCode = action.payload.editSchemeCenterCode;
    },
    setEditSchemeStateCode(state, action) {
      state.editSchemeStateCode = action.payload.editSchemeStateCode;
    },
  },
});

export const schemesActions = schemesSlice.actions;

export default schemesSlice;
