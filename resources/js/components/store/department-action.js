import { departmentActions } from './departmentSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getDepartmentData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}department/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.name.length !== 0) {
            
            dispatch(departmentActions.setName({name: res.name})) 
            dispatch(departmentActions.setId({id: res.id})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetDepartmentData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_department/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.name.length !== 0) {
            
            dispatch(departmentActions.setName({name: res.name})) 
            dispatch(departmentActions.setId({id: res.id})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

