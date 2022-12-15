import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import { outputsActions } from './outputSlice';
import { outputindicatorActions } from './outputindicatorSlice';
import { outcomesActions } from './outcomeSlice';
import { outcomeindicatorActions } from './outcomeindicatorSlice';
import { deptUserEntryActions } from './deptUserEntrySlice';
import { errorActions } from './errorSlice';
import {laravel_api} from '../configuration';


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

  export const storeNewOutputData = (output,outputindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}output_store`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            output:output,
            outputindicator:outputindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Output created successfully'}))  
            dispatch(outputsActions.setOutputSearch({searchOutput:res.outputs})) 
            dispatch(deptUserEntryActions.setNewOutputNotificationSuccess({newoutputnotificationsuccess:true}))        
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutputNotificationFailure({newoutputnotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutputNotificationFailure({newoutputnotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const migstoreNewOutputData = (output,outputindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_output_store`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            output:output,
            outputindicator:outputindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Output created successfully'}))  
            dispatch(outputsActions.setOutputSearch({searchOutput:res.outputs})) 
            dispatch(deptUserEntryActions.setNewOutputNotificationSuccess({newoutputnotificationsuccess:true}))        
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutputNotificationFailure({newoutputnotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutputNotificationFailure({newoutputnotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const storeNewOutputIndicatorData = (output,outputindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}outputindicatorstore`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            output:output,
            outputindicator:outputindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationSuccess({newoutputindicatornotificationsuccess:true}))
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Output created successfully'}))         
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationFailure({newoutputindicatornotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationFailure({newoutputindicatornotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const migstoreNewOutputIndicatorData = (output,outputindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_outputindicatorstore`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            output:output,
            outputindicator:outputindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationSuccess({newoutputindicatornotificationsuccess:true}))
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Output created successfully'}))         
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationFailure({newoutputindicatornotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationFailure({newoutputindicatornotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutputCreateMessage({outputcreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const storeNewOutcomeData = (outcome,outcomeindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcome_store`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outcome:outcome,
            outcomeindicator:outcomeindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setNewOutcomeNotificationSuccess({newoutcomenotificationsuccess:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Outcome created successfully'}))  
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:res.outcomes}))         
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutcomeNotificationFailure({newoutcomenotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutcomeNotificationFailure({newoutcomenotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const migstoreNewOutcomeData = (outcome,outcomeindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcome_store`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outcome:outcome,
            outcomeindicator:outcomeindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setNewOutcomeNotificationSuccess({newoutcomenotificationsuccess:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Outcome created successfully'}))  
            dispatch(outcomesActions.setOutcomeSearch({searchOutcome:res.outcomes}))         
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutcomeNotificationFailure({newoutcomenotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutcomeNotificationFailure({newoutcomenotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const storeNewOutcomeIndicatorData = (outcome,outcomeindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindicatorstore`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outcome:outcome,
            outcomeindicator:outcomeindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationSuccess({newoutcomeindicatornotificationsuccess:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Outcome created successfully'}))         
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationFailure({newoutcomeindicatornotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationFailure({newoutcomeindicatornotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const migstoreNewOutcomeIndicatorData = (outcome,outcomeindicators) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcomeindicatorstore`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outcome:outcome,
            outcomeindicator:outcomeindicators,
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationSuccess({newoutcomeindicatornotificationsuccess:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Outcome created successfully'}))         
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationFailure({newoutcomeindicatornotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationFailure({newoutcomeindicatornotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutcomeCreateMessage({outcomecreatemessage:'Sorry something went wrong!!'}))   
        })
    };
  };

  export const getOutputIndicatorEditData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outputindicator_target/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit: res.outputindicator})) 
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit: res.outputtarget[0]}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetOutputIndicatorEditData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outputindicator_target/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit: res.outputindicator})) 
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit: res.outputtarget[0]}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getOutcomeIndicatorEditData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}outcomeindicator_target/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit: res.outcomeindicator})) 
            dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit: res.outcometarget[0]}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetOutcomeIndicatorEditData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_outcomeindicator_target/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit: res.outcomeindicator})) 
            dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit: res.outcometarget[0]}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))
        })
    };
  };

  export const updateOutputIndicatorData = (outputindicator,target) => {
    return (dispatch) => {
        fetch(`${laravel_api}update_outputindicator_and_target`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outputindicator:outputindicator,
            outputtarget:target
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationSuccess({outputindicatoreditnotificationsuccess:true}))
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))     
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationFailure({outputindicatoreditnotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:'Sorry something went wrong!!'})) 
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationFailure({outputindicatoreditnotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:'Sorry something went wrong!!'})) 
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))   
        })
    };
  };

  export const migupdateOutputIndicatorData = (outputindicator,target) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_update_outputindicator_and_target`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outputindicator:outputindicator,
            outputtarget:target
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationSuccess({outputindicatoreditnotificationsuccess:true}))
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))     
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationFailure({outputindicatoreditnotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:'Sorry something went wrong!!'})) 
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))  
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationFailure({outputindicatoreditnotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:'Sorry something went wrong!!'})) 
            dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))   
        })
    };
  };

  export const updateOutcomeIndicatorData = (outcomeindicator,target) => {
    return (dispatch) => {
        fetch(`${laravel_api}update_outcomeindicator_and_target`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outcomeindicator:outcomeindicator,
            outcometarget:target
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationSuccess({outcomeindicatoreditnotificationsuccess:true})) 
            dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}}))     
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationFailure({outcomeindicatoreditnotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'})) 
            dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationFailure({outcomeindicatoreditnotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))  
          dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
          dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}}))   
        })
    };
  };

  export const migupdateOutcomeIndicatorData = (outcomeindicator,target) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_update_outcomeindicator_and_target`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outcomeindicator:outcomeindicator,
            outcometarget:target
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationSuccess({outcomeindicatoreditnotificationsuccess:true})) 
            dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}}))     
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationFailure({outcomeindicatoreditnotificationfailure:true}))
            dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'})) 
            dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
            dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationFailure({outcomeindicatoreditnotificationfailure:true}))
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:'Sorry something went wrong!!'}))  
          dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
          dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}}))   
        })
    };
  };

  export const miggetRiskRemarksData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme/fetch_risk_remark/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          
          if (res.status === 200) {
            console.log(res)
            dispatch(deptUserEntryActions.setRiskRemarks({riskremarks: res.risk_remark[0].initial_remarks}))   
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const migstoreRiskRemarksData = (riskremarks,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme/update_risk_remark/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          risk_remarks:riskremarks
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(deptUserEntryActions.setRiskRemarks({riskremarks:res.risk_remark[0].initial_remarks}))    
            dispatch(deptUserEntryActions.setUpdateRemarkSuccess({updateRemarkSuccess:true}))
          } else {    
            dispatch(errorActions.setError({error:true}))
            dispatch(deptUserEntryActions.setMessage({message:'Sorry something went wrong!!'}))  
            
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(deptUserEntryActions.setMessage({message:'Sorry something went wrong!!'}))  
         
        })
    };
  };