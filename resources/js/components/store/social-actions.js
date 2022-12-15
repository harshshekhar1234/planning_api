import { socialActions } from './socialSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

export const getSocialData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}social_select`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
           
            dispatch(socialActions.setSocial({social: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(socialActions.setSocial({social: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(socialActions.setSocial({social: []})) 
        })
    };    
  };

  export const getSocialSubschemeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_social/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(socialActions.setSocial({social: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(socialActions.setSocial({social: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(socialActions.setSocial({social: []})) 
        })
    };    
  };

  export const miggetSocialSubschemeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme_social/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(socialActions.setSocial({social: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(socialActions.setSocial({social: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(socialActions.setSocial({social: []})) 
        })
    };    
  };

  export const updateSocialData = (id,social) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subschemeSocial/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          social:social
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(socialActions.setSocial({social: social})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migupdateSocialData = (id,social) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subschemeSocial/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          social:social
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(socialActions.setSocial({social: social})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };