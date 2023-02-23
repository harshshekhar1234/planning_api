import { settingActions } from './settingSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

export const divisionOutcomeEntry = (id,entry,pending) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}setting/outcomeentry`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id:id,
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
            dispatch(settingActions.setEmail({divisionId:''}))
            dispatch(settingActions.setPassword({blockSetting:[]}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(settingActions.setEmail({divisionId:''}))
          dispatch(settingActions.setPassword({blockSetting:[]}))
        })
    };
  };