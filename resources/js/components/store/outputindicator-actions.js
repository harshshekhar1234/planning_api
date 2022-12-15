import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outputsActions } from './outputSlice';
import { outputindicatorActions } from './outputindicatorSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


  export const getOutputIndicatorsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outputindicator/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetOutputIndicatorsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outputindicator/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutputIndicatorData = (departmentId,divisionId,schemeId,subschemeId,outputId,name) => {
    return (dispatch) => {
        fetch(`${laravel_api}outputindicator`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            output_id:outputId,
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
            dispatch(outputindicatorActions.setMessage({message:'Output Indicator created successfully'}))  
            dispatch(outputindicatorActions.setOutputIndicatorName({outputindicatorName:''}))
            dispatch(outputsActions.setOutputSearch({searchOutput:[]}))  
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))         
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
            dispatch(outputindicatorActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(outputindicatorActions.setOutputIndicatorName({outputindicatorName:''}))
            dispatch(outputsActions.setOutputSearch({searchOutput:[]}))  
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))  
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
            dispatch(outputindicatorActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(outputindicatorActions.setOutputIndicatorName({outputindicatorName:''}))
            dispatch(outputsActions.setOutputSearch({searchOutput:[]}))  
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))  
        })
    };
  };

  export const deleteOutputIndicatorData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}outputindicator/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outputindicatorActions.setOutputIndicatorDeleteSuccess({outputIndicatorDeleteSuccess:true}))
                    
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migdeleteOutputIndicatorData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_outputindicator/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outputindicatorActions.setOutputIndicatorDeleteSuccess({outputIndicatorDeleteSuccess:true}))
                    
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };