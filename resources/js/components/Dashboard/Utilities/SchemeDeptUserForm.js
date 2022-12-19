import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import {migrationActions} from '../../store/migrationSlice';

export default function SchemeForm() {

    const dispatch = useDispatch();

    const schemeStateName = useSelector((state) => state.migration.schemeStateName);
    const schemeCenterName = useSelector((state) => state.migration.schemeCenterName); 
    const schemeCenterCode = useSelector((state) => state.migration.schemeCenterCode); 
    const schemeStateCode = useSelector((state) => state.migration.schemeStateCode);

    const handleSchemeStateNameChange = (event) => {
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSchemeStateName({schemeStateName:event.target.value}))
      }
    
      const handleSchemeCenterNameChange = (event) => {
       
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSchemeCenterName({schemeCenterName:event.target.value}))
      }
    
      const handleSchemeStateCodeChange = (event) => {
        
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSchemeStateCode({schemeStateCode:event.target.value}))
      }
    
      const handleSchemeCenterCodeChange = (event) => {
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSchemeCenterCode({schemeCenterCode:event.target.value}))
      }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Scheme Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="schemeStateCode"
            name="schemeStateCode"
            label="Scheme State Code"
            fullWidth
            autoComplete="schemeStateCode"
            variant="standard"
            value={schemeStateCode}
            // onChange={handleSchemeStateCodeChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="schemeCenterCode"
            name="schemeCenterCode"
            label="Scheme Center Code"
            fullWidth
            autoComplete="schemeCenterCode"
            variant="standard"
            value={schemeCenterCode}
            // onChange={handleSchemeCenterCodeChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="schemeStateName"
            name="schemeStateName"
            label="Scheme State Name"
            fullWidth
            autoComplete="schemeStateName"
            variant="standard"
            value={schemeStateName}
            // onChange={handleSchemeStateNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="schemeCenterName"
            name="schemeCenterName"
            label="Scheme Center Name"
            fullWidth
            autoComplete="schemeCenterName"
            variant="standard"
            value={schemeCenterName}
            // onChange={handleSchemeCenterNameChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}