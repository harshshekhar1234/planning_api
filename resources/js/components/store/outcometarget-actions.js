import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outcomesActions } from './outcomeSlice';
import { outcomeindicatorActions } from './outcomeindicatorSlice';
import { outcometargetActions } from './outcometargetSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getOutcomeTargetData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindictortarget/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outcometargetActions.setOutcomeTargets({targets: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outcometargetActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outcometargetActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetOutcomeTargetData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcomeindictortarget/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outcometargetActions.setOutcomeTargets({targets: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outcometargetActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outcometargetActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getSearchOutputData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outputs/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outputsActions.setOutputSearch({searchOutput: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outputsActions.setOutputSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutcomeTargetData = (departmentId,divisionId,schemeId,subschemeId,outcomeId,outcomeindicatorId,value,year,measurement) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindicatortarget`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            year:year,
            outcomeindicator_id: outcomeindicatorId,
            outcome_id:outcomeId,
            subscheme_id:subschemeId,
            scheme_id:schemeId,
            division_id:divisionId,
            department_id:departmentId,
            measurement: measurement
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
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:''}))  
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator:[]}))
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))  
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:''})) 
            dispatch(outcometargetActions.setOutcomeTargetValue({value: ''}))
            dispatch(outcometargetActions.setTargetYear({year:''}))
            dispatch(outcometargetActions.setTargetMeasurement({measurement:''}))
            dispatch(outcometargetActions.setMessage({message:'Outcome Indicator Target created successfully'}))        
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
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:''}))  
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator:[]}))
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))  
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:''})) 
            dispatch(outcometargetActions.setOutcomeTargetValue({value: ''}))
            dispatch(outcometargetActions.setTargetYear({year:''}))
            dispatch(outcometargetActions.setTargetMeasurement({measurement:''}))
            dispatch(outcometargetActions.setMessage({message:'Sorry something went wrong!!'})) 
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
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearchMessage({searchMessage:''}))
            dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator:[]}))
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))  
            dispatch(outcomesActions.setOutcomeSearchMessage({searchMessage:''})) 
            dispatch(outcometargetActions.setOutcomeTargetValue({value: ''}))
            dispatch(outcometargetActions.setTargetYear({year:''}))
            dispatch(outcometargetActions.setTargetMeasurement({measurement:''}))
            dispatch(outcometargetActions.setMessage({message:'Sorry something went wrong!!'})) 
        })
    };
  };