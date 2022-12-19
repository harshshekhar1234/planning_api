import { subschemesActions } from './subschemesSlice';
import { schemesActions } from './schemesSlice';
import {laravel_api} from '../configuration';
import { outlayActions } from './outlaySlice';
import { errorActions } from './errorSlice';


export const getSubSchemesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subschemes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(subschemesActions.setSubSchemes({subschemes: res})) 
          } else {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSubSchemesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subschemes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(subschemesActions.setSubSchemes({subschemes: res})) 
          } else {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetPendingSubSchemesData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_pendingsubschemes/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(subschemesActions.setPendingSubSchemes({pendingSubSchemes: res})) 
          } else {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetPendingSubSchemesDeptData = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_pendingsubschemesdept/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(subschemesActions.setPendingSubSchemes({pendingSubSchemes: res})) 
          } else {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getSubSchemesDataDeptUser = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subschemesdeptuser/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(subschemesActions.setSubSchemes({subschemes: res})) 
          } else {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSubSchemesDataDeptUser = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subschemesdeptuser/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.length !== 0) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(subschemesActions.setSubSchemes({subschemes: res})) 
          } else {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: false})) 
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const storeSubSchemeData = (departmentId,divisionId,schemeId,name,code) => {
    return (dispatch) => {
        fetch(`${laravel_api}subscheme`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            subscheme_code:code,
            scheme_id:schemeId,
            division_id:divisionId,
            department_id:departmentId
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
            dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
            dispatch(subschemesActions.setMessage({message:'Sub Scheme created successfully'}))            
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
            dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
            dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))
            dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
            dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const searchSubSchemesName = (name,id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/searchname/${name}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.result !== "No Data not found") {
            
            dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
            dispatch(subschemesActions.setSearchMessage({searchMessage:'Nothing Found'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
            dispatch(subschemesActions.setSearchMessage({searchMessage:'Nothing Found'}))
        })
    };    
  };

  export const searchSubSchemesCode = (code,id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/searchcode/${code}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.result !== "No Data not found") {
            
            dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
            dispatch(subschemesActions.setSearchMessage({searchMessage:'Nothing Found'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []}))
          dispatch(subschemesActions.setSearchMessage({searchMessage:'Nothing Found'}))
        })
    };    
  };

  export const getSubSchemesReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}reportsubscheme/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(subschemesActions.setSubSchemeReport({report: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getCurrentSubSchemesReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}cur_reportsubscheme/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(subschemesActions.setSubSchemeReport({report: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const miggetSubSchemesReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_reportsubscheme/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(subschemesActions.setSubSchemeReport({report: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getSubSchemesReportVerifier = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}verification/reportsubscheme/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(subschemesActions.setSubSchemeReport({report: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const aorgetSubSchemesReportVerifier = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_verification/reportsubscheme/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(subschemesActions.setSubSchemeReport({report: res})) 
          } else {
            dispatch(errorActions.setError({error:true}))
            dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
          dispatch(subschemesActions.setMessage({message:'Sorry something went wrong!!'}))
        })
    };
  };

  export const getSubSchemesHeaderReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_header/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: false})) 
            dispatch(subschemesActions.setSubSchemeName({subschemename: res.sub_scheme[0].name})) 
            dispatch(subschemesActions.setSubSchemeCode({subschemecode: res.sub_scheme[0].subscheme_code}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:res.sub_scheme[0].state_name}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:res.sub_scheme[0].center_name}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:res.sub_scheme[0].center_code}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:res.sub_scheme[0].state_code}))
            dispatch(subschemesActions.setDemandNo({demand_no:res.sub_scheme[0].demand_no}))
            dispatch(subschemesActions.setDepartmentName({department_name:res.sub_scheme[0].dept_name}))
            dispatch(subschemesActions.setAllotment({allotment:res.allotment}))
            dispatch(subschemesActions.setDivisionName({division_name:res.sub_scheme[0].div_name}))
            dispatch(subschemesActions.setExpenditure({expenditure:res.expenditure}))
            dispatch(subschemesActions.setSanction({sanction:res.sanction}))
            dispatch(subschemesActions.setFinAddBtn({finAddBtn:res.sub_scheme[0].fin_add_btn_flag}))
            dispatch(subschemesActions.setVerifiedStatusSS({verified_status_ss:res.sub_scheme[0].verified_status}))
            dispatch(subschemesActions.setSubmittedStatusSS({submitted_status_ss:res.sub_scheme[0].submitted_status}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const getCurrentSubSchemesHeaderReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}cur_subscheme_header/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: false})) 
            dispatch(subschemesActions.setSubSchemeName({subschemename: res.sub_scheme[0].name})) 
            dispatch(subschemesActions.setSubSchemeCode({subschemecode: res.sub_scheme[0].subscheme_code}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:res.sub_scheme[0].state_name}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:res.sub_scheme[0].center_name}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:res.sub_scheme[0].center_code}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:res.sub_scheme[0].state_code}))
            dispatch(subschemesActions.setDemandNo({demand_no:res.sub_scheme[0].demand_no}))
            dispatch(subschemesActions.setDepartmentName({department_name:res.sub_scheme[0].dept_name}))
            dispatch(subschemesActions.setAllotment({allotment:res.allotment}))
            dispatch(subschemesActions.setDivisionName({division_name:res.sub_scheme[0].div_name}))
            dispatch(subschemesActions.setExpenditure({expenditure:res.expenditure}))
            dispatch(subschemesActions.setSanction({sanction:res.sanction}))
            dispatch(subschemesActions.setFinAddBtn({finAddBtn:res.sub_scheme[0].fin_add_btn_flag}))
            dispatch(subschemesActions.setVerifiedStatusSS({verified_status_ss:res.sub_scheme[0].verified_status}))
            dispatch(subschemesActions.setSubmittedStatusSS({submitted_status_ss:res.sub_scheme[0].submitted_status}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const miggetSubSchemesHeaderReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme_header/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: false})) 
            dispatch(subschemesActions.setSubSchemeName({subschemename: res.sub_scheme[0].name})) 
            dispatch(subschemesActions.setSubSchemeCode({subschemecode: res.sub_scheme[0].subscheme_code}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:res.sub_scheme[0].state_name}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:res.sub_scheme[0].center_name}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:res.sub_scheme[0].center_code}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:res.sub_scheme[0].state_code}))
            dispatch(subschemesActions.setDemandNo({demand_no:res.sub_scheme[0].demand_no}))
            dispatch(subschemesActions.setDepartmentName({department_name:res.sub_scheme[0].dept_name}))
            dispatch(subschemesActions.setAllotment({allotment:res.allotment}))
            dispatch(subschemesActions.setDivisionName({division_name:res.sub_scheme[0].div_name}))
            dispatch(subschemesActions.setExpenditure({expenditure:res.expenditure}))
            dispatch(subschemesActions.setSanction({sanction:res.sanction}))
            dispatch(subschemesActions.setFinAddBtn({finAddBtn:res.sub_scheme[0].fin_add_btn_flag}))
            dispatch(subschemesActions.setVerifiedStatusSS({verified_status_ss:res.sub_scheme[0].verified_status}))
            dispatch(subschemesActions.setSubmittedStatusSS({submitted_status_ss:res.sub_scheme[0].submitted_status}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const aorgetSubSchemesHeaderReport = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}subscheme_header/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: false})) 
            dispatch(subschemesActions.setSubSchemeName({subschemename: res.sub_scheme[0].name})) 
            dispatch(subschemesActions.setSubSchemeCode({subschemecode: res.sub_scheme[0].subscheme_code}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:res.sub_scheme[0].state_name}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:res.sub_scheme[0].center_name}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:res.sub_scheme[0].center_code}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:res.sub_scheme[0].state_code}))
            dispatch(subschemesActions.setDemandNo({demand_no:res.sub_scheme[0].demand_no}))
            dispatch(subschemesActions.setDepartmentName({department_name:res.sub_scheme[0].dept_name}))
            dispatch(subschemesActions.setAllotment({allotment:res.allotment}))
            dispatch(subschemesActions.setDivisionName({division_name:res.sub_scheme[0].div_name}))
            dispatch(subschemesActions.setExpenditure({expenditure:res.expenditure}))
            dispatch(subschemesActions.setSanction({sanction:res.sanction}))
            dispatch(subschemesActions.setFinAddBtn({finAddBtn:res.sub_scheme[0].aor_fin_add_btn_flag}))
            dispatch(subschemesActions.setVerifiedStatusSS({verified_status_ss:res.sub_scheme[0].aor_verified_status}))
            dispatch(subschemesActions.setSubmittedStatusSS({submitted_status_ss:res.sub_scheme[0].aor_submitted_status}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const getSubSchemesHeaderReportVerifier = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}verification/subscheme_header/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: false})) 
            dispatch(subschemesActions.setSubSchemeName({subschemename: res.sub_scheme[0].name})) 
            dispatch(subschemesActions.setSubSchemeCode({subschemecode: res.sub_scheme[0].subscheme_code}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:res.sub_scheme[0].state_name}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:res.sub_scheme[0].center_name}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:res.sub_scheme[0].center_code}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:res.sub_scheme[0].state_code}))
            dispatch(subschemesActions.setDemandNo({demand_no:res.sub_scheme[0].demand_no}))
            dispatch(subschemesActions.setDepartmentName({department_name:res.sub_scheme[0].dept_name}))
            dispatch(subschemesActions.setAllotment({allotment:res.allotment}))
            dispatch(subschemesActions.setDivisionName({division_name:res.sub_scheme[0].div_name}))
            dispatch(subschemesActions.setExpenditure({expenditure:res.expenditure}))
            dispatch(subschemesActions.setSanction({sanction:res.sanction}))
            dispatch(subschemesActions.setFinAddBtn({finAddBtn:res.sub_scheme[0].fin_add_btn_flag}))
            dispatch(subschemesActions.setVerifiedStatusSS({verified_status_ss:res.sub_scheme[0].verified_status}))
            dispatch(subschemesActions.setSubmittedStatusSS({submitted_status_ss:res.sub_scheme[0].submitted_status}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const aorgetSubSchemesHeaderReportVerifier = (id) => {
  
    return (dispatch) => {
        fetch(`${laravel_api}aor_verification/subscheme_header/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            
            dispatch(outlayActions.setUpdateOutlay({updateOutlay: false})) 
            dispatch(subschemesActions.setSubSchemeName({subschemename: res.sub_scheme[0].name})) 
            dispatch(subschemesActions.setSubSchemeCode({subschemecode: res.sub_scheme[0].subscheme_code}))
            dispatch(schemesActions.setSchemeStateName({schemeStateName:res.sub_scheme[0].state_name}))
            dispatch(schemesActions.setSchemeCenterName({schemeCenterName:res.sub_scheme[0].center_name}))
            dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:res.sub_scheme[0].center_code}))
            dispatch(schemesActions.setSchemeStateCode({schemeStateCode:res.sub_scheme[0].state_code}))
            dispatch(subschemesActions.setDemandNo({demand_no:res.sub_scheme[0].demand_no}))
            dispatch(subschemesActions.setDepartmentName({department_name:res.sub_scheme[0].dept_name}))
            dispatch(subschemesActions.setAllotment({allotment:res.allotment}))
            dispatch(subschemesActions.setDivisionName({division_name:res.sub_scheme[0].div_name}))
            dispatch(subschemesActions.setExpenditure({expenditure:res.expenditure}))
            dispatch(subschemesActions.setSanction({sanction:res.sanction}))
            dispatch(subschemesActions.setFinAddBtn({finAddBtn:res.sub_scheme[0].aor_fin_add_btn_flag}))
            dispatch(subschemesActions.setVerifiedStatusSS({verified_status_ss:res.sub_scheme[0].aor_verified_status}))
            dispatch(subschemesActions.setSubmittedStatusSS({submitted_status_ss:res.sub_scheme[0].aor_submitted_status}))
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const updateSubSchemeData = (id,SubSchemeName,SubSchemeCode) => {
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/edit/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:SubSchemeName,
            subscheme_code:parseInt(SubSchemeCode),
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: true}))
            dispatch(subschemesActions.setEditNotificationSuccess({editNotificationSuccess:true}))            
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const migupdateSubSchemeData = (id,SubSchemeName,SubSchemeCode) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme/edit/${id}`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:SubSchemeName,
            subscheme_code:parseInt(SubSchemeCode),
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: true}))
            dispatch(subschemesActions.setEditNotificationSuccess({editNotificationSuccess:true}))            
          } else {
            dispatch(errorActions.setError({error:true}))
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
        })
    };
  };

  export const deleteSubSchemeData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}subscheme/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(subschemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:true})) 
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };

  export const migdeleteSubSchemeData = (id) => {
    return (dispatch) => {
        fetch(`${laravel_api}mig_subscheme/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            dispatch(subschemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:true})) 
            dispatch(subschemesActions.setUpateSubScheme({updateSubScheme: true}))   
          } else {
            dispatch(errorActions.setError({error:true}))
             
          }
        }).catch((err) => {
          dispatch(errorActions.setError({error:true}))
            
        })
    };
  };
