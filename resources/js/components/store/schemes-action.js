import { schemesActions } from './schemesSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getSchemesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}schemes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(schemesActions.setSchemes({schemes: res})) 
          } else {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };    
  };

  export const miggetSchemesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_schemes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(schemesActions.setSchemes({schemes: res})) 
          } else {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };    
  };

  export const miggetPendingSchemesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_pendingschemes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(schemesActions.setPendingScheme({pendingSchemes: res.pending_schemes})) 
          } else {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };    
  };

  export const getSchemesDeptData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}schemesdept/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(schemesActions.setSchemes({schemes: res}))  
          } else {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };    
  };

  export const miggetSchemesDeptData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_schemesdept/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(schemesActions.setSchemes({schemes: res.migrated_schemes}))  
          } else {
            dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(schemesActions.setUpateScheme({updateScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };    
  };

  export const storeSchemeData = (departmentId,divisionId,schemeStateName,schemeCenterName,schemeStateCode,schemeCenterCode) => {
    return (dispatch) => {
        fetch(`${laravel_api}scheme`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            state_name:schemeStateName,
            center_name:schemeCenterName,
            state_code:schemeStateCode,
            center_code:schemeCenterCode,
            division_id:divisionId,
            department_id:departmentId
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
            dispatch(schemesActions.setMessage({message:'Scheme created successfully'}))            
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const searchSchemesStateName = (name,id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}scheme/searchstatename/${name}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.result !== "No Data not found") {
            
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
          dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
        })
    };    
  };

  export const searchSchemesCenterName = (name,id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}scheme/searchcentername/${name}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.result !== "No Data not found") {
            
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
          dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
        })
    };    
  };

  export const searchSchemesStateCode = (name,id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}scheme/searchstatecode/${name}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.result !== "No Data not found") {
            
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
          dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
        })
    };    
  };

  export const searchSchemesCenterCode = (name,id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}scheme/searchcentercode/${name}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.result !== "No Data not found") {
            
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
          dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Nothing Found'}))
        })
    };    
  };

  export const updateSchemeData = (id,schemeStateName,schemeCenterName,schemeStateCode,schemeCenterCode) => {
    return (dispatch) => {
        fetch(`${laravel_api}scheme/edit/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            state_name:schemeStateName,
            center_name:schemeCenterName,
            state_code:schemeStateCode,
            center_code:schemeCenterCode
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(schemesActions.setUpateScheme({updateScheme: true})) 
            dispatch(schemesActions.setEditNotificationSuccess({editNotificationSuccess:true}))            
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const migupdateSchemeData = (id,schemeStateName,schemeCenterName,schemeStateCode,schemeCenterCode) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_scheme/edit/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            state_name:schemeStateName,
            center_name:schemeCenterName,
            state_code:schemeStateCode,
            center_code:schemeCenterCode
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(schemesActions.setUpateScheme({updateScheme: true})) 
            dispatch(schemesActions.setEditNotificationSuccess({editNotificationSuccess:true}))            
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const deleteSchemeData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}scheme/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(schemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:true})) 
            dispatch(schemesActions.setUpateScheme({updateScheme: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migdeleteSchemeData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_scheme/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(schemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:true})) 
            dispatch(schemesActions.setUpateScheme({updateScheme: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  