import { createSlice } from '@reduxjs/toolkit';

const subschemesSlice = createSlice({
  name: 'subschemes',
  initialState: { 
    subschemes: [],
    subschemename:'',
    subschemecode:'',
    message: '',
    searchMessage:'',
    subschemeSearch:[],
    report:[],
    demand_no: '',
    department_name: '',
    division_name: '',
    allotment:'',
    expenditure:'',
    sanction:'',
    finAddBtn:true,
    verified_status_ss:'',
    submitted_status_ss:'',
    editSubSchemeId:'',
    editSubSchemeName:'',
    editSubSchemeCode: '',
    editmessage: '',
    editNotificationSuccess:false,
    deleteNotificationSuccess:false,
    updateSubScheme:false,
    deleteSubSchemeId:'',
    pendingSubSchemes:[]
   },
  reducers: {
    setSubSchemes(state, action) {
      state.subschemes = action.payload.subschemes;
    },
    setPendingSubSchemes(state, action) {
      state.pendingSubSchemes = action.payload.pendingSubSchemes;
    },
    setSubSchemeName(state, action) {
      state.subschemename = action.payload.subschemename;
    },
    setSubSchemeCode(state, action) {
      state.subschemecode = action.payload.subschemecode;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setUpateSubScheme(state, action) {
      state.updateSubScheme = action.payload.updateSubScheme;
    },
    setSearchMessage(state, action) {
      state.searchMessage = action.payload.searchMessage;
    },
    setSubSchemeSearch(state, action) {
      state.subschemeSearch = action.payload.subschemeSearch;
    },
    setSubSchemeReport(state, action) {
      state.report = action.payload.report;
    },
    setDemandNo(state, action) {
      state.demand_no = action.payload.demand_no;
    },
    setDepartmentName(state, action) {
      state.department_name = action.payload.department_name;
    },
    setDivisionName(state, action) {
      state.division_name = action.payload.division_name;
    },
    setAllotment(state, action) {
      state.allotment = action.payload.allotment;
    },
    setExpenditure(state, action) {
      state.expenditure = action.payload.expenditure;
    },
    setSanction(state, action) {
      state.sanction = action.payload.sanction;
    },
    setFinAddBtn(state, action) {
      state.finAddBtn = action.payload.finAddBtn;
    },
    setVerifiedStatusSS(state, action) {
      state.verified_status_ss = action.payload.verified_status_ss;
    },
    setSubmittedStatusSS(state, action) {
      state.submitted_status_ss = action.payload.submitted_status_ss;
    },
    setEditNotificationSuccess(state, action) {
      state.editNotificationSuccess = action.payload.editNotificationSuccess;
    },
    setEditSubSchemeId(state, action) {
      state.editSubSchemeId = action.payload.editSubSchemeId;
    },
    setEditMessage(state, action) {
      state.editmessage = action.payload.editmessage;
    },
    setEditSubSchemeName(state, action) {
      state.editSubSchemeName = action.payload.editSubSchemeName;
    },
    setEditSubSchemeCode(state, action) {
      state.editSubSchemeCode = action.payload.editSubSchemeCode;
    },
    setDeleteNotificationSuccess(state, action) {
      state.deleteNotificationSuccess = action.payload.deleteNotificationSuccess;
    },
    setDeleteSubSchemeId(state, action) {
      state.deleteSubSchemeId = action.payload.deleteSubSchemeId;
    },
  },
});

export const subschemesActions = subschemesSlice.actions;

export default subschemesSlice;
