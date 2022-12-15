import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outputsActions } from './outputSlice';
import { outputindicatorActions } from './outputindicatorSlice';
import { outputtargetActions } from './outputtargetSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getOutputTargetData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outputindictortarget/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outputtargetActions.setOutputTargets({targets: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outputtargetActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outputtargetActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetOutputTargetData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outputindictortarget/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outputtargetActions.setOutputTargets({targets: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outputtargetActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outputtargetActions.setMessage({message:'Sorry something went wrong!!'}))
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

  export const storeOutputTargetData = (departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId,value,year,measurement) => {
    return (dispatch) => {
        fetch(`${laravel_api}outputindictortarget`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            year:year,
            outputindicator_id: outputindicatorId,
            output_id:outputId,
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
            dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:''}))  
            dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator:[]}))
            dispatch(outputsActions.setOutputSearch({searchOutput:[]}))  
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:''})) 
            dispatch(outputtargetActions.setOutputTargetValue({value: ''}))
            dispatch(outputtargetActions.setTargetYear({year:''}))
            dispatch(outputtargetActions.setTargetMeasurement({measurement:''}))
            dispatch(outputtargetActions.setMessage({message:'Output Indicator Target created successfully'}))        
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
            dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:''}))  
            dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator:[]}))
            dispatch(outputsActions.setOutputSearch({searchOutput:[]}))  
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:''})) 
            dispatch(outputtargetActions.setOutputTargetValue({value: ''}))
            dispatch(outputtargetActions.setTargetYear({year:''}))
            dispatch(outputtargetActions.setTargetMeasurement({measurement:''}))
            dispatch(outputtargetActions.setMessage({message:'Sorry something went wrong!!'})) 
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
            dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:''}))
            dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator:[]}))
            dispatch(outputsActions.setOutputSearch({searchOutput:[]}))  
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:''})) 
            dispatch(outputtargetActions.setOutputTargetValue({value: ''}))
            dispatch(outputtargetActions.setTargetYear({year:''}))
            dispatch(outputtargetActions.setTargetMeasurement({measurement:''}))
            dispatch(outputtargetActions.setMessage({message:'Sorry something went wrong!!'})) 
        })
    };
  };