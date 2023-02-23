import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: { 
    divisionId: '',
    blockSetting: []
   },
  reducers: {
    setDivisionId(state, action) {
      state.divisionId = action.payload.divisionId;
    },
    setBlockSetting(state, action) {
      state.blockSetting = action.payload.blockSetting;
    }
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice;