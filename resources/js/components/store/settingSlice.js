import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: { 
    divisionId: '',
    blockSetting: [],
    openBudgetEditSuccess:false,
    openBudgetEditFailure:false

   },
  reducers: {
    setDivisionId(state, action) {
      state.divisionId = action.payload.divisionId;
    },
    setBlockSetting(state, action) {
      state.blockSetting = action.payload.blockSetting;
    },
    setOpenBudgetEditSuccess(state, action) {
      state.openBudgetEditSuccess = action.payload.openBudgetEditSuccess;
    },
    setOpenBudgetEditFailure(state, action) {
      state.openBudgetEditFailure = action.payload.openBudgetEditFailure;
    }
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice;