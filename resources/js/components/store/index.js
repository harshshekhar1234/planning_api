import { configureStore } from '@reduxjs/toolkit';

import productSlice from './productSlice';
import registerSlice from './registerSlice';
import languageSlice from './language';
import userSlice from './userSlice';
import signinSlice from './signinSlice';
import departmentSlice from './departmentSlice';
import departmentsSlice from './departmentsSlice';
import divisionsSlice from './divisionsSlice';
import schemesSlice from './schemesSlice';
import subschemesSlice from './subschemesSlice';
import outputsSlice from './outputSlice';
import outcomesSlice from './outcomeSlice';
import outputindicatorSlice from './outputindicatorSlice';
import outcomeindicatorSlice from './outcomeindicatorSlice';
import outputtargetSlice from './outputtargetSlice';
import outcometargetSlice from './outcometargetSlice';
import achievementSlice from './achievementSlice';
import deptUserEntrySlice from './deptUserEntrySlice';
import socialSlice from './socialSlice';
import genderSlice from './genderSlice';
import sdgsubschemeSlice from './sdgsubschemeSlice';
import dashboardSlice from './dashboardSlice';
import outlaySlice from './outlaySlice';
import clientSlice from './clientSlice';
import reportCategorySlice from './reportCategorySlice';
import departmentMakerSlice from './departmentMakerSlice';
import departmentVerifierSlice from './departmentVerifierSlice';
import quaterReportSlice from './quaterReportSlice';
import migrationSlice from './migrationSlice';
import errorSlice from './errorSlice';
// import logger from 'redux-logger';





const store = configureStore({
  reducer: { 
    product: productSlice.reducer, 
    register: registerSlice.reducer,
    language: languageSlice.reducer,
    user: userSlice.reducer,
    signin: signinSlice.reducer,
    department: departmentSlice.reducer,
    departments: departmentsSlice.reducer,
    divisions: divisionsSlice.reducer,
    schemes: schemesSlice.reducer,
    subschemes: subschemesSlice.reducer,
    outputs: outputsSlice.reducer,
    outcomes: outcomesSlice.reducer,
    outputindicator: outputindicatorSlice.reducer,
    outcomeindicator: outcomeindicatorSlice.reducer,
    targets: outputtargetSlice.reducer,
    outcometargets: outcometargetSlice.reducer,
    achievements: achievementSlice.reducer,
    deptuserentry: deptUserEntrySlice.reducer,
    social: socialSlice.reducer,
    gender: genderSlice.reducer,
    sdgsubscheme: sdgsubschemeSlice.reducer,
    dashboard: dashboardSlice.reducer,
    outlay: outlaySlice.reducer,
    client: clientSlice.reducer,
    reportcategory: reportCategorySlice.reducer,
    maker:departmentMakerSlice.reducer,
    verifier:departmentVerifierSlice.reducer,
    quaterreport:quaterReportSlice.reducer,
    migration:migrationSlice.reducer,
    error:errorSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;
