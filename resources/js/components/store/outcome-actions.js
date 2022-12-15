import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outcomesActions } from './outcomeSlice';
import { errorActions } from './errorSlice';
import {laravel_api} from '../configuration';


export const getOutcomesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outcomes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outcomesActions.setOutcomes({outcomes: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outcomesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outcomesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getSearchOutcomeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outcomes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: false})) 
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome: res})) 
          } else {
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: false}))
            dispatch(errorActions.setError({error:true}))
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: false}))
          dispatch(errorActions.setError({error:true}))
          dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSearchOutcomeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcomes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: false})) 
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome: res})) 
          } else {
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: false}))
            dispatch(errorActions.setError({error:true}))
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: false}))
          dispatch(errorActions.setError({error:true}))
          dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutcomeData = (departmentId,divisionId,schemeId,subschemeId,name) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcome`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            subscheme_id:subschemeId,
            scheme_id:schemeId,
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
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
            dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
            dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch:[]}))
            dispatch(outcomesActions.setMessage({message:'Outcome created successfully'})
            )  
            dispatch(outcomesActions.setOutcomeName({outcomeName:''}))          
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
            dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
            dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch:[]}))
            dispatch(outcomesActions.setMessage({message:'Sorry something went wrong!!'}))
            dispatch(outcomesActions.setOutcomeName({outcomeName:''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
            dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
            dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch:[]}))
            dispatch(outcomesActions.setOutcomeName({outcomeName:''})) 
          dispatch(outcomesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const updateOutcomeData = (id,outcome) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outcome/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:outcome
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: true})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migupdateOutcomeData = (id,outcome) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcome/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:outcome
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: true})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const deleteOutcomeData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcome/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outcomesActions.setOutcomeDeleteSuccess({outcomeDeleteSuccess:true}))
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migdeleteOutcomeData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcome/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outcomesActions.setOutcomeDeleteSuccess({outcomeDeleteSuccess:true}))
            dispatch(outcomesActions.setOutcomeUpdate({updateOutcome: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };