import { createSlice } from '@reduxjs/toolkit';

const sdgsubschemeSlice = createSlice({
  name: 'sdgsubscheme',
  initialState: { 
    sdgsubscheme: [],
    sdgName:'',
    sdgId:'',
    sdgEdit:'',
    sdgEditName:''
   },
  reducers: {
    setSdgsubscheme(state, action) {
      state.sdgsubscheme = action.payload.sdgsubscheme;
    },
    setSdgName(state, action) {
      state.sdgName = action.payload.sdgName;
    },
    setSdgId(state, action) {
      state.sdgId = action.payload.sdgId;
    },
    setSdgEdit(state, action) {
      state.sdgEdit = action.payload.sdgEdit;
    },
    setSdgEditName(state, action) {
      state.sdgEditName = action.payload.sdgEditName;
    }
  },
});

export const sdgsubschemeActions = sdgsubschemeSlice.actions;

export default sdgsubschemeSlice;
