import React, {useState, useEffect} from 'react'
import {getDepartmentsData} from '../store/departments-action';
import {getDivisionsData} from '../store/divisions-action';
import { 
  searchSchemesStateName,
  searchSchemesCenterName,
  searchSchemesStateCode,
  searchSchemesCenterCode
} from '../store/schemes-action';
import {schemesActions} from '../store/schemesSlice';
import {subschemesActions} from '../store/subschemesSlice';
import {divisionsActions} from '../store/divisionsSlice';
import {outcomesActions} from '../store/outcomeSlice';
import {searchSubSchemesName,searchSubSchemesCode} from '../store/subschemes-actions';
import {storeOutcomeData} from '../store/outcome-actions';
import { useSelector, useDispatch } from 'react-redux';

function CreateOutcome() {
  const dispatch = useDispatch();

  const departments = useSelector((state) => state.departments.departments);
  const divisions = useSelector((state) => state.divisions.divisions);
  const searchScheme = useSelector((state) => state.schemes.schemeSearch);
  const searchSubScheme = useSelector((state) => state.subschemes.subschemeSearch);

  const schemeStateName = useSelector((state) => state.schemes.schemeStateName);
  const schemeCenterName = useSelector((state) => state.schemes.schemeCenterName); 
  const schemeStateCode = useSelector((state) => state.schemes.schemeStateCode); 
  const schemeCenterCode = useSelector((state) => state.schemes.schemeCenterCode);   
  const schemeSearchMessage = useSelector((state) => state.schemes.searchMessage);
  const subschemename = useSelector((state) => state.subschemes.subschemename);
  const subschemecode = useSelector((state) => state.subschemes.subschemecode);
  const subschemesearchmessage = useSelector((state) => state.subschemes.searchMessage);
  const outcomemessage = useSelector((state) => state.outcomes.message);
  const outcomename = useSelector((state) => state.outcomes.outcomeName);
  
  const [departmentId, setDepartmentId] = useState('')
  const [divisionId, setDivisionId] = useState('')
  const [schemeSearchType, setSchemeSearchType] = useState('statename')
  const [subschemeSearchType, setSubSchemeSearchType] = useState('name')
  const [schemeSearchResult, setSchemeSearchResult] = useState({})
  const [subSchemeSearchResult, setSubSchemeSearchResult] = useState({})
  

    useEffect(() => {
      dispatch(getDepartmentsData());
      return () => {
        setDepartmentId('')
        setDivisionId('')
        setSchemeSearchType('statename')
        setSchemeSearchResult({})
        setSubSchemeSearchType('name')
        setSubSchemeSearchResult({})
        dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
        dispatch(subschemesActions.setSubSchemeName({subschemename:''}))
        dispatch(subschemesActions.setSubSchemeCode({subschemecode:''}))
        dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch:[]}))
        dispatch(schemesActions.setSchemeStateName({schemeStateName:''}))
        dispatch(schemesActions.setSchemeCenterName({schemeCenterName:''}))
        dispatch(schemesActions.setSchemeStateCode({schemeStateCode:''}))
        dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:''}))
        dispatch(schemesActions.setSchemeSearch({schemeSearch:[]}))
        dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
        dispatch(divisionsActions.setDivisions({divisions:[]}))
        dispatch(outcomesActions.setMessage({message:''}))
        dispatch(outcomesActions.setOutcomeName({outcomeName:''}))
      }
    }, []);

    useEffect(() => {
      if(departmentId !== ''){
      dispatch(getDivisionsData(departmentId))}
    }, [departmentId]);

  const handleDepartmentChange = (event) => {
    dispatch(outcomesActions.setMessage({message:''}))
    setDepartmentId(event.target.value)
  }

  const handleDivisionChange = (event) => {
    dispatch(outcomesActions.setMessage({message:''}))
    setDivisionId(event.target.value)
  }

  const onSubmitOutcome = () => {
    if(divisionId === '') {
      return dispatch(outcomesActions.setMessage({message:'No Division Selected'}))}
    
    if(Object.keys(schemeSearchResult).length === 0) {
      return dispatch(outcomesActions.setMessage({message:'No Scheme Selected'}))}

      if(Object.keys(subSchemeSearchResult).length === 0) {
        return dispatch(outcomesActions.setMessage({message:'No Sub Scheme Selected'}))}
    
    if(outcomename === '') {
      return dispatch(outcomesActions.setMessage({message:'Please Enter Outcome Name'}))}
    
    dispatch(storeOutcomeData(departmentId,divisionId,schemeSearchResult.id,subSchemeSearchResult.id,outcomename))
  }

  const handleOutcomeNameChange = (event) => {
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(outcomesActions.setOutcomeName({outcomeName:event.target.value}))

  }

  const handleSearchSubSchemeName = (event) => {
    if(divisionId === ''){
      dispatch(subschemesActions.setSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    if(Object.keys(schemeSearchResult).length === 0) {
      return dispatch(subschemesActions.setSearchMessage({searchMessage:'No Scheme Selected'}))}
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
    dispatch(subschemesActions.setSubSchemeName({subschemename:event.target.value}))
    {(event.target.value === '') ? dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []}))  : null}
    {(event.target.value !== '') ? dispatch(searchSubSchemesName(event.target.value,schemeSearchResult.id)) : null}
  } 

  const handleSearchSubSchemeCode = (event) => {
    if(divisionId === ''){
      dispatch(subschemesActions.setSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    if(Object.keys(schemeSearchResult).length === 0) {
      return dispatch(subschemesActions.setSearchMessage({searchMessage:'No Scheme Selected'}))}
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
    dispatch(subschemesActions.setSubSchemeCode({subschemecode:event.target.value}))
    {(event.target.value === '') ? dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []}))  : null}
    {(event.target.value !== '') ? dispatch(searchSubSchemesCode(event.target.value,schemeSearchResult.id)) : null}
  } 

  const handleSearchSchemeStateName = (event) => {
    if(divisionId === ''){
      dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeStateName({schemeStateName:event.target.value}))
    {(event.target.value === '') ? dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))  : null}
    {(event.target.value !== '') ? dispatch(searchSchemesStateName(event.target.value,divisionId)) : null}
  } 

  const handleSearchSchemeCenterName = (event) => {
    if(divisionId === ''){
      dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeCenterName({schemeCenterName:event.target.value}))
    {(event.target.value === '') ? dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))  : null}
    {(event.target.value !== '') ? dispatch(searchSchemesCenterName(event.target.value,divisionId)) : null}
  }

  const handleSearchSchemeStateCode = (event) => {
    if(divisionId === ''){
      dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeStateCode({schemeStateCode:event.target.value}))
    {(event.target.value === '') ? dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))  : null}
    {(event.target.value !== '') ? dispatch(searchSchemesStateCode(event.target.value,divisionId)) : null}
    
  }

  const handleSearchSchemeCenterCode = (event) => {
    if(divisionId === ''){
      dispatch(schemesActions.setSchemeSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    dispatch(outcomesActions.setMessage({message:''}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode:event.target.value}))
    {(event.target.value === '') ? dispatch(schemesActions.setSchemeSearch({schemeSearch: []}))  : null}
    {(event.target.value !== '') ? dispatch(searchSchemesCenterCode(event.target.value,divisionId)) : null}
    
  }

  const handleSearchSubSchemeNameClick = (subscheme) => {
    setSubSchemeSearchResult(subscheme)
    dispatch(subschemesActions.setSubSchemeName({subschemename:subscheme.name}))
    dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
    dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
    
  }

  const handleSearchSubSchemeCodeClick = (subscheme) => {
    setSubSchemeSearchResult(subscheme)
    dispatch(subschemesActions.setSubSchemeName({subschemename:subscheme.name}))
    dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
    dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
    setSubSchemeSearchType('name')
    
  }

  const handleSearchSchemeStateNameClick = (scheme) => {
    setSchemeSearchResult(scheme)
    dispatch(schemesActions.setSchemeStateName({schemeStateName:scheme.state_name}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
    
  }

  const handleSearchSchemeCenterNameClick = (scheme) => {
    setSchemeSearchResult(scheme)
    dispatch(schemesActions.setSchemeCenterName({schemeCenterName:scheme.center_name}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
   
  }

  const handleSearchSchemeStateCodeClick = (scheme) => {
    setSchemeSearchResult(scheme)
    dispatch(schemesActions.setSchemeStateName({schemeStateName:scheme.state_name}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
    setSchemeSearchType('statename')
    
  }

  const handleSearchSchemeCenterCodeClick = (scheme) => {
    setSchemeSearchResult(scheme)
    dispatch(schemesActions.setSchemeCenterName({schemeCenterName:scheme.center_name}))
    dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
    dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
    setSchemeSearchType('centername')
    
  }

  const handleSearchType = (type) => {
    setSchemeSearchType(type)
  }

  const handleSubSchemeSearchType = (type) => {
    setSubSchemeSearchType(type)
  }

  return (
      <div className='center'>
      <h1 className='b'>Create Outcome for Sub Scheme</h1>
      <div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="department_name" className="f6 b db mb2">Select Department Name</label>
    <select id="department_name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDepartmentChange}>
    <option value='default'>Select the department</option>
    {departments.map(department => {return <option key={department.id} value={department.id}>{department.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
<div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="name" className="f6 b db mb2">Select Division Name</label>
    <select id="name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDivisionChange}>
    <option value='default'>Select the division</option>
    {divisions.map(division => {return <option key={division.id} value={division.id}>{division.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
<div className='f6 ml4 b'>Search Scheme By:</div>
<div className="pa4 lh-copy flex flex-wrap justify-around">
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2" onClick={() => {handleSearchType('statename')}}>State Name </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2" onClick={() => {handleSearchType('centername')}}>Center Name </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2" onClick={() => {handleSearchType('statecode')}}>State Code </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2" onClick={() => {handleSearchType('centercode')}}>Center Code </p>
</div>

{(schemeSearchType === 'statename')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By State Name</label>
<input type="text" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" placeholder="Type to search..." onChange={handleSearchSchemeStateName} value={schemeStateName}/>
<div className='overflow-visible pointer bg-transparent br2 w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1 bb b--black-50 b--dashed' onClick={() => handleSearchSchemeStateNameClick(scheme)}>{scheme.state_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'centername')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Center Name</label>
<input type="text" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" placeholder="Type to search..." onChange={handleSearchSchemeCenterName} value={schemeCenterName}/>
<div className='overflow-visible pointer bg-transparent br2 w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1 bb b--black-50 b--dashed' onClick={() => handleSearchSchemeCenterNameClick(scheme)}>{scheme.center_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'statecode')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By State Code</label>
<input type="text" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" placeholder="Type to search..." onChange={handleSearchSchemeStateCode} value={schemeStateCode}/>
<div className='overflow-visible pointer bg-transparent br2 w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1 bb b--black-50 b--dashed' onClick={() => handleSearchSchemeStateCodeClick(scheme)}>{scheme.state_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'centercode')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Center Code</label>
<input type="text" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" placeholder="Type to search..." onChange={handleSearchSchemeCenterCode} value={schemeCenterCode}/>
<div className='overflow-visible pointer bg-transparent br2 w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1 bb b--black-50 b--dashed' onClick={() => handleSearchSchemeCenterCodeClick(scheme)}>{scheme.center_name}</p>})}
</div>
</div>):null}
{(schemeSearchMessage !== "") && <div className="flex items-center justify-center pa2 ml4 bg-light-red w-60 navy br2 shadow-2">
  <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span className="lh-title ml3 black">{schemeSearchMessage}</span>
</div>}
<div className='f6 ml4 b'>Search Sub-Scheme By:</div>
<div className="pa4 lh-copy flex flex-wrap justify-around">
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2" onClick={() => {handleSubSchemeSearchType('name')}}>Name </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2 br2 shadow-2" onClick={() => {handleSubSchemeSearchType('code')}}>Code</p>
</div>
{(subschemeSearchType === 'name')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Sub-Scheme Name</label>
<input type="text" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" placeholder="Type to search..." onChange={handleSearchSubSchemeName} value={subschemename}/>
<div className='overflow-visible pointer bg-transparent br2 w-100'>
    {searchSubScheme && searchSubScheme.map(subscheme => {return <p className='b mt1 bb b--black-50 b--dashed' onClick={() => handleSearchSubSchemeNameClick(subscheme)}>{subscheme.name}</p>})}
</div>
</div>):null}
{(subschemeSearchType === 'code')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Sub-Scheme Code</label>
<input type="text" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" placeholder="Type to search..." onChange={handleSearchSubSchemeCode} value={subschemecode}/>
<div className='overflow-visible pointer bg-transparent br2 w-100'>
    {searchSubScheme && searchSubScheme.map(subscheme => {return <p className='b mt1 bb b--black-50 b--dashed' onClick={() => handleSearchSubSchemeCodeClick(subscheme)}>{subscheme.name}</p>})}
</div>
</div>):null}
{(subschemesearchmessage !== "") && <div className="flex items-center justify-center pa2 ml4 bg-light-red w-60 navy br2 shadow-2">
  <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span className="lh-title ml3 black">{subschemesearchmessage}</span>
</div>}
<div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2">Please Enter Outcome Name</label>
    <input id="name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" onChange={handleOutcomeNameChange} value={outcomename}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    {(outcomemessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outcomemessage}</p>}
  <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer shadow-3" onClick={onSubmitOutcome}>Create Outcome</p>
</div>
      </div>
  )
}

export default CreateOutcome