import { settingActions } from './settingSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

export const divisionOutcomeEntry = (id,entry,pending) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}budget_entry_setting/update`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          division_id:id,
          entry:entry,
          pending:pending
        })
      })
        .then(response => response.json())
        .then(res => {
          if(res.status === 200){
            dispatch(settingActions.setDivisionId({divisionId:''}))
            dispatch(settingActions.setBlockSetting({blockSetting:[]}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(settingActions.setDivisionId({divisionId:''}))
            dispatch(settingActions.setBlockSetting({blockSetting:[]}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(settingActions.setDivisionId({divisionId:''}))
          dispatch(settingActions.setBlockSetting({blockSetting:[]}))
        })
    };
  };

  export const getOutcomeEntrySetting = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}budget_entry_setting/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            let b = []
            if(res.div_budget_entry_settings.entry === true){
                b = [...b,'entry']
            }
            if(res.div_budget_entry_settings.pending === true){
                b = [...b,'pending']
            }
            dispatch(settingActions.setBlockSetting({blockSetting: b}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };