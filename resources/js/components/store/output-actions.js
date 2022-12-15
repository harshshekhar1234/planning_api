import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outputsActions } from './outputSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getOutputsData = (id) => {
  
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
            
            dispatch(outputsActions.setOutputs({outputs: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outputsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outputsActions.setMessage({message:'Sorry something went wrong!!'}))
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
            dispatch(outputsActions.setOutputUpdate({updateOutput: false})) 
            dispatch(outputsActions.setOutputSearch({searchOutput: res})) 
          } else {
            dispatch(outputsActions.setOutputUpdate({updateOutput: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(outputsActions.setOutputUpdate({updateOutput: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(outputsActions.setOutputSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSearchOutputData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outputs/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(outputsActions.setOutputUpdate({updateOutput: false})) 
            dispatch(outputsActions.setOutputSearch({searchOutput: res})) 
          } else {
            dispatch(outputsActions.setOutputUpdate({updateOutput: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(outputsActions.setOutputSearchMessage({searchMessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(outputsActions.setOutputUpdate({updateOutput: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(outputsActions.setOutputSearchMessage({searchMessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutputData = (departmentId,divisionId,schemeId,subschemeId,name) => {
    return (dispatch) => {
        fetch(`${laravel_api}output`, {
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
            dispatch(outputsActions.setMessage({message:'Output created successfully'})
            )  
            dispatch(outputsActions.setOutputName({outputName:''}))          
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
            dispatch(outputsActions.setMessage({message:'Sorry something went wrong!!'}))
            dispatch(outputsActions.setOutputName({outputName:''})) 
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
            dispatch(outputsActions.setOutputName({outputName:''})) 
          dispatch(outputsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const updateOutputData = (id,output) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}output/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:output
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outputsActions.setOutputUpdate({updateOutput: true})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migupdateOutputData = (id,output) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_output/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:output
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outputsActions.setOutputUpdate({updateOutput: true})) 
            
          } else {
            dispatch(errorActions.setError({error:true}))
           
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const deleteOutputData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}output/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outputsActions.setOutputDeleteSuccess({outputDeleteSuccess:true}))
            dispatch(outputsActions.setOutputUpdate({updateOutput: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migdeleteOutputData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_output/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outputsActions.setOutputDeleteSuccess({outputDeleteSuccess:true}))
            dispatch(outputsActions.setOutputUpdate({updateOutput: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  