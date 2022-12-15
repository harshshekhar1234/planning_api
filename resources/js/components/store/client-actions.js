import { clientActions } from './clientSlice';
import { errorActions } from './errorSlice';
import {laravel_api} from '../configuration';


export const getClients = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}users`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(clientActions.setClients({clients: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(clientActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(clientActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const updateUserPassword = (id,password,confirm_password) => {
    return (dispatch) => {
        fetch(`${laravel_api}update_password`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:id,
            password:password,
            confirm_password: confirm_password
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(clientActions.setUpdateSuccess({updatesuccess:true}))
            dispatch(clientActions.setPassword({password: ''}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(clientActions.setUpdateFailure({updatefailure:true}))  
            dispatch(clientActions.setPassword({password: ''}))  
          }
        }).catch((err) => { 
          dispatch(errorActions.setError({error:true}))
          dispatch(clientActions.setUpdateFailure({updatefailure:true}))
          dispatch(clientActions.setPassword({password: ''}))
        })
    };
  };

  export const updateDeptUserPassword = (password,confirm_password) => {
    return (dispatch) => {
        fetch(`${laravel_api}user/update_password`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password:password,
            confirm_password: confirm_password
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(clientActions.setUpdateDeptSuccess({updateDeptSuccess:true}))
            dispatch(clientActions.setDeptPassword({deptPassword: ''}))
            dispatch(clientActions.setDeptConfirmPassword({deptConfirmPassword: ''}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(clientActions.setUpdateDeptFailure({updateDeptFailure:true}))  
            dispatch(clientActions.setDeptPassword({deptPassword: ''}))
            dispatch(clientActions.setDeptConfirmPassword({deptConfirmPassword: ''}))  
          }
        }).catch((err) => { 
          dispatch(errorActions.setError({error:true}))
          dispatch(clientActions.setUpdateDeptFailure({updateDeptFailure:true}))
          dispatch(clientActions.setDeptPassword({deptPassword: ''}))
          dispatch(clientActions.setDeptConfirmPassword({deptConfirmPassword: ''}))
        })
    };
  };