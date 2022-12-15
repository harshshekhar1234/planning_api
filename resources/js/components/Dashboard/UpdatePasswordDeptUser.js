import React, {useState, useEffect} from 'react';
import {clientActions} from '../store/clientSlice';
import {updateDeptUserPassword} from '../store/client-actions';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const UpdatePasswordDeptUser = () => {

    const dispatch = useDispatch();

    const password = useSelector((state) => state.client.deptPassword);
    const confirmpassword = useSelector((state) => state.client.deptConfirmPassword);
    const entrymessage = useSelector((state) => state.client.deptPasswordEntryMessage);
    const updatesuccess = useSelector((state) => state.client.updateDeptSuccess);
    const updatefailure = useSelector((state) => state.client.updateDeptFailure);

    const handlePasswordChange = (event) => {
        dispatch(clientActions.setDeptPasswordEntry({deptPasswordEntryMessage:''}))
        dispatch(clientActions.setDeptPassword({deptPassword:event.target.value}))
    }

    const handleConfirmPasswordChange = (event) => {
        dispatch(clientActions.setDeptPasswordEntry({deptPasswordEntryMessage:''}))
        dispatch(clientActions.setDeptConfirmPassword({deptConfirmPassword:event.target.value}))
    }

    const onSubmitPassword = () => {
        if(password === ''){
            dispatch(clientActions.setDeptPasswordEntry({deptPasswordEntryMessage:'Please enter a valid password'}))
            return
          }
          if(password.length < 6){
            dispatch(clientActions.setDeptPasswordEntry({deptPasswordEntryMessage:'Password cannot be less than 6 characters'}))
            return
          }
          if(password !== confirmpassword){
            dispatch(clientActions.setDeptPasswordEntry({deptPasswordEntryMessage:'Passwords do not match'}))
            return
          }

        dispatch(updateDeptUserPassword(password,confirmpassword));
    }

    useEffect(() => {
        return () => {
            dispatch(clientActions.setDeptPasswordEntry({deptPasswordEntryMessage:''}))
            dispatch(clientActions.setDeptPassword({deptPassword: ''}))
            dispatch(clientActions.setDeptConfirmPassword({deptConfirmPassword: ''}))
            dispatch(clientActions.setUpdateDeptSuccess({updateDeptSuccess: false}))
            dispatch(clientActions.setUpdateDeptFailure({updateDeptFailure: false}))
        }
      }, []);

      const handleCloseUpdateSuccess = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(clientActions.setUpdateDeptSuccess({updateDeptSuccess: false}))
      };
    
      const handleCloseUpdateFailure = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(clientActions.setUpdateDeptFailure({updateDeptFailure: false}))
      };

  return (
    <>
    <Snackbar open={updatesuccess} autoHideDuration={4000} onClose={handleCloseUpdateSuccess}>
        <Alert onClose={handleCloseUpdateSuccess} severity="success" sx={{ width: '100%' }}>
          Password updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={updatefailure} autoHideDuration={4000} onClose={handleCloseUpdateFailure}>
        <Alert onClose={handleCloseUpdateFailure} severity="error" sx={{ width: '100%' }}>
          Something went wrong!
        </Alert>
      </Snackbar>
    <h1 className='b'>Update Password</h1>
    <div className="pa4 black-80 mw6 center">
    <label htmlFor="password" className="f6 b db mb2 nunito">Please Enter New Password</label>
    <input id="password" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="password" aria-describedby="name-desc" onChange={handlePasswordChange} value={password}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">Password must be greater than 6 characters</small>
    <label htmlFor="confirmpassword" className="f6 b db mb2 nunito">Please Enter Password Again</label>
    <input id="confirmpassword" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="password" aria-describedby="name-desc" onChange={handleConfirmPasswordChange} value={confirmpassword}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">Password must match with above</small>
    {(entrymessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40 nunito">{entrymessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitPassword()}>Update</p>
    </div>
    </>
  )
}

export default UpdatePasswordDeptUser