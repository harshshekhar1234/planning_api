import { quaterReportActions } from './quaterReportSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';

export const getQuaterReportList = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}quater_report_list/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(quaterReportActions.setQuaterReports({quaterreports: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(quaterReportActions.setQuaterReports({quaterreports: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(quaterReportActions.setQuaterReports({quaterreports: []}))
        })
    };    
  };

  export const aorgetQuaterReportList = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_quater_report_list/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(quaterReportActions.setQuaterReports({quaterreports: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(quaterReportActions.setQuaterReports({quaterreports: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(quaterReportActions.setQuaterReports({quaterreports: []}))
        })
    };    
  };

  export const getSubSchemesDivisionReportId = (id,rid) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}reportsubschemedivision/${id}/report/${rid}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          
          if (res.status === 200) {
            
            dispatch(quaterReportActions.setDivisionReportId({divisionReportId: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(quaterReportActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(quaterReportActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const aorgetSubSchemesDivisionReportId = (id,rid) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_reportsubschemedivision/${id}/report/${rid}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          
          if (res.status === 200) {
            
            dispatch(quaterReportActions.setDivisionReportId({divisionReportId: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(quaterReportActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(quaterReportActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };