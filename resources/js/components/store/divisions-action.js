import { divisionsActions } from './divisionsSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getDivisionsData = (id,finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}div_dashboard/${id}/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(divisionsActions.setDivisions({divisions: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetDivisionsData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_div_dashboard/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(divisionsActions.setDivisions({divisions: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getDivisionData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}division/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            
            dispatch(divisionsActions.setDivision({division: res.name})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getSubSchemesDivisionReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}reportsubschemedivision/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(divisionsActions.setDivisionReport({divisionReport: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getCurrentSubSchemesDivisionReport = (id,finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}cur_reportsubschemedivision/${id}/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(divisionsActions.setDivisionReport({divisionReport: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSubSchemesDivisionReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_reportsubschemedivision/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(divisionsActions.setDivisionReport({divisionReport: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSubSchemesDivisionReportAdmin = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_reportsubschemedivision_admin/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(divisionsActions.setDivisionReport({divisionReport: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getDivisionAll = () => {
  
    return (dispatch) => {
        fetch(`${laravel_api}divisionall`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(divisionsActions.setDivisionAll({divisionAll: res.divisions})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(divisionsActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };