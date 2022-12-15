import { achievementActions } from './achievementSlice';
import { errorActions } from './errorSlice';
import {laravel_api} from '../configuration';


export const getAchievementFillData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}ach/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(achievementActions.setAddAchievement({addAchievement: false})) 
            dispatch(achievementActions.setResult({result: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getAchievementsOutputData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}achievementsoutput/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(achievementActions.setAchievements({achievements: res.result}))  
            dispatch(achievementActions.setUpdate({update: false})) 
            dispatch(achievementActions.setOutputUpdateEdit({updateoutputedit: false})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const aorgetAchievementsOutputData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_achievementsoutput/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(achievementActions.setAchievements({achievements: res.result}))  
            dispatch(achievementActions.setUpdate({update: false})) 
            dispatch(achievementActions.setOutputUpdateEdit({updateoutputedit: false})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutputAchievementData = (departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}achievementsoutput`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time,
            outputindicator_id: outputindicatorId,
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
            dispatch(achievementActions.setAddAchievement({addAchievement: true})) 
            dispatch(achievementActions.setUpdate({update:true}))    
            dispatch(achievementActions.setValue({value:''}))  
            dispatch(achievementActions.setTime({time:''}))    
            dispatch(achievementActions.setMessage({message:''}))  
            dispatch(achievementActions.setEntryMessage({entrymessage:''}))  
            dispatch(achievementActions.setOutputAchSuccess({outputAchSuccess:true})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setAddAchievement({addAchievement: true})) 
            dispatch(achievementActions.setUpdate({update:true}))    
            dispatch(achievementActions.setValue({value:''}))  
            dispatch(achievementActions.setTime({time:''}))    
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(achievementActions.setEntryMessage({entrymessage:''}))  
            dispatch(achievementActions.setOutputAchFailure({outputAchFailure:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setAddAchievement({addAchievement: true})) 
          dispatch(achievementActions.setUpdate({update:true}))    
          dispatch(achievementActions.setValue({value:''}))  
          dispatch(achievementActions.setTime({time:''}))    
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
          dispatch(achievementActions.setEntryMessage({entrymessage:''}))  
          dispatch(achievementActions.setOutputAchFailure({outputAchFailure:true}))
        })
    };
  };

  export const aorstoreOutputAchievementData = (departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_achievementsoutput`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time,
            outputindicator_id: outputindicatorId,
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
            dispatch(achievementActions.setAddAchievement({addAchievement: true})) 
            dispatch(achievementActions.setUpdate({update:true}))    
            dispatch(achievementActions.setValue({value:''}))  
            dispatch(achievementActions.setTime({time:''}))    
            dispatch(achievementActions.setMessage({message:''}))  
            dispatch(achievementActions.setEntryMessage({entrymessage:''}))  
            dispatch(achievementActions.setOutputAchSuccess({outputAchSuccess:true})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setAddAchievement({addAchievement: true})) 
            dispatch(achievementActions.setUpdate({update:true}))    
            dispatch(achievementActions.setValue({value:''}))  
            dispatch(achievementActions.setTime({time:''}))    
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(achievementActions.setEntryMessage({entrymessage:''}))  
            dispatch(achievementActions.setOutputAchFailure({outputAchFailure:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setAddAchievement({addAchievement: true})) 
          dispatch(achievementActions.setUpdate({update:true}))    
          dispatch(achievementActions.setValue({value:''}))  
          dispatch(achievementActions.setTime({time:''}))    
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
          dispatch(achievementActions.setEntryMessage({entrymessage:''}))  
          dispatch(achievementActions.setOutputAchFailure({outputAchFailure:true}))
        })
    };
  };

  export const updateOutputAchievementData = (id,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}update_output_achi_value/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(achievementActions.setOutputUpdateEdit({updateoutputedit:true}))
            dispatch(achievementActions.setValueEdit({valueEdit:''}))  
            dispatch(achievementActions.setTimeEdit({timeEdit:''}))    
            dispatch(achievementActions.setOutputAchEditSuccess({outputAchEditSuccess:true}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setOutputAchEditFailure({outputAchEditFailure:true}))
            dispatch(achievementActions.setValueEdit({valueEdit:''}))  
            dispatch(achievementActions.setTimeEdit({timeEdit:''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setOutputAchEditFailure({outputAchEditFailure:true}))
          dispatch(achievementActions.setValueEdit({valueEdit:''}))  
          dispatch(achievementActions.setTimeEdit({timeEdit:''})) 
        })
    };
  };

  export const aorupdateOutputAchievementData = (id,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_update_output_achi_value/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(achievementActions.setOutputUpdateEdit({updateoutputedit:true}))
            dispatch(achievementActions.setValueEdit({valueEdit:''}))  
            dispatch(achievementActions.setTimeEdit({timeEdit:''}))    
            dispatch(achievementActions.setOutputAchEditSuccess({outputAchEditSuccess:true}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setOutputAchEditFailure({outputAchEditFailure:true}))
            dispatch(achievementActions.setValueEdit({valueEdit:''}))  
            dispatch(achievementActions.setTimeEdit({timeEdit:''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setOutputAchEditFailure({outputAchEditFailure:true}))
          dispatch(achievementActions.setValueEdit({valueEdit:''}))  
          dispatch(achievementActions.setTimeEdit({timeEdit:''})) 
        })
    };
  };

  export const updateOutcomeAchievementData = (id,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}update_outcome_achi_value/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(achievementActions.setOutcomeUpdateEdit({updateoutcomeedit:true}))
            dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit:''}))  
            dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit:''}))    
            dispatch(achievementActions.setOutcomeAchEditSuccess({outcomeAchEditSuccess:true}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setOutcomeAchEditFailure({outcomeAchEditFailure:true}))
            dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit:''}))  
            dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit:''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setOutcomeAchEditFailure({outcomeAchEditFailure:true}))
          dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit:''}))  
          dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit:''}))  
        })
    };
  };

  export const aorupdateOutcomeAchievementData = (id,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_update_outcome_achi_value/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(achievementActions.setOutcomeUpdateEdit({updateoutcomeedit:true}))
            dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit:''}))  
            dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit:''}))    
            dispatch(achievementActions.setOutcomeAchEditSuccess({outcomeAchEditSuccess:true}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setOutcomeAchEditFailure({outcomeAchEditFailure:true}))
            dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit:''}))  
            dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit:''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setOutcomeAchEditFailure({outcomeAchEditFailure:true}))
          dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit:''}))  
          dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit:''}))  
        })
    };
  };

  export const getAchievementsOutcomeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}achievementsoutcome/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(achievementActions.setOutcomeUpdateEdit({updateoutcomeedit: false}))
            dispatch(achievementActions.setAchievementsOutcome({achievementsoutcome: res.result}))  
            dispatch(achievementActions.setUpdateOutcome({updateoutcome: false})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const aorgetAchievementsOutcomeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_achievementsoutcome/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(achievementActions.setOutcomeUpdateEdit({updateoutcomeedit: false}))
            dispatch(achievementActions.setAchievementsOutcome({achievementsoutcome: res.result}))  
            dispatch(achievementActions.setUpdateOutcome({updateoutcome: false})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeOutcomeAchievementData = (departmentId,divisionId,schemeId,subschemeId,outcomeId,outcomeindicatorId,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}achievementsoutcome`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time,
            outcomeindicator_id: outcomeindicatorId,
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
            dispatch(achievementActions.setAddAchievement({addAchievement: true}))
            dispatch(achievementActions.setUpdateOutcome({updateoutcome:true}))    
            dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
            dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))    
            dispatch(achievementActions.setMessage({message:''}))  
            dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
            dispatch(achievementActions.setOutcomeAchSuccess({outcomeAchSuccess:true}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setAddAchievement({addAchievement: true}))
            dispatch(achievementActions.setUpdateOutcome({updateoutcome:true}))    
            dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
            dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))     
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
            dispatch(achievementActions.setOutcomeAchFailure({outcomeAchFailure:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setAddAchievement({addAchievement: true}))
          dispatch(achievementActions.setUpdateOutcome({updateoutcome:true}))    
          dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
          dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))  
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
          dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''})) 
          dispatch(achievementActions.setOutcomeAchFailure({outcomeAchFailure:true}))
        })
    };
  };

  export const aorstoreOutcomeAchievementData = (departmentId,divisionId,schemeId,subschemeId,outcomeId,outcomeindicatorId,value,time) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_achievementsoutcome`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value:value,
            time:time,
            outcomeindicator_id: outcomeindicatorId,
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
            dispatch(achievementActions.setAddAchievement({addAchievement: true}))
            dispatch(achievementActions.setUpdateOutcome({updateoutcome:true}))    
            dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
            dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))    
            dispatch(achievementActions.setMessage({message:''}))  
            dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
            dispatch(achievementActions.setOutcomeAchSuccess({outcomeAchSuccess:true}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setAddAchievement({addAchievement: true}))
            dispatch(achievementActions.setUpdateOutcome({updateoutcome:true}))    
            dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
            dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))     
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
            dispatch(achievementActions.setOutcomeAchFailure({outcomeAchFailure:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setAddAchievement({addAchievement: true}))
          dispatch(achievementActions.setUpdateOutcome({updateoutcome:true}))    
          dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
          dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))  
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
          dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''})) 
          dispatch(achievementActions.setOutcomeAchFailure({outcomeAchFailure:true}))
        })
    };
  };

  export const getRiskRemarksData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/fetch_risk_remark/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          
          if (res.status === 200) {
            dispatch(achievementActions.setRiskRemarks({riskremarks: res.risk_remark[0].risk_remarks}))   
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const aorgetRiskRemarksData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_subscheme/fetch_risk_remark/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          
          if (res.status === 200) {
            if(res.risk_remark[0].aor_risk_remarks){
              dispatch(achievementActions.setRiskRemarks({riskremarks: res.risk_remark[0].aor_risk_remarks}))
            }  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeRiskRemarksData = (riskremarks,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/update_risk_remark/${id}`, {
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
            dispatch(achievementActions.setRiskRemarks({riskremarks:res.risk_remark[0].risk_remarks}))    
            dispatch(achievementActions.setUpdateRemarkSuccess({updateRemarkSuccess:true}))
          } else {    
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(achievementActions.setUpdateRemarkFailure({updateRemarkFailure:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
          dispatch(achievementActions.setUpdateRemarkFailure({updateRemarkFailure:true}))
        })
    };
  };

  export const aorstoreRiskRemarksData = (riskremarks,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_subscheme/update_risk_remark/${id}`, {
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
            dispatch(achievementActions.setRiskRemarks({riskremarks:res.risk_remark[0].aor_risk_remarks}))    
            dispatch(achievementActions.setUpdateRemarkSuccess({updateRemarkSuccess:true}))
          } else {    
            dispatch(errorActions.setError({error:true}))
            dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
            dispatch(achievementActions.setUpdateRemarkFailure({updateRemarkFailure:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(achievementActions.setMessage({message:'Sorry something went wrong!!'}))  
          dispatch(achievementActions.setUpdateRemarkFailure({updateRemarkFailure:true}))
        })
    };
  };