import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'client',
  initialState: { 
    clients: [],
    message:'',
    entrymessage:'',
    email:'',
    division:'',
    password:'',
    updatesuccess:false,
    updatefailure:false,
    deptPassword:'',
    deptConfirmPassword:'',
    deptPasswordEntryMessage:'',
    updateDeptSuccess:false,
    updateDeptFailure:false
   },
  reducers: {
    setClients(state, action) {
      state.clients = action.payload.clients;
    },
    setMessage(state, action) {
        state.message = action.payload.message;
    },
    setEntryMessage(state, action) {
        state.entrymessage = action.payload.entrymessage;
    },
    setEmail(state, action) {
        state.email = action.payload.email;
    },
    setDivision(state, action) {
        state.division = action.payload.division;
    },
    setPassword(state, action) {
        state.password = action.payload.password;
    },
    setUpdateSuccess(state, action) {
        state.updatesuccess = action.payload.updatesuccess;
    },
    setUpdateFailure(state, action) {
        state.updatefailure = action.payload.updatefailure;
    },
    setDeptPassword(state, action) {
      state.deptPassword = action.payload.deptPassword;
    },
    setDeptConfirmPassword(state, action) {
      state.deptConfirmPassword = action.payload.deptConfirmPassword;
    },
    setDeptPasswordEntry(state, action) {
      state.deptPasswordEntryMessage = action.payload.deptPasswordEntryMessage;
    },
    setUpdateDeptSuccess(state, action) {
      state.updateDeptSuccess = action.payload.updateDeptSuccess;
    },
    setUpdateDeptFailure(state, action) {
      state.updateDeptFailure = action.payload.updateDeptFailure;
    },
  },
});

export const clientActions = clientSlice.actions;

export default clientSlice;
