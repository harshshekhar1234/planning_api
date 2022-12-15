import { genderActions } from './genderSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

export const getGenderData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}gender_select`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(genderActions.setGender({gender: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(genderActions.setGender({gender: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(genderActions.setGender({gender: []}))
        })
    };    
  };

  export const getGenderSubschemeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_gender/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(genderActions.setGender({gender: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(genderActions.setGender({gender: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(genderActions.setGender({gender: []}))
        })
    };    
  };

  export const miggetGenderSubschemeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme_gender/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(genderActions.setGender({gender: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(genderActions.setGender({gender: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(genderActions.setGender({gender: []}))
        })
    };    
  };

  export const updateGenderData = (id,gender) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subschemeGender/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gender:gender
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(genderActions.setGender({gender: gender})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migupdateGenderData = (id,gender) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subschemeGender/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gender:gender
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(genderActions.setGender({gender: gender})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };