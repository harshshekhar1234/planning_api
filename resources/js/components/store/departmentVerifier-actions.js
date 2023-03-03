import { departmentVerifierActions } from './departmentVerifierSlice';
import {laravel_api} from '../configuration';
import { errorActions } from './errorSlice';


export const getSubschemeData = (id,finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}verification/pending/${id}/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentVerifierActions.setUpdate({update: false})) 
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: false})) 
            dispatch(departmentVerifierActions.setUpdateReview({updateReview: false}))
            dispatch(departmentVerifierActions.setSubschemes({subschemes: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentVerifierActions.setUpdate({update: false})) 
            dispatch(departmentVerifierActions.setSubschemes({subschemes:[]}))
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: false})) 
            dispatch(departmentVerifierActions.setUpdateReview({updateReview: false}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setUpdate({update: false})) 
          dispatch(departmentVerifierActions.setSubschemes({subschemes:[]}))
          dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: false})) 
          dispatch(departmentVerifierActions.setUpdateReview({updateReview: false}))
        })
    };
  };

  export const aorgetSubschemeData = (id,finYear) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_verification/pending/${id}/${finYear}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentVerifierActions.setUpdate({update: false})) 
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: false})) 
            dispatch(departmentVerifierActions.setUpdateReview({updateReview: false}))
            dispatch(departmentVerifierActions.setSubschemes({subschemes: res.result})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentVerifierActions.setUpdate({update: false})) 
            dispatch(departmentVerifierActions.setSubschemes({subschemes:[]}))
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: false})) 
            dispatch(departmentVerifierActions.setUpdateReview({updateReview: false}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setUpdate({update: false})) 
          dispatch(departmentVerifierActions.setSubschemes({subschemes:[]}))
          dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: false})) 
          dispatch(departmentVerifierActions.setUpdateReview({updateReview: false}))
        })
    };
  };

  export const approveSubscheme = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}verification/approve/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentVerifierActions.setApproveNotificationSuccess({approveNotificationSuccess: true})) 
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: true})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentVerifierActions.setApproveNotificationFailure({approveNotificationFailure: true})) 
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setApproveNotificationFailure({approveNotificationFailure: true})) 
          dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: true})) 
        })
    };
  };

  export const aorapproveSubscheme = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_verification/approve/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(departmentVerifierActions.setApproveNotificationSuccess({approveNotificationSuccess: true})) 
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: true})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(departmentVerifierActions.setApproveNotificationFailure({approveNotificationFailure: true})) 
            dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: true})) 
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setApproveNotificationFailure({approveNotificationFailure: true})) 
          dispatch(departmentVerifierActions.setUpdateApprove({updateApprove: true})) 
        })
    };
  };

  export const reviewSubscheme = (id,comment) => {
    return (dispatch) => {
        fetch(`${laravel_api}verification/review/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            comment:comment
        })
      })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          dispatch(departmentVerifierActions.setReviewNotificationSuccess({reviewNotificationSuccess: true})) 
          dispatch(departmentVerifierActions.setUpdateReview({updateReview: true})) 
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: res.details}))
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setReviewNotificationFailure({reviewNotificationFailure: true})) 
          dispatch(departmentVerifierActions.setUpdateReview({updateReview: true})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setReviewNotificationFailure({reviewNotificationFailure: true})) 
        dispatch(departmentVerifierActions.setUpdateReview({updateReview: true})) 
      })
  };
};

export const aorreviewSubscheme = (id,comment) => {
  return (dispatch) => {
      fetch(`${laravel_api}aor_verification/review/${id}`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          comment:comment
      })
    })
    .then(response => response.json())
    .then(res => {
      if (res.status === 200) {
        dispatch(departmentVerifierActions.setReviewNotificationSuccess({reviewNotificationSuccess: true})) 
        dispatch(departmentVerifierActions.setUpdateReview({updateReview: true})) 
        dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: res.details}))
      } else {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setReviewNotificationFailure({reviewNotificationFailure: true})) 
        dispatch(departmentVerifierActions.setUpdateReview({updateReview: true})) 
      }
    }).catch((err) => {
      dispatch(errorActions.setError({error:true}))
      dispatch(departmentVerifierActions.setReviewNotificationFailure({reviewNotificationFailure: true})) 
      dispatch(departmentVerifierActions.setUpdateReview({updateReview: true})) 
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
          
          dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay: res.reviewRemarks.remarks}))  
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay: 'Sorry something went wrong'})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay: 'Sorry something went wrong'})) 
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
          
          dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay: res.reviewRemarks.remarks}))  
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay: 'Sorry something went wrong'})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay: 'Sorry something went wrong'})) 
      })
  };
};

export const approveDivisionSubschemes = (id) => {
  
  return (dispatch) => {
      fetch(`${laravel_api}verification/verify/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          dispatch(departmentVerifierActions.setFinalApproveNotificationSuccess({finalApproveNotificationSuccess: true})) 
          dispatch(departmentVerifierActions.setUpdate({update: true}))  
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: res.details})) 
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setFinalApproveNotificationFailure({finalApproveNotificationFailure: true})) 
          dispatch(departmentVerifierActions.setUpdate({update: true}))  
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setFinalApproveNotificationFailure({finalApproveNotificationFailure: true})) 
        dispatch(departmentVerifierActions.setUpdate({update: true}))  
      })
  };
};

export const aorapproveDivisionSubschemes = (id) => {
  
  return (dispatch) => {
      fetch(`${laravel_api}aor_verification/verify/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          dispatch(departmentVerifierActions.setFinalApproveNotificationSuccess({finalApproveNotificationSuccess: true})) 
          dispatch(departmentVerifierActions.setUpdate({update: true}))  
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: res.details})) 
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setFinalApproveNotificationFailure({finalApproveNotificationFailure: true})) 
          dispatch(departmentVerifierActions.setUpdate({update: true}))  
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setFinalApproveNotificationFailure({finalApproveNotificationFailure: true})) 
        dispatch(departmentVerifierActions.setUpdate({update: true}))  
      })
  };
};

export const sendApprovalMail = (details) => {
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
          
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: ''}))
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: ''})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: ''}))
      })
  };
};

export const aorsendApprovalMail = (details) => {
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
          
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: ''}))
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: ''})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setSendEmailApprovalDetail({sendemailapprovaldetail: ''}))
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
          dispatch(departmentVerifierActions.setQuaterTs({quaterTs: res.quater}))  
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setQuaterTs({quaterTs: ''})) 
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setQuaterTs({quaterTs: ''})) 
      })
  };
};

export const aorgetLatestQuater = (id) => {
  
  return (dispatch) => {
      fetch(`${laravel_api}aor_latestquater/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          dispatch(departmentVerifierActions.setFromDate({fromDate: res.from_date}))  
          dispatch(departmentVerifierActions.setToDate({toDate: res.to_date})) 
        } else {
          dispatch(errorActions.setError({error:true}))
          dispatch(departmentVerifierActions.setFromDate({fromDate: ''}))  
          dispatch(departmentVerifierActions.setToDate({toDate: ''}))
        }
      }).catch((err) => {
        dispatch(errorActions.setError({error:true}))
        dispatch(departmentVerifierActions.setFromDate({fromDate: ''}))  
        dispatch(departmentVerifierActions.setToDate({toDate: ''})) 
      })
  };
};