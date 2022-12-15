import { sdgsubschemeActions } from './sdgsubschemeSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

export const getSdgData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subchemeSdg/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(sdgsubschemeActions.setSdgName({sdgName: res.name})) 
            dispatch(sdgsubschemeActions.setSdgId({sdgId: res.id})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          
        })
    };    
  };

  export const miggetSdgData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subchemeSdg/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(sdgsubschemeActions.setSdgName({sdgName: res.name})) 
            dispatch(sdgsubschemeActions.setSdgId({sdgId: res.id})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          
        })
    };    
  };

export const getSdgsubschemeData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}sdg_goals`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(sdgsubschemeActions.setSdgsubscheme({sdgsubscheme: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(sdgsubschemeActions.setSdgsubscheme({sdgsubscheme: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(sdgsubschemeActions.setSdgsubscheme({sdgsubscheme: []}))
        })
    };    
  };

  export const updateSdg = (id,sdg_id,name) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subchemeSdg/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sdg_id:sdg_id
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(sdgsubschemeActions.setSdgId({sdgId: sdg_id})) 
            dispatch(sdgsubschemeActions.setSdgName({sdgName: name}))  
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migupdateSdg = (id,sdg_id,name) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subchemeSdg/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sdg_id:sdg_id
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(sdgsubschemeActions.setSdgId({sdgId: sdg_id})) 
            dispatch(sdgsubschemeActions.setSdgName({sdgName: name}))  
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };