import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outcomesActions } from './outcomeSlice';
import { outcomeindicatorActions } from './outcomeindicatorSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getOutcomeIndicatorsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindicator/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetOutcomeIndicatorsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcomeindicator/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
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
            
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutcomeIndicatorData = (departmentId,divisionId,schemeId,subschemeId,outcomeId,name) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindicator`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            outcome_id:outcomeId,
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
            dispatch(outcomeindicatorActions.setMessage({message:'Outcome Indicator created successfully'}))  
            dispatch(outcomeindicatorActions.setOutcomeIndicatorName({outcomeindicatorName:''}))
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))  
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:''}))         
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
            dispatch(outcomeindicatorActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(outcomeindicatorActions.setOutcomeIndicatorName({outcomeindicatorName:''}))
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))  
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:''}))  
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
            dispatch(outcomeindicatorActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(outcomeindicatorActions.setOutcomeIndicatorName({outcomeindicatorName:''}))
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))  
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:''}))  
        })
    };
  };

  export const deleteOutcomeIndicatorData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindicator/delete/${id}`,{
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outcomeindicatorActions.setOutcomeIndicatorDeleteSuccess({outcomeIndicatorDeleteSuccess:true}))
                    
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migdeleteOutcomeIndicatorData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcomeindicator/delete/${id}`,{
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outcomeindicatorActions.setOutcomeIndicatorDeleteSuccess({outcomeIndicatorDeleteSuccess:true}))
                    
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };