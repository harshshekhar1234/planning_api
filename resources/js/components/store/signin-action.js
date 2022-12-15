import { signinActions } from './signinSlice';
import { userActions } from './userSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const sendSigninData = (email,password) => {
  
  return (dispatch) => {
      fetch(`${laravel_api}login`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:email,
        password:password,
        password_confirmation:password
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          
          localStorage.setItem('access_token', res.access_token);
          dispatch(userActions.setEmail({email:res.user.email}))
          dispatch(userActions.setName({name:res.user.name}))
          dispatch(userActions.setDepartmentId({departmentId:res.user.departmentId}))
          dispatch(userActions.setDivisionId({divisionId:res.user.divisionId}))
          dispatch(userActions.setRole({role:res.user.role}))
          dispatch(userActions.setId({id:res.user.id}))
          dispatch(userActions.setSignedIn({isSignedIn:true}))
          dispatch(signinActions.setEmail({email:''}))
          dispatch(signinActions.setPassword({password:''}))
          dispatch(signinActions.setMessage({message:'You have been successfuly Signed In'})) 
        } else {
          
          dispatch(signinActions.setEmail({email:''}))
          dispatch(signinActions.setPassword({password:''}))
          dispatch(signinActions.setMessage({message:res.message}))
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(signinActions.setEmail({email:''}))
        dispatch(signinActions.setPassword({password:''}))
        dispatch(signinActions.setMessage({message:res.message}))
      })
  };
};

export const logout = () => {
  
  return (dispatch) => {
    fetch(`${laravel_api}signout`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      })
    })
    .then(response => response.json())
    .then(res => {
        if (res.status === 200) {
         
          localStorage.setItem('access_token', '');
          dispatch(userActions.setEmail({email:''}))
          dispatch(userActions.setName({name:''}))
          dispatch(userActions.setDepartmentId({departmentId:''}))
          dispatch(userActions.setDivisionId({divisionId:''}))
          dispatch(userActions.setRole({role:''}))
          dispatch(userActions.setId({id:''}))
          dispatch(userActions.setSignedIn({isSignedIn:false})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        localStorage.setItem('access_token', '');
          dispatch(userActions.setEmail({email:''}))
          dispatch(userActions.setName({name:''}))
          dispatch(userActions.setDepartmentId({departmentId:''}))
          dispatch(userActions.setDivisionId({divisionId:''}))
          dispatch(userActions.setRole({role:''}))
          dispatch(userActions.setId({id:''}))
          dispatch(userActions.setSignedIn({isSignedIn:false}))
      })
  };
};