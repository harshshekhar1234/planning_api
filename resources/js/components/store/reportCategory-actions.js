import { reportCategoryActions } from './reportCategorySlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getSubschemesCategoryData = (finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}report_for_dynmc_dashboard/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(reportCategoryActions.setSubschemes({subschemes: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(reportCategoryActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(reportCategoryActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };


  