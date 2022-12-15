import { registerActions } from './registerSlice';
import {divisionsActions} from './divisionsSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const sendRegisterData = (email,password,name,departmentId,divisionId,role) => {
  
  return (dispatch) => {
      fetch(`${laravel_api}register`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password,
        name:name,
        department_id:departmentId,
        division_id:divisionId,
        role:role,
        password_confirmation:password
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          
          dispatch(registerActions.setName({name:''}))
          dispatch(registerActions.setEmail({email:''}))
          dispatch(registerActions.setPassword({password:''}))
          dispatch(registerActions.setRole({role:'user'}))
          dispatch(registerActions.setMessage({message:'You have successfuly registered'}))
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(registerActions.setName({name:''}))
          dispatch(registerActions.setEmail({email:''}))
          dispatch(registerActions.setPassword({password:''}))
          dispatch(registerActions.setRole({role:'user'}))
          dispatch(registerActions.setMessage({message:'Sorry something went wrong!!'}))
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
          dispatch(registerActions.setName({name:''}))
          dispatch(registerActions.setEmail({email:''}))
          dispatch(registerActions.setPassword({password:''}))
          dispatch(registerActions.setRole({role:'user'}))
          dispatch(registerActions.setMessage({message:'Sorry something went wrong!!'}))
      })
  };
};