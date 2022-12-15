import { departmentMakerActions } from './departmentMakerSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getSubschemeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}divisions/${id}/subschemes`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setUpdate({update: false})) 
            dispatch(departmentMakerActions.setSubschemes({subschemes: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setUpdate({update: false})) 
            dispatch(departmentMakerActions.setSubschemes({subschemes:[]}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setUpdate({update: false})) 
          dispatch(departmentMakerActions.setSubschemes({subschemes:[]}))
        })
    };
  };

  export const aorgetSubschemeData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_divisions/${id}/subschemes`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setUpdate({update: false})) 
            dispatch(departmentMakerActions.setSubschemes({subschemes: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setUpdate({update: false})) 
            dispatch(departmentMakerActions.setSubschemes({subschemes:[]}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setUpdate({update: false})) 
          dispatch(departmentMakerActions.setSubschemes({subschemes:[]}))
        })
    };
  };

  export const submitVerification = (id,name,year) => {
    return (dispatch) => {
      fetch(`${laravel_api}verification/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            year:year
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(departmentMakerActions.setSubmitNotificationSuccess({submitNotificationSuccess:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
            dispatch(departmentMakerActions.setSendEmail({sendEmail: true}))
            dispatch(departmentMakerActions.setEmailDetail({mailDetail: res.details}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setSubmitNotificationFailure({submitNotificationFailure:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setUpdate({update: true})) 
          dispatch(departmentMakerActions.setSubmitNotificationFailure({submitNotificationFailure:true}))
        })
    };
  };

  export const aorsubmitVerification = (id,fromDate,toDate) => {
    return (dispatch) => {
      fetch(`${laravel_api}aor_verification/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from_date:fromDate,
            to_date:toDate,
            year:'2022-2023'
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(departmentMakerActions.setSubmitNotificationSuccess({submitNotificationSuccess:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
            dispatch(departmentMakerActions.setSendEmail({sendEmail: true}))
            dispatch(departmentMakerActions.setEmailDetail({mailDetail: res.details}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setSubmitNotificationFailure({submitNotificationFailure:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setUpdate({update: true})) 
          dispatch(departmentMakerActions.setSubmitNotificationFailure({submitNotificationFailure:true}))
        })
    };
  };

  export const sendSubmitMail = (details) => {
    return (dispatch) => {
      fetch(`${laravel_api}email/submit_notification`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          details:details
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(departmentMakerActions.setSendEmail({sendEmail: false}))
            dispatch(departmentMakerActions.setEmailDetail({mailDetail: ''}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setSendEmail({sendEmail: false}))
            dispatch(departmentMakerActions.setEmailDetail({mailDetail: ''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setSendEmail({sendEmail: false}))
          dispatch(departmentMakerActions.setEmailDetail({mailDetail: ''}))
        })
    };
  };

  export const aorsendSubmitMail = (details) => {
    return (dispatch) => {
      fetch(`${laravel_api}aor_email/submit_notification`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          details:details
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(departmentMakerActions.setSendEmail({sendEmail: false}))
            dispatch(departmentMakerActions.setEmailDetail({mailDetail: ''}))
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setSendEmail({sendEmail: false}))
            dispatch(departmentMakerActions.setEmailDetail({mailDetail: ''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setSendEmail({sendEmail: false}))
          dispatch(departmentMakerActions.setEmailDetail({mailDetail: ''}))
        })
    };
  };

  export const submitCorrection = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}verification/resubmit/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setCorrectNotificationSuccess({correctNotificationSuccess:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setCorrectNotificationFailure({correctNotificationFailure:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setUpdate({update: true})) 
          dispatch(departmentMakerActions.setCorrectNotificationFailure({correctNotificationFailure:true}))
        })
    };
  };

  export const aorsubmitCorrection = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_verification/resubmit/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setCorrectNotificationSuccess({correctNotificationSuccess:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setCorrectNotificationFailure({correctNotificationFailure:true}))
            dispatch(departmentMakerActions.setUpdate({update: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setUpdate({update: true})) 
          dispatch(departmentMakerActions.setCorrectNotificationFailure({correctNotificationFailure:true}))
        })
    };
  };

  export const getComment = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}verification/remarks/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setComment({comment: res.reviewRemarks.remarks}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setComment({comment: 'Sorry something went wrong'})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setComment({comment: 'Sorry something went wrong'})) 
        })
    };
  };

  export const aorgetComment = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_verification/remarks/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setComment({comment: res.reviewRemarks.remarks}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setComment({comment: 'Sorry something went wrong'})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setComment({comment: 'Sorry something went wrong'})) 
        })
    };
  };

  export const getLatestQuater = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}latestquater/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentMakerActions.setQuaterTs({quaterTs: res.quater}))  
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentMakerActions.setQuaterTs({quaterTs: ''})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentMakerActions.setQuaterTs({quaterTs: ''})) 
        })
    };
  };