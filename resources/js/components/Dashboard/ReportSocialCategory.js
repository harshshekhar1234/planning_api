import React, {useState, useEffect} from 'react'
import {getSubschemesCategoryData} from '../store/reportCategory-actions';
import {getGenderData} from '../store/gender-actions';
import {getSocialData} from '../store/social-actions';
import {getSdgsubschemeData} from '../store/sdgsubscheme-actions';
import {getDepartmentsData} from '../store/departments-action';
import {getDivisionsData} from '../store/divisions-action';
import {divisionsActions} from '../store/divisionsSlice';
import { reportCategoryActions } from '../store/reportCategorySlice';
import { genderActions } from '../store/genderSlice';
import { socialActions } from '../store/socialSlice';
import { sdgsubschemeActions } from '../store/sdgsubschemeSlice';
import { FinancialReportBudgetChart } from './Utilities/FinancialReportBudgetChart';
import { PieChart } from './Utilities/FinancialReportBudgetFilterPie';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MuiInput from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';

const ReportSocialCategory = () => {

    const dispatch = useDispatch();

    const subschemes = useSelector((state) => state.reportcategory.subschemes);
    const genderList = useSelector((state) => state.gender.gender);
    const socialList = useSelector((state) => state.social.social);
    const sdgList = useSelector((state) => state.sdgsubscheme.sdgsubscheme);
    const departments = useSelector((state) => state.departments.departments);
    const divisions = useSelector((state) => state.divisions.divisions);

    const [filteredsubschemes, setFilteredSubschemes] = useState([])
    const [paginatedResult, setPaginatedResult] = useState([])
    const [gender, setGender] = useState([])
    const [social, setSocial] = useState([])
    const [sdg, setSdg] = useState('defaultsdg')
    const [outlay, setOutlay] = useState([0,4500])
    const [outlayMax, setOutlayMax] = useState(4500)
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(35);
    const [total, setTotal] = useState(0)
    const [filtered, setFiltered] = useState(0)
    const [allocation, setAllocation] = useState(0)
    const [sanction, setSanction] = useState(0)
    const [expenditure, setExpenditure] = useState(0)
    const [departmentId, setDepartmentId] = useState('default')
    const [divisionId, setDivisionId] = useState('default')
    const [statescheme, setStateScheme] = React.useState('');
    const [inputStateValue, setInputStateValue] = React.useState('');
    const [optionsState, setOptionsState] = React.useState([]);
    const [centerscheme, setCenterScheme] = React.useState('');
    const [inputCenterValue, setInputCenterValue] = React.useState('');
    const [optionsCenter, setOptionsCenter] = React.useState([]);

    useEffect(() => {
        dispatch(getSubschemesCategoryData());
        dispatch(getGenderData());
        dispatch(getSocialData());
        dispatch(getSdgsubschemeData());
        dispatch(getDepartmentsData());
        return () => {
            setGender([])
            setSocial([])
            setSdg('defaultsdg')
            setOutlay([0,4500])
            setPage(1)
            // dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
            dispatch(genderActions.setGender({gender: []})) 
            dispatch(socialActions.setSocial({social: []}))
        }
      }, []);

      useEffect(() => {
        let filtered = [...subschemes]
        if(departmentId !== 'default'){
          filtered = filtered.filter(subscheme => subscheme.department_id === parseFloat(departmentId))
        }
        if(divisionId !== 'default'){
          filtered = filtered.filter(subscheme => subscheme.division_id === parseFloat(divisionId))
        }
        if(statescheme){
          const center = filtered.filter(subscheme => `${subscheme.stateCode}-${subscheme.stateName}` === statescheme)
          const optionCenter = center.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsCenter([...new Set(optionCenter),''])
        }
        if(!statescheme){
          const optionCenter = filtered.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsCenter([...new Set(optionCenter),''])
        }
          
      }, [statescheme,inputStateValue]);

      useEffect(() => {
        let filtered = [...subschemes]
        if(departmentId !== 'default'){
          filtered = filtered.filter(subscheme => subscheme.department_id === parseFloat(departmentId))
        }
        if(divisionId !== 'default'){
          filtered = filtered.filter(subscheme => subscheme.division_id === parseFloat(divisionId))
        }
        if(centerscheme){
          const state = filtered.filter(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}` === centerscheme)
          const optionState = state.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          setOptionsState([...new Set(optionState),''])
        }
        if(!centerscheme){
          const optionState = filtered.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          setOptionsState([...new Set(optionState),''])
        }
          
      }, [centerscheme,inputCenterValue]);

      useEffect(() => {
        setStateScheme('')
        setInputStateValue('')
        setCenterScheme('')
        setInputCenterValue('')
        if(departmentId !== 'default'){
        dispatch(getDivisionsData(departmentId))
          const center = subschemes.filter(subscheme => subscheme.department_id === parseFloat(departmentId))
          const optionCenter = center.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsCenter([...new Set(optionCenter),''])
          const optionState = center.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          setOptionsState([...new Set(optionState),''])
        }
        if(departmentId === 'default'){
          dispatch(divisionsActions.setDivisions({divisions: []}))
          const optionCenter = subschemes.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsCenter([...new Set(optionCenter),''])
          const optionState = subschemes.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          setOptionsState([...new Set(optionState),''])
        }
      }, [departmentId]);

      useEffect(() => {
        setStateScheme('')
        setInputStateValue('')
        setCenterScheme('')
        setInputCenterValue('')
        if(divisionId !== 'default'){
          const center = subschemes.filter(subscheme => subscheme.division_id === parseFloat(divisionId))
          const optionCenter = center.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsCenter([...new Set(optionCenter),''])
          const optionState = center.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          setOptionsState([...new Set(optionState),''])
        }
        if(divisionId === 'default'){
          const optionCenter = subschemes.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsCenter([...new Set(optionCenter),''])
          const optionState = subschemes.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          setOptionsState([...new Set(optionState),''])
        }
      }, [divisionId]);

      const handleDepartmentChange = (event) => {
        setDepartmentId(event.target.value)
        setDivisionId('default')
      }
    
      const handleDivisionChange = (event) => {
        setDivisionId(event.target.value)
      }

      useEffect(() => {
        
        if(subschemes.length !== 0){
          let maxBudgetFilter = Math.max(...subschemes.map(subscheme => (parseFloat(subscheme.CenterShare) + parseFloat(subscheme.StateShare))/100));
          const indexOfLastItem = page * 10;
          const indexOfFirstItem = indexOfLastItem - 10;
          const currentItem = subschemes.slice(indexOfFirstItem,indexOfLastItem);
          const f = Math.ceil(subschemes.length/10)
          const totalCalc = subschemes.map(s => {
            return ((parseFloat(s.CenterShare) + parseFloat(s.StateShare))/100)
          })
          const j = totalCalc.reduce((t,h) => t+h)
          const optionState = subschemes.map(subscheme => `${subscheme.stateCode}-${subscheme.stateName}`)
          const optionCenter = subschemes.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
          setOptionsState([...new Set(optionState),''])
          setOptionsCenter([...new Set(optionCenter),''])
          setTotal(j.toFixed(2))
          setFiltered(j.toFixed(2))
          setPageCount(f)
          setPaginatedResult(currentItem)
          setOutlayMax(maxBudgetFilter)
          setOutlay([0,maxBudgetFilter])
        }
        
      }, [subschemes]);

      useEffect(() => {
        if(filteredsubschemes.length !== 0){
          const indexOfLastItem = page * 10;
          const indexOfFirstItem = indexOfLastItem - 10;
          const currentItem = filteredsubschemes.slice(indexOfFirstItem,indexOfLastItem);
          const f = Math.ceil(filteredsubschemes.length/10)
          setPageCount(f)
          setPaginatedResult(currentItem)
        }
        if(filteredsubschemes.length === 0){
          setPageCount(1)
          setPaginatedResult(filteredsubschemes)
        }

      }, [page,filteredsubschemes]);

      useEffect(() => {
        let tempSubSchemes = [...subschemes]
        if(departmentId !== 'default'){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
          return subscheme.department_id === parseInt(departmentId)})
        }
        if(divisionId !== 'default'){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
          return subscheme.division_id === parseInt(divisionId)})
        }
        if(statescheme){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
          return `${subscheme.stateCode}-${subscheme.stateName}` === statescheme})
        }
        if(centerscheme){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
          return `${subscheme.Centercode}-${subscheme.CenterName}` === centerscheme})
        }
        if(social.length !== 0){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
            const s = subscheme.social.map(j => j.socialId)
            const k = social.slice().sort();
            return s.length === k.length && s.slice().sort().every(function(value, index) {
              return value === k[index];
            });
        })}
        if(gender.length !== 0){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
            const g = subscheme.gender.map(j => j.genderId)
            const d = gender.slice().sort();
            return g.length === d.length && g.slice().sort().every(function(value, index) {
              return value === d[index];
            });
        })}
        if(sdg !== 'defaultsdg'){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
            return subscheme.sdgId === parseInt(sdg)
        })}
        if(outlay[0] !== 0){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
            return ((parseFloat(subscheme.CenterShare) + parseFloat(subscheme.StateShare))/100).toFixed(2) >= outlay[0]
        })}
        if(outlay[1] !== outlayMax){
          tempSubSchemes = tempSubSchemes.filter(subscheme => {
            return ((parseFloat(subscheme.CenterShare) + parseFloat(subscheme.StateShare))/100).toFixed(2) <= outlay[1]
        })}
          if(tempSubSchemes.length !== 0){
            const totalCalc = tempSubSchemes.map(s => {
              return ((parseFloat(s.CenterShare) + parseFloat(s.StateShare))/100)
            })
            
            const allCalc = tempSubSchemes.map(s => s.allotment/100)
            const sancCalc = tempSubSchemes.map(s => s.sanction/100)
            const expCalc = tempSubSchemes.map(s => s.expenditure/100)
            const j = totalCalc.reduce((t,h) => t+h)
            const a = allCalc.reduce((t,a) => t + a)
            const s = sancCalc.reduce((t,s) => t + s)
            const e = expCalc.reduce((t,e) => t + e)
            setFiltered(j.toFixed(2))
            setAllocation(parseFloat(a).toFixed(2))
            setSanction(parseFloat(s).toFixed(2))
            setExpenditure(parseFloat(e).toFixed(2))
          }
          if(tempSubSchemes.length === 0){
            setFiltered(0)
            setAllocation(0)
            setSanction(0)
            setExpenditure(0)
          }
          setFilteredSubschemes(tempSubSchemes)
          setPage(1)
      }, [social,gender,sdg,outlay,departmentId,divisionId,statescheme,centerscheme]);

      const handleChangeSocial = (id) => {
        let newSocial = socialList.map(s => ({...s}))
        let socialSelect = []
        newSocial = newSocial.map(s => {if(s.id === id){s.selected = !s.selected} return s})
        const h = newSocial.map(s => {if(s.selected){socialSelect.push(s.id)}})
        dispatch(socialActions.setSocial({social: newSocial}))
        setSocial(socialSelect)
      };

      const handlePageChange = (event, value) => {
        setPage(value);
      };

      const Input = styled(MuiInput)`
        width: 75px;
      `;

      const handleChangeGender = (id) => {
        let newGender = genderList.map(g => ({...g}))
        let genderSelect = []
        newGender = newGender.map(g => {if(g.id === id){g.selected = !g.selected} return g})
        const h = newGender.map(g => {if(g.selected){genderSelect.push(g.id)}})
        dispatch(genderActions.setGender({gender: newGender})) 
        setGender(genderSelect)
      };

      const handleSDGChange = (event) => {
        setSdg(event.target.value)
      }

      const handleBudgetChange = (event, newValue) => {
        setOutlay(newValue);
      };

      const handleInput1Change = (event) => {
        setOutlay([parseFloat(event.target.value),outlay[1]]);
      };

      const handleInput2Change = (event) => {
        setOutlay([outlay[0],parseFloat(event.target.value)]);
      };

      const handleBlur = () => {
        if (outlay[0] < 0) {
          setOutlay([0,outlay[1]]);
        } else if (outlay[0] > outlay[1]) {
          setOutlay([0,outlay[1]]);
        }
        if (outlay[1] > outlayMax) {
          setOutlay([outlay[0],outlayMax]);
        } else if (outlay[1] < outlay[0]) {
          setOutlay([0,outlayMax]);
        }
      };

      function valuetext(outlay) {
        return `Rs ${outlay}(Cr)`;
      }

      const marks = [
        {
          value: 0,
          label: 'Rs 0(Cr)',
        },
        {
          value: outlayMax,
          label: `Rs ${outlayMax}(Cr)`,
        }
      ];

      const socialcategory = (socialArray) => {
        const social = socialArray.map(social => social['socialName'])
        return social.toString();
      }

      const gendercategory = (genderArray) => {
       const gender = genderArray.map(gender => gender['genderName'])
       return gender.toString();
     }

     if(subschemes.length === 0){
      return <div>
      <Box sx={{ width: '100%' }}>
       <LinearProgress />
      </Box>
      <h2 className='tc mt2 b'>Loading...</h2>
      </div>
    }

  return (
    <>
    <h2 className='b tc f2'>Financial Reports (FY:- 2022-23)</h2>
    <div className='flex flex-wrap justify-around'>
    <div className='mt2 w-30'>
    <PieChart total={total} filtered={filtered}/>
    </div>
    <div className='mt2 w-30'>
    <FinancialReportBudgetChart filtered={filtered} allocation={allocation} sanction={sanction} expenditure={expenditure}/>
    </div>
    </div>
    <div className='flex flex-wrap justify-around'>
    <div className="pa4 black-80">
  <div className="w-100 selectMenu">
    <label htmlFor="department_name" className="f6 b db mb2">Select Department Name</label>
    <select id="department_name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDepartmentChange}>
    <option value='default'>All</option>
    {departments.map(department => {return <option key={department.id} value={department.id}>{department.name}</option>})}
    </select>
  </div>
</div>
<div className="pa4 black-80">
  <div className="w-100 selectMenu">
    <label htmlFor="name" className="f6 b db mb2">Select Division Name</label>
    <select id="name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDivisionChange}>
    <option value='default'>All</option>
    {divisions.map(division => {return <option key={division.id} value={division.id}>{division.name}</option>})}
    </select>
  </div>
</div>
</div>
    <div className='flex flex-wrap'>
    
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Social Category</FormLabel>
    <FormGroup row>
      {socialList && socialList.map(social => {
        return <FormControlLabel control={<Checkbox checked={social.selected}
        onChange={() => handleChangeSocial(social.id)}
        />} label={`${social.name.toUpperCase()}`} />
      })
      }
    </FormGroup>
    </FormControl>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Gender Category</FormLabel>
    <FormGroup row>
      {genderList && genderList.map(gender => {
        return <FormControlLabel control={<Checkbox checked={gender.selected}
        onChange={() => handleChangeGender(gender.id)}
         />} label={`${gender.name.toUpperCase()}`} />
      })
      }
    </FormGroup>
    </FormControl>
{/* <div className="pa4 black-80 w-30">
  <div className="measure">
    <label htmlFor="sdg" className="f6 b db mb2">Select SDG</label>
    <select id="sdg" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'defaultsdg'} onChange={handleSDGChange}>
    <option value='defaultsdg'>Select SDG</option>
    {sdgList && sdgList.map(sdg => {return <option key={sdg.id} value={sdg.id}>{sdg.goal_name}</option>})}
    </select>
  </div>
</div> */}
</div>
<div className='flex flex-wrap justify-around pa2'>
<Autocomplete
      disablePortal
      id="state-scheme-search"
      value={statescheme}
      onChange={(event, newValue) => {
        setStateScheme(newValue);
      }}
      inputValue={inputStateValue}
      onInputChange={(event, newInputValue) => {
        setInputStateValue(newInputValue);
      }}
      options={optionsState}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="Select State Scheme" />}
    />
  <Autocomplete
      disablePortal
      id="center-scheme-search"
      value={centerscheme}
      onChange={(event, newValue) => {
        setCenterScheme(newValue);
      }}
      inputValue={inputCenterValue}
      onInputChange={(event, newInputValue) => {
        setInputCenterValue(newInputValue);
      }}
      options={optionsCenter}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="Select Center Scheme" />}
    />
    </div>
<div className="pa4 w-40 center">
<label htmlFor="budget" className="f6 b db mb2 tc ml2">Select Budget Estimate(Rs in Cr)</label>
<Box sx={{ width: 600 }}>
<Grid container spacing={6} alignItems="center">
<Grid item>
          <Input
            value={outlay[0]}
            size="medium"
            onChange={handleInput1Change}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: outlayMax,
              type: 'number',
              'aria-labelledby': 'Budget Estimate range',
            }}
          />
        </Grid>
<Grid item xs={6}>
      <Slider
        getAriaLabel={() => 'Budget Estimate range'}
        value={outlay}
        min={0}
        max={outlayMax}
        onChange={handleBudgetChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />
      </Grid>
      <Grid item>
          <Input
            value={outlay[1]}
            size="large"
            onChange={handleInput2Change}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: outlayMax,
              type: 'number',
              'aria-labelledby': 'Budget Estimate range',
            }}
          />
        </Grid>
 </Grid>
    </Box>
    </div>
    
    <div className="pa2">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc b">State Scheme</th>
          <th className="b--black-80 tc b">Center Scheme</th>
          <th className=" b--black-80 tc b">Name of the Sub-Scheme</th>
          <th className=" b--black-80 tc b">Department Name</th>
          <th className=" b--black-80 tc b">Division Name</th>
          <th className=" b--black-80 tc b">Budget Estimate(Rs in Cr)</th>
          <th className=" b--black-80 tc b">Social Category</th>
          <th className=" b--black-80 tc b">Gender Category</th>
          <th className=" b--black-80 tc b">SDG Goal</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        {
            (paginatedResult.length !== 0) && (paginatedResult.map((subscheme,i) => {
                return <tr key={i}>
                <td className="pv3 pr3 tc b--black-80">{`${subscheme.stateCode}-${subscheme.stateName}`}</td>
                <td className="pv3 pr3 tc b--black-80">{`${subscheme.Centercode}-${subscheme.CenterName}`}</td>
                <td className="pv3 pr3 tc b--black-80">{`${subscheme.subscheme_code}-${subscheme.name}`}</td>
                <td className="pv3 pr3 tc b--black-80">{subscheme.deptName}</td>
                <td className="pv3 pr3 tc b--black-80">{subscheme.divName}</td>
                <td className="pv3 pr3 tc b--black-80">{((parseFloat(subscheme.CenterShare) + parseFloat(subscheme.StateShare))/100).toFixed(2)}</td>
                <td className="pv3 pr3 tc b--black-80">{socialcategory(subscheme.social)}</td>
                <td className="pv3 pr3 tc b--black-80">{gendercategory(subscheme.gender)}</td>
                <td className="pv3 pr3 tc b--black-80">{`${subscheme.sdgGoalNumber}-${subscheme.sdgGoalName}`}</td>
              </tr>
            }))
        }
      </tbody>
    </table>
    {(paginatedResult.length === 0) && <p className='b f3 tc mt3'>No result found</p>}
    <div className='flex justify-center mt3'>
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={handlePageChange} />
    </Stack>
    </div>
  </div>
</div>
    </>
  )
}

export default ReportSocialCategory