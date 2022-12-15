import { outlayActions } from './outlaySlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';
import { truncate } from 'lodash';


export const getOutlayData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_outlay/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setOutlay({outlay: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setOutlay({outlay: ''}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setOutlay({outlay: ''}))
        })
    };
  };

  export const getOutlayShareData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_outlay/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setStateShare({stateShare: res.state_share})) 
            dispatch(outlayActions.setCenterShare({centerShare: res.center_share})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setStateShare({stateShare: ''})) 
            dispatch(outlayActions.setCenterShare({centerShare: ''}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setStateShare({stateShare: ''})) 
            dispatch(outlayActions.setCenterShare({centerShare: ''}))
        })
    };
  };

  export const miggetOutlayShareData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme_outlay/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setStateShare({stateShare: res.state_share})) 
            dispatch(outlayActions.setCenterShare({centerShare: res.center_share})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setStateShare({stateShare: ''})) 
            dispatch(outlayActions.setCenterShare({centerShare: ''}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setStateShare({stateShare: ''})) 
            dispatch(outlayActions.setCenterShare({centerShare: ''}))
        })
    };
  };

  export const getFinancialData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_expenditure/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setFinancialDetails({financialDetails: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setFinancialDetails({financialDetails: ''}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setFinancialDetails({financialDetails: ''}))
        })
    };
  };

  export const aorgetFinancialData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_subscheme_expenditure/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setFinancialDetails({financialDetails: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setFinancialDetails({financialDetails: ''}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setFinancialDetails({financialDetails: ''}))
        })
    };
  };

  export const storeFinancialData = (sanctioned,allotment,expenditure,time,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_expenditure`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sanction:sanctioned,
            allotment:allotment,
            expenditure:expenditure,
            time:time,
            subscheme_id:id
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setFinancialEntryNotificationSuccess({financialentrynotificationsuccess: true}))
            dispatch(outlayActions.setSanctioned({sanctioned: ''}))
            dispatch(outlayActions.setAllotment({allotment: ''}))
            dispatch(outlayActions.setExpenditure({expenditure: ''}))
            dispatch(outlayActions.setOutlayTime({time: ''}))
            dispatch(outlayActions.setEntryMessage({entrymessage: ''}))       
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: true}))      
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setFinancialEntryNotificationFailure({financialentrynotificationfailure: true}))
            dispatch(outlayActions.setSanctioned({sanctioned: ''}))
            dispatch(outlayActions.setAllotment({allotment: ''}))
            dispatch(outlayActions.setExpenditure({expenditure: ''}))
            dispatch(outlayActions.setOutlayTime({time: ''}))
            dispatch(outlayActions.setEntryMessage({entrymessage: ''})) 
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setFinancialEntryNotificationFailure({financialentrynotificationfailure: true}))
          dispatch(outlayActions.setSanctioned({sanctioned: ''}))
          dispatch(outlayActions.setAllotment({allotment: ''}))
          dispatch(outlayActions.setExpenditure({expenditure: ''}))
          dispatch(outlayActions.setOutlayTime({time: ''}))
          dispatch(outlayActions.setEntryMessage({entrymessage: ''})) 
          dispatch(outlayActions.setUpdateOutlay({updateOutlay: true})) 
        })
    };
  };

  export const updateStateCenterData = (id,state,center) => {
    return (dispatch) => {
        fetch(`${laravel_api}financialOutlay/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          state_share:state,
          center_share:center
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setStateShare({stateShare: res.state_share})) 
            dispatch(outlayActions.setCenterShare({centerShare: res.center_share}))       
          } else {
            dispatch(errorActions.setError({error:true}))
            
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          
        })
    };
  };

  export const migupdateStateCenterData = (id,state,center) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_financialOutlay/update/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          state_share:state,
          center_share:center
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setStateShare({stateShare: res.state_share})) 
            dispatch(outlayActions.setCenterShare({centerShare: res.center_share}))       
          } else {
            dispatch(errorActions.setError({error:true}))
            
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          
        })
    };
  };

  export const aorstoreFinancialData = (sanctioned,allotment,expenditure,time,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_subscheme_expenditure`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sanction:sanctioned,
            allotment:allotment,
            expenditure:expenditure,
            time:time,
            subscheme_id:id
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setFinancialEntryNotificationSuccess({financialentrynotificationsuccess: true}))
            dispatch(outlayActions.setSanctioned({sanctioned: ''}))
            dispatch(outlayActions.setAllotment({allotment: ''}))
            dispatch(outlayActions.setExpenditure({expenditure: ''}))
            dispatch(outlayActions.setOutlayTime({time: ''}))
            dispatch(outlayActions.setEntryMessage({entrymessage: ''}))       
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: true}))      
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setFinancialEntryNotificationFailure({financialentrynotificationfailure: true}))
            dispatch(outlayActions.setSanctioned({sanctioned: ''}))
            dispatch(outlayActions.setAllotment({allotment: ''}))
            dispatch(outlayActions.setExpenditure({expenditure: ''}))
            dispatch(outlayActions.setOutlayTime({time: ''}))
            dispatch(outlayActions.setEntryMessage({entrymessage: ''})) 
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setFinancialEntryNotificationFailure({financialentrynotificationfailure: true}))
          dispatch(outlayActions.setSanctioned({sanctioned: ''}))
          dispatch(outlayActions.setAllotment({allotment: ''}))
          dispatch(outlayActions.setExpenditure({expenditure: ''}))
          dispatch(outlayActions.setOutlayTime({time: ''}))
          dispatch(outlayActions.setEntryMessage({entrymessage: ''})) 
          dispatch(outlayActions.setUpdateOutlay({updateOutlay: true})) 
        })
    };
  };

  export const updateFinancialData = (sanctioned,allotment,expenditure,time,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}update_ss_fin_exp_value/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sanction:sanctioned,
            allotment:allotment,
            expenditure:expenditure,
            time:time
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setFinancialEntryNotificationSuccessEdit({financialentrynotificationsuccessedit: true}))
            dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
            dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
            dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
            dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
            dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))       
            dispatch(outlayActions.setUpdateOutlayEdit({updateOutlayEdit: true}))      
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setFinancialEntryNotificationFailureEdit({financialentrynotificationfailureedit: true}))
            dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
            dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
            dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
            dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
            dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))       
            dispatch(outlayActions.setUpdateOutlayEdit({updateOutlayEdit: true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setFinancialEntryNotificationFailureEdit({financialentrynotificationfailureedit: true}))
          dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
            dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
            dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
            dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
            dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))       
            dispatch(outlayActions.setUpdateOutlayEdit({updateOutlayEdit: true}))
        })
    };
  };

  export const aorupdateFinancialData = (sanctioned,allotment,expenditure,time,id) => {
    return (dispatch) => {
        fetch(`${laravel_api}aor_update_ss_fin_exp_value/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sanction:sanctioned,
            allotment:allotment,
            expenditure:expenditure,
            time:time
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(outlayActions.setFinancialEntryNotificationSuccessEdit({financialentrynotificationsuccessedit: true}))
            dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
            dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
            dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
            dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
            dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))       
            dispatch(outlayActions.setUpdateOutlayEdit({updateOutlayEdit: true}))      
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(outlayActions.setFinancialEntryNotificationFailureEdit({financialentrynotificationfailureedit: true}))
            dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
            dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
            dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
            dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
            dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))       
            dispatch(outlayActions.setUpdateOutlayEdit({updateOutlayEdit: true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(outlayActions.setFinancialEntryNotificationFailureEdit({financialentrynotificationfailureedit: true}))
          dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
            dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
            dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
            dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
            dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))       
            dispatch(outlayActions.setUpdateOutlayEdit({updateOutlayEdit: true}))
        })
    };
  };