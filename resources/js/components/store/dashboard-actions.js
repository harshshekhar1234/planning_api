import { dashboardActions } from './dashboardSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getDepartmentIndicatorCountData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}count_indicators`, {
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

  export const getDivisionIndicatorCountData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}count_for_div_dashboard/${id}`, {
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

  export const getDivisionIndicatorStatusData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}status_update`, {
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

  export const getCountStatusData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}count_for_dashboard`, {
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

  export const getPublicCountStatusData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}public_count_for_dashboard`, {
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

  export const getPublicIndicatorCountData = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}public_count_indicators`, {
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