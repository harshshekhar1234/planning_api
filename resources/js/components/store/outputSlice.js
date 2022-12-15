import { createSlice } from '@reduxjs/toolkit';

const outputsSlice = createSlice({
  name: 'outputs',
  initialState: { 
    outputs: [],
    outputName:'', 
    message: '',
    searchMessage:'',
    searchOutput:[],
    editOutput:'',
    editOutputId:'',
    editOutputMessage:'',
    updateOutput:false,
    outputDeleteId:'',
    outputDeleteSuccess:false,
   },
  reducers: {
    setOutputs(state, action) {
      state.outputs = action.payload.outputs;
    },
    setMessage(state, action) {
      state.message = action.payload.message;
    },
    setOutputName(state, action) {
      state.outputName = action.payload.outputName;
    },
    setOutputSearchMessage(state, action) {
      state.searchMessage = action.payload.searchMessage;
    },
    setOutputSearch(state, action) {
      state.searchOutput = action.payload.searchOutput;
    },
    setEditOutput(state, action) {
      state.editOutput = action.payload.editOutput;
    },
    setOutputUpdate(state, action) {
      state.updateOutput = action.payload.updateOutput;
    },
    setEditOutputId(state, action) {
      state.editOutputId = action.payload.editOutputId;
    },
    setEditOutputMessage(state, action) {
      state.editOutputMessage = action.payload.editOutputMessage;
    },
    setOutputDeleteId(state, action) {
      state.outputDeleteId = action.payload.outputDeleteId;
    },
    setOutputDeleteSuccess(state, action) {
      state.outputDeleteSuccess = action.payload.outputDeleteSuccess;
    }
  },
});

export const outputsActions = outputsSlice.actions;

export default outputsSlice;
