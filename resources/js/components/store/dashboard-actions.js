import { dashboardActions } from './dashboardSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getDepartmentIndicatorCountData = (finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}count_indicators/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(dashboardActions.setDepartmentIndicatorCount({departmentIndicatorCount: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(dashboardActions.setDepartmentIndicatorCount({departmentIndicatorCount: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(dashboardActions.setDepartmentIndicatorCount({departmentIndicatorCount: []}))
        })
    };
  };

  export const getDivisionIndicatorCountData = (id,finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}count_for_div_dashboard/${id}/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(dashboardActions.setCountIndicatorsDivision({countIndicatorsDivision: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(dashboardActions.setCountIndicatorsDivision({countIndicatorsDivision: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(dashboardActions.setCountIndicatorsDivision({countIndicatorsDivision: []}))
        })
    };
  };

  export const getDivisionIndicatorStatusData = (finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}status_update/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(dashboardActions.setStatusUpdate({statusUpdate: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(dashboardActions.setStatusUpdate({statusUpdate: []})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(dashboardActions.setStatusUpdate({statusUpdate: []})) 
        })
    };
  };

  export const getCountStatusData = (finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}count_for_dashboard/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(dashboardActions.setCountIndicators({countIndicators: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(dashboardActions.setCountIndicators({countIndicators: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(dashboardActions.setCountIndicators({countIndicators: []}))
        })
    };
  };

  export const getPublicCountStatusData = (finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}public_count_for_dashboard/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(dashboardActions.setCountIndicators({countIndicators: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(dashboardActions.setCountIndicators({countIndicators: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(dashboardActions.setCountIndicators({countIndicators: []}))
        })
    };
  };

  export const getPublicIndicatorCountData = (finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}public_count_indicators/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(dashboardActions.setDepartmentIndicatorCount({departmentIndicatorCount: res}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(dashboardActions.setDepartmentIndicatorCount({departmentIndicatorCount: []}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(dashboardActions.setDepartmentIndicatorCount({departmentIndicatorCount: []}))
        })
    };
  };