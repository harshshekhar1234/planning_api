import { migrationActions } from './migrationSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

  export const createScheme = (scheme) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}scheme/create`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...scheme
        })
      })
        .then(response => response.json())
        .then(res => {
            if (res.status === 200) {
                dispatch(migrationActions.setCreateSchemeStatusSuccess({createSchemeStatusSuccess:true}))
                dispatch(migrationActions.setIsLoading({isLoading:false}))
              } else if (res.status === 409){
                dispatch(migrationActions.setIsLoading({isLoading:false}))
                dispatch(migrationActions.setMessage({message:'Scheme already exists'}))
              } else {
                dispatch(errorActions.setError({error:true}))
              }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migcreateScheme = (scheme) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_scheme/create`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...scheme
        })
      })
        .then(response => response.json())
        .then(res => {
            if (res.status === 200) {
                dispatch(migrationActions.setCreateSchemeStatusSuccess({createSchemeStatusSuccess:true}))
                dispatch(migrationActions.setIsLoading({isLoading:false}))
              } else if (res.status === 409){
                dispatch(migrationActions.setIsLoading({isLoading:false}))
                dispatch(migrationActions.setMessage({message:'Scheme already exists'}))
              } else {
                dispatch(errorActions.setError({error:true}))
              }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const createSubScheme = (subscheme) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/create`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...subscheme
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(migrationActions.setCreateSubSchemeStatusSuccess({createSubSchemeStatusSuccess:true}))
            dispatch(migrationActions.setIsLoading({isLoading:false}))
          } else if (res.status === 409){
            dispatch(migrationActions.setIsLoading({isLoading:false}))
            dispatch(migrationActions.setMessage({message:'Sub-Scheme already exists'}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migcreateSubScheme = (subscheme) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme/create`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...subscheme
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(migrationActions.setCreateSubSchemeStatusSuccess({createSubSchemeStatusSuccess:true}))
            dispatch(migrationActions.setIsLoading({isLoading:false}))
          } else if (res.status === 409){
            dispatch(migrationActions.setIsLoading({isLoading:false}))
            dispatch(migrationActions.setMessage({message:'Sub-Scheme already exists'}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const miggetSummaryDeptData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_division_summary/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(migrationActions.setReport({report: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };    
  };

  

  