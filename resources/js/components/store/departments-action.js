import { departmentsActions } from './departmentsSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getDepartmentsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}dept_dashboard`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(departmentsActions.setDepartments({departments: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetDepartmentsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_dept_dashboard`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(departmentsActions.setDepartments({departments: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };