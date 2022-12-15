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
import {outputsActions} from '../store/outputSlice';
import {outputindicatorActions} from '../store/outputindicatorSlice';
import {outputtargetActions} from '../store/outputtargetSlice';
import {searchSubSchemesName,searchSubSchemesCode} from '../store/subschemes-actions';
import {getSearchOutputData} from '../store/output-actions';
import {storeOutputTargetData} from '../store/outputtarget-actions';
import {getOutputIndicatorsData} from '../store/outputindicator-actions';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

function CreateOutputTarget() {
  const dispatch = useDispatch();

  const departments = useSelector((state) => state.departments.departments);
  const divisions = useSelector((state) => state.divisions.divisions);
  const searchScheme = useSelector((state) => state.schemes.schemeSearch);
  const searchSubScheme = useSelector((state) => state.subschemes.subschemeSearch);
  const outputsearch = useSelector((state) => state.outputs.searchOutput);

  const schemeStateName = useSelector((state) => state.schemes.schemeStateName);
  const schemeCenterName = useSelector((state) => state.schemes.schemeCenterName); 
  const schemeStateCode = useSelector((state) => state.schemes.schemeStateCode); 
  const schemeCenterCode = useSelector((state) => state.schemes.schemeCenterCode);   
  const schemeSearchMessage = useSelector((state) => state.schemes.searchMessage);
  const subschemename = useSelector((state) => state.subschemes.subschemename);
  const subschemecode = useSelector((state) => state.subschemes.subschemecode);
  const subschemesearchmessage = useSelector((state) => state.subschemes.searchMessage);
  const outputsearchmessage = useSelector((state) => state.outputs.searchMessage);
  const outputindicatorsearch = useSelector((state) => state.outputindicator.searchOutputIndicator);
  const outputtargetvalue = useSelector((state) => state.targets.value);
  const outputtargetyear = useSelector((state) => state.targets.year);
  const outputindicatorsearchmessage = useSelector((state) => state.outputindicator.searchMessage);
  const outputtargetmessage = useSelector((state) => state.targets.message);
  const outputtargetmeasurement = useSelector((state) => state.targets.measurement);
  
  const [departmentId, setDepartmentId] = useState('')
  const [divisionId, setDivisionId] = useState('')
  const [outputId, setOutputId] = useState('')
  const [outputindicatorId, setOutputindicatorId] = useState('')
  const [schemeSearchType, setSchemeSearchType] = useState('statename')
  const [subschemeSearchType, setSubSchemeSearchType] = useState('name')
  const [schemeSearchResult, setSchemeSearchResult] = useState({})
  const [subSchemeSearchResult, setSubSchemeSearchResult] = useState({})
  const [value,setValue] = useState(new Date)
  
  

    useEffect(() => {
      dispatch(getDepartmentsData());
      return () => {
        setDepartmentId('')
        setDivisionId('')
        setOutputId('')
        setOutputindicatorId('')
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
        dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))
        dispatch(outputsActions.setOutputSearch({searchOutput:[]}))
        dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator:[]}))
        dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:''}))
        dispatch(outputtargetActions.setOutputTargetValue({value:''}))
        dispatch(outputtargetActions.setTargetYear({year:''}))
        dispatch(outputtargetActions.setTargetMeasurement({measurement:''}))
        dispatch(outputtargetActions.setMessage({message:''}))
      }
    }, []);

    useEffect(() => {
      if(departmentId !== ''){
      dispatch(getDivisionsData(departmentId))}
    }, [departmentId]);

    useEffect(() => {
        if(Object.keys(subSchemeSearchResult).length !== 0){
        dispatch(getSearchOutputData(subSchemeSearchResult.id))}
      }, [subSchemeSearchResult]);

      useEffect(() => {
        if(outputId !== ''){
        dispatch(getOutputIndicatorsData(outputId))}
      }, [outputId]);

  const handleDepartmentChange = (event) => {
    dispatch(outputtargetActions.setMessage({message:''}))
    setDepartmentId(event.target.value)
  }

  const handleDivisionChange = (event) => {
    dispatch(outputtargetActions.setMessage({message:''}))
    setDivisionId(event.target.value)
  }

  const handleOutputChange = (event) => {
    dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))
    dispatch(outputtargetActions.setMessage({message:''})) 
    setOutputId(event.target.value)
  }

  const handleOutputIndicatorChange = (event) => {
    dispatch(outputtargetActions.setMessage({message:''})) 
    dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:''})) 
    setOutputindicatorId(event.target.value)
  }

  const onSubmitOutputTarget = () => {
    if(divisionId === '') {
      return dispatch(outputtargetActions.setMessage({message:'No Division Selected'}))}
    
    if(Object.keys(schemeSearchResult).length === 0) {
      return dispatch(outputtargetActions.setMessage({message:'No Scheme Selected'}))}

      if(Object.keys(subSchemeSearchResult).length === 0) {
        return dispatch(outputtargetActions.setMessage({message:'No Sub Scheme Selected'}))}

     if(outputId === '') {
      return dispatch(outputtargetActions.setMessage({message:'No Output Selected'}))}
    
    if(outputindicatorId === '') {
      return dispatch(outputtargetActions.setMessage({message:'No Output Indicator Selected'}))}

    if(outputtargetvalue === '') {
      return dispatch(outputtargetActions.setMessage({message:'Target value can not be empty'}))}

    if(outputtargetyear === '') {
      return dispatch(outputtargetActions.setMessage({message:'Please select the year for the target'}))}
    
    if(outputtargetmeasurement === '') {
      return dispatch(outputtargetActions.setMessage({message:'Please select a unit of measurement for the target'}))}

    dispatch(storeOutputTargetData(departmentId,divisionId,schemeSearchResult.id,subSchemeSearchResult.id,outputId,outputindicatorId,outputtargetvalue,outputtargetyear,outputtargetmeasurement))
  }

  const handleOutputTargetValueChange = (event) => {
    dispatch(outputtargetActions.setMessage({message:''}))
    dispatch(outputtargetActions.setOutputTargetValue({value:event.target.value}))
  }

  const handleOutputTargetYearChange = (year) => {
    dispatch(outputtargetActions.setMessage({message:''}))
    setValue(year)
    dispatch(outputtargetActions.setTargetYear({year:year.getFullYear()}))
  }

  const handleOutputTargetMeasurementChange = (event) => {
    dispatch(outputtargetActions.setMessage({message:''}))
    dispatch(outputtargetActions.setTargetMeasurement({measurement:event.target.value}))
  }

  const handleSearchSubSchemeName = (event) => {
    if(divisionId === ''){
      dispatch(subschemesActions.setSearchMessage({searchMessage:'Please select the division'}))
      return
    }
    if(Object.keys(schemeSearchResult).length === 0) {
      return dispatch(subschemesActions.setSearchMessage({searchMessage:'No Scheme Selected'}))}
    dispatch(outputtargetActions.setMessage({message:''}))
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
    dispatch(outputtargetActions.setMessage({message:''}))
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
    dispatch(outputtargetActions.setMessage({message:''}))
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
    dispatch(outputtargetActions.setMessage({message:''}))
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
    dispatch(outputtargetActions.setMessage({message:''}))
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
    dispatch(outputtargetActions.setMessage({message:''}))
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
      <h1 className='b'>Create Output Indicator Target</h1>
      <div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="department_name" className="f6 b db mb2">Select Department Name</label>
    <select id="department_name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDepartmentChange}>
    <option value='default'>Select the department</option>
    {departments.map(department => {return <option key={department.id} value={department.id}>{department.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
<div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="name" className="f6 b db mb2">Select Division Name</label>
    <select id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDivisionChange}>
    <option value='default'>Select the division</option>
    {divisions.map(division => {return <option key={division.id} value={division.id}>{division.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
<div className='f6 ml4 b'>Search Scheme By:</div>
<div className="pa4 lh-copy flex flex-wrap justify-around">
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2" onClick={() => {handleSearchType('statename')}}>State Name </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2" onClick={() => {handleSearchType('centername')}}>Center Name </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2" onClick={() => {handleSearchType('statecode')}}>State Code </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2" onClick={() => {handleSearchType('centercode')}}>Center Code </p>
</div>

{(schemeSearchType === 'statename')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By State Name</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-100" placeholder="Type to search..." onChange={handleSearchSchemeStateName} value={schemeStateName}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeStateNameClick(scheme)}>{scheme.state_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'centername')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Center Name</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-100" placeholder="Type to search..." onChange={handleSearchSchemeCenterName} value={schemeCenterName}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeCenterNameClick(scheme)}>{scheme.center_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'statecode')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By State Code</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-100" placeholder="Type to search..." onChange={handleSearchSchemeStateCode} value={schemeStateCode}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeStateCodeClick(scheme)}>{scheme.state_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'centercode')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Center Code</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-100" placeholder="Type to search..." onChange={handleSearchSchemeCenterCode} value={schemeCenterCode}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeCenterCodeClick(scheme)}>{scheme.center_name}</p>})}
</div>
</div>):null}
{(schemeSearchMessage !== "") && <div className="flex items-center justify-center pa2 ml4 bg-light-red w-60 navy">
  <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span className="lh-title ml3">{schemeSearchMessage}</span>
</div>}
<div className='f6 ml4 b'>Search Sub-Scheme By:</div>
<div className="pa4 lh-copy flex flex-wrap justify-around">
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2" onClick={() => {handleSubSchemeSearchType('name')}}>Name </p>
  <p className="f6 fw6 db black link dim pointer ba b--dark-green pa2" onClick={() => {handleSubSchemeSearchType('code')}}>Code</p>
</div>
{(subschemeSearchType === 'name')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Sub-Scheme Name</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-100" placeholder="Type to search..." onChange={handleSearchSubSchemeName} value={subschemename}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchSubScheme && searchSubScheme.map(subscheme => {return <p className='b mt1' onClick={() => handleSearchSubSchemeNameClick(subscheme)}>{subscheme.name}</p>})}
</div>
</div>):null}
{(subschemeSearchType === 'code')?(<div className="pa4 black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Sub-Scheme Code</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-100" placeholder="Type to search..." onChange={handleSearchSubSchemeCode} value={subschemecode}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchSubScheme && searchSubScheme.map(subscheme => {return <p className='b mt1' onClick={() => handleSearchSubSchemeCodeClick(subscheme)}>{subscheme.name}</p>})}
</div>
</div>):null}
{(subschemesearchmessage !== "") && <div className="flex items-center justify-center pa2 ml4 bg-light-red w-60 navy">
  <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span className="lh-title ml3">{subschemesearchmessage}</span>
</div>}
<div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="department_name" className="f6 b db mb2">Select Output</label>
    <select id="department_name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleOutputChange}>
    <option value='default'>Select the output</option>
    {outputsearch.map(output => {return <option key={output.id} value={output.id}>{output.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
  {(outputsearchmessage !== "") && <div className="flex items-center justify-center pa2 ml4 bg-light-red w-60 navy">
  <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span className="lh-title ml3">{outputsearchmessage}</span>
</div>}
</div>
<div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="department_name" className="f6 b db mb2">Select Output Indicator</label>
    <select id="department_name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleOutputIndicatorChange}>
    <option value='default'>Select the output indicator</option>
    {outputindicatorsearch.map(outputindicator => {return <option key={outputindicator.id} value={outputindicator.id}>{outputindicator.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
  {(outputindicatorsearchmessage !== "") && <div className="flex items-center justify-center pa2 ml4 bg-light-red w-60 navy">
  <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span className="lh-title ml3">{outputindicatorsearchmessage}</span>
</div>}
</div>
<div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2">Please Enter Output Indicator Target Value</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutputTargetValueChange} value={outputtargetvalue}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Please Enter Output Indicator Target Measurement Unit</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutputTargetMeasurementChange} value={outputtargetmeasurement}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Please Enter Output Indicator Target Year</label>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          views={['year']}
          label="Year"
          value={value}
          onChange={(newValue) => {
            handleOutputTargetYearChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
    {(outputtargetmessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outputtargetmessage}</p>}
  <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitOutputTarget}>Create Output Indicator Target</p>
</div>
      </div>
  )
}

export default CreateOutputTarget