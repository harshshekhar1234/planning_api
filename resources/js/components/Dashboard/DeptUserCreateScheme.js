import * as React from 'react';
import {useState, useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import {migrationActions} from '../store/migrationSlice';
import SchemeForm from './Utilities/SchemeDeptUserForm';
import SubSchemeForm from './Utilities/SubSchemeDeptUserForm';
import OutputForm from './Utilities/OutputForm';
import OutcomeForm from './Utilities/OutcomeForm';
import {socialActions} from '../store/socialSlice';
import {genderActions} from '../store/genderSlice';
import {migcreateScheme} from '../store/migration-actions';


const steps = ['Scheme Details', 'Sub-Scheme details', 'Output Details', 'Outcome Details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SchemeForm />;
    case 1:
      return <SubSchemeForm />;
    case 2:
      return <OutputForm />;
    case 3:
      return <OutcomeForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function DeptUserCreateScheme() {

  const dispatch = useDispatch();

  const departmentid = useSelector((state) => state.department.departmentId);
  const divisionid = useSelector((state) => state.divisions.divisionId);
  const message = useSelector((state) => state.migration.message);
  const subSchemeName = useSelector((state) => state.migration.subSchemeName);
  const subSchemeCode = useSelector((state) => state.migration.subSchemeCode);
  const subSchemeStateShare = useSelector((state) => state.migration.subSchemeStateShare);
  const subSchemeCenterShare = useSelector((state) => state.migration.subSchemeCenterShare);
  const social = useSelector((state) => state.social.social);
  const gender = useSelector((state) => state.gender.gender);
  const outputs = useSelector((state) => state.migration.outputs);
  const outcomes = useSelector((state) => state.migration.outcomes);
  const subSchemeSDG = useSelector((state) => state.migration.subSchemeSDG);
  const schemeStateName = useSelector((state) => state.migration.schemeStateName);
  const schemeCenterName = useSelector((state) => state.migration.schemeCenterName); 
  const schemeCenterCode = useSelector((state) => state.migration.schemeCenterCode); 
  const schemeStateCode = useSelector((state) => state.migration.schemeStateCode);
  const createSchemeStatusSuccess = useSelector((state) => state.migration.createSchemeStatusSuccess);
  const updateriskremarks = useSelector((state) => state.migration.riskremarks);



  useEffect(() => {
    return () => {
      setActiveStep(0)
      dispatch(migrationActions.setMessage({message:''}))
      dispatch(migrationActions.setSchemeStateName({schemeStateName:''}))
      dispatch(migrationActions.setSchemeCenterName({schemeCenterName:''}))
      dispatch(migrationActions.setSchemeStateCode({schemeStateCode:''}))
      dispatch(migrationActions.setSchemeCenterCode({schemeCenterCode:''}))
      dispatch(migrationActions.setSubSchemeName({subSchemeName:''}))
      dispatch(migrationActions.setSubSchemeCode({subSchemeCode:''}))
      dispatch(migrationActions.setSubSchemeStateShare({subSchemeStateShare:''}))
      dispatch(migrationActions.setSubSchemeCenterShare({subSchemeCenterShare:''}))
      dispatch(socialActions.setSocial({social: []}))
      dispatch(genderActions.setGender({gender: []}))
      dispatch(migrationActions.setSubSchemeSDG({subSchemeSDG:''}))
      dispatch(migrationActions.setOutputs({outputs:[]}))
      dispatch(migrationActions.setOutcomes({outcomes:[]}))
      dispatch(migrationActions.setRiskRemarks({riskremarks:''}))
      dispatch(migrationActions.setSubSchemes({subschemes:[]}))
    }
  }, []);

  useEffect(() => {
    if(createSchemeStatusSuccess){
      dispatch(migrationActions.setCreateSchemeStatusSuccess({createSchemeStatusSuccess:false}))
      setActiveStep(activeStep + 1);
    }
  }, [createSchemeStatusSuccess]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      handleCreateScheme()
      return
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCreateScheme = () => {
    if((schemeStateName === '') && (schemeCenterName === '')){
      dispatch(migrationActions.setMessage({message:'Please enter a Scheme Name'}))
      return
    }

    if((schemeCenterCode === '') && (schemeStateCode === '')){
      dispatch(migrationActions.setMessage({message:'Please enter a Scheme Code'}))
      return
    }

    if (((schemeStateCode !== '') && (schemeStateName === ''))){
      dispatch(migrationActions.setMessage({message:'Please check Scheme State Details entry'}))
      return
    }

    if (((schemeCenterCode !== '') && (schemeCenterName === ''))){
      dispatch(migrationActions.setMessage({message:'Please check Scheme Center Details entry'}))
      return
    }

    if (((schemeStateCode !== '') && (schemeStateCode.includes(".")))){
      dispatch(migrationActions.setMessage({message:'Scheme State Code should be of 4 numeric characters'}))
      return
    }

    if (((schemeCenterCode !== '') && (schemeCenterCode.includes(".")))){
      dispatch(migrationActions.setMessage({message:'Scheme Center Code should be of 4 numeric characters'}))
      return
    }

    if (((schemeStateCode !== '') && isNaN(schemeStateCode))){
      dispatch(migrationActions.setMessage({message:'Scheme State Code should be of 4 numeric characters'}))
      return
    }

    if (((schemeCenterCode !== '') && isNaN(schemeCenterCode))){
      dispatch(migrationActions.setMessage({message:'Scheme Center Code should be of 4 numeric characters'}))
      return
    }

    if (((schemeStateCode !== '') && (schemeStateCode.length !== 4))){
      dispatch(migrationActions.setMessage({message:'Scheme State Code should be of 4 numeric characters'}))
      return
    }

    if (((schemeCenterCode !== '') && (schemeCenterCode.length !== 4))){
      dispatch(migrationActions.setMessage({message:'Scheme Center Code should be of 4 numeric characters'}))
      return
    }

    if (((schemeStateCode === '') && (schemeStateName !== ''))){
      dispatch(migrationActions.setMessage({message:'Please check Scheme State Details entry'}))
      return
    }

    if (((schemeCenterCode === '') && (schemeCenterName !== ''))){
      dispatch(migrationActions.setMessage({message:'Please check Scheme Center Details entry'}))
      return
    }

    if (subSchemeName === ''){
      dispatch(migrationActions.setMessage({message:'Please enter sub-scheme name'}))
      return
    }

    if (subSchemeCode === ''){
      dispatch(migrationActions.setMessage({message:'Please enter sub-scheme code'}))
      return
    }

    if (isNaN(subSchemeCode)){
      dispatch(migrationActions.setMessage({message:'Please enter a numeric value for sub-scheme code'}))
      return
    }

    // if (subSchemeCode.includes(".")){
    //   dispatch(migrationActions.setMessage({message:'Sub-scheme code should be of 8 characters'}))
    //   return
    // }

    // if (subSchemeCode.length !== 8){
    //   dispatch(migrationActions.setMessage({message:'Sub-scheme code should be of 8 characters'}))
    //   return
    // }

    if (subSchemeStateShare === ''){
      dispatch(migrationActions.setMessage({message:'Please enter sub-scheme state share (Rs. in Lakhs) or enter 0'}))
      return
    }

    if (subSchemeCenterShare === ''){
      dispatch(migrationActions.setMessage({message:'Please enter sub-scheme center share (Rs. in Lakhs) or enter 0'}))
      return
    }

    if (subSchemeStateShare < 0){
      dispatch(migrationActions.setMessage({message:'Sub-scheme state share (Rs. in Lakhs) should not be less than 0'}))
      return
    }

    if (subSchemeCenterShare < 0){
      dispatch(migrationActions.setMessage({message:'Sub-scheme center share (Rs. in Lakhs) should not be less than 0'}))
      return
    }

    if ((subSchemeCenterShare === 0) && (subSchemeStateShare === 0)){
      dispatch(migrationActions.setMessage({message:'Budget Estimate cannot be 0'}))
      return
    }
    
    if (subSchemeSDG === ''){
      dispatch(migrationActions.setMessage({message:'Please select a SDG Goal'}))
      return
    }

    if (subSchemeSDG === 'default'){
      dispatch(migrationActions.setMessage({message:'Please select a SDG Goal'}))
      return
    }

    if (outputs.length === 0){
      dispatch(migrationActions.setMessage({message:'Please enter Outputs'}))
      return
    }

    if (outcomes.length === 0){
      dispatch(migrationActions.setMessage({message:'Please enter Outcomes'}))
      return
    }

    const g = gender.filter(g => g.selected === true)
    const s = social.filter(s => s.selected === true)

    if (g.length === 0){
      dispatch(migrationActions.setMessage({message:'Please select Social Category'}))
      return
    }

    if (s.length === 0){
      dispatch(migrationActions.setMessage({message:'Please select Gender Category'}))
      return
    }

    const scheme = {
      department:departmentid,
      division:divisionid,
      schemeStateName:schemeStateName,
      schemeCenterName:schemeCenterName,
      schemeStateCode:schemeStateCode,
      schemeCenterCode:schemeCenterCode,
      subSchemeCode:parseInt(subSchemeCode),
      subSchemeName:subSchemeName,
      subSchemeStateShare:parseFloat(subSchemeStateShare),
      subSchemeCenterShare:parseFloat(subSchemeCenterShare),
      social:social,
      gender:gender,
      subSchemeSDG:subSchemeSDG,
      outputs:outputs,
      outcomes:outcomes,
      riskremarks:updateriskremarks
    }
    
    dispatch(migcreateScheme(scheme))
  }

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Scheme Entry
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Scheme has been created.
              </Typography>
              <Typography variant="subtitle1">
               The scheme has been created. Please verify the details in the migration section.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Create Scheme' : 'Next'}
                </Button>
              </Box>
              <div className='mt2'>
              {message && <Alert severity="error">{message}</Alert>}
              </div>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}