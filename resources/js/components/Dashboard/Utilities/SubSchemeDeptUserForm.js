import * as React from 'react';
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useSelector, useDispatch } from 'react-redux';
import {migrationActions} from '../../store/migrationSlice';
import {getSocialData} from '../../store/social-actions';
import {getGenderData} from '../../store/gender-actions';
import {socialActions} from '../../store/socialSlice';
import {genderActions} from '../../store/genderSlice';
import {getSdgsubschemeData} from '../../store/sdgsubscheme-actions';

const style3 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: '65%',
  bgcolor: '#fff',
  border: '0px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  overflow: 'auto',
  p: 4,
};

export default function SubSchemeForm() {

    const dispatch = useDispatch();

    const subSchemeName = useSelector((state) => state.migration.subSchemeName);
    const subSchemeCode = useSelector((state) => state.migration.subSchemeCode);
    const subSchemeGender = useSelector((state) => state.migration.subSchemeGender);
    const subSchemeSocial = useSelector((state) => state.migration.subSchemeSocial);
    const subSchemeSDG = useSelector((state) => state.migration.subSchemeSDG);
    const subSchemeStateShare = useSelector((state) => state.migration.subSchemeStateShare);
    const subSchemeCenterShare = useSelector((state) => state.migration.subSchemeCenterShare);
    const sdgsubscheme = useSelector((state) => state.sdgsubscheme.sdgsubscheme);
    const social = useSelector((state) => state.social.social);
    const gender = useSelector((state) => state.gender.gender);
    const updateriskremarks = useSelector((state) => state.migration.riskremarks);
    const subschemes = useSelector((state) => state.migration.subschemes);
    const entrymessageriskremarks = useSelector((state) => state.migration.entrymessageriskremarks);
    const updateRemarkSuccess = useSelector((state) => state.migration.updateRemarkSuccess);

    useEffect(() => {
      if(social.length === 0){
        dispatch(getSocialData())
      }
      if(gender.length === 0){
        dispatch(getGenderData())
      }
      if(sdgsubscheme.length === 0){
        dispatch(getSdgsubschemeData())
      }
      
    }, []);

    useEffect(() => {
        if(subSchemeCode){
          const a = subschemes.filter(b => b.subscheme_code === subSchemeCode)
          dispatch(migrationActions.setSubSchemeName({subSchemeName:a[0].name}))
          dispatch(migrationActions.setSubSchemeStateShare({subSchemeStateShare:a[0].state_share}))
          dispatch(migrationActions.setSubSchemeCenterShare({subSchemeCenterShare:a[0].center_share}))
        }
        
      }, [subSchemeCode]);

    useEffect(() => {
        if(subSchemeName){
          const a = subschemes.filter(b => b.name === subSchemeName)
          dispatch(migrationActions.setSubSchemeCode({subSchemeCode:a[0].subscheme_code}))
          dispatch(migrationActions.setSubSchemeStateShare({subSchemeStateShare:a[0].state_share}))
          dispatch(migrationActions.setSubSchemeCenterShare({subSchemeCenterShare:a[0].center_share}))
        }
        
      }, [subSchemeName]);

    const handleSubSchemeNameChange = (event) => {
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSubSchemeName({subSchemeName:event.target.value}))
      }
    
      const handleSubSchemeCodeChange = (event) => {
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSubSchemeCode({subSchemeCode:event.target.value}))
      }

      const handleSubSchemeStateShareChange = (event) => {
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSubSchemeStateShare({subSchemeStateShare:event.target.value}))
      }
    
      const handleSubSchemeCenterShareChange = (event) => {
        dispatch(migrationActions.setMessage({message:''}))
        dispatch(migrationActions.setSubSchemeCenterShare({subSchemeCenterShare:event.target.value}))
      }

      const handleChangeSocial = (g) => {
        const id = parseFloat(g)
        let newSocial = social.map(s => ({...s}))
        newSocial = newSocial.map(s => {if(s.id === id){s.selected = !s.selected} return s})
        if(id === 1){
          newSocial = newSocial.map(s => {if(s.id !== 1){s.selected = false} return s})
        }
        if(id !== 1){
          newSocial = newSocial.map(s => {if(s.id === 1){s.selected = false} return s})
        }
        dispatch(socialActions.setSocial({social: newSocial}))
        dispatch(migrationActions.setMessage({message:''}))
      };

      const handleChangeGender = (id) => {
        let newGender = gender.map(g => ({...g}))
        newGender = newGender.map(g => {if(g.id === id){g.selected = !g.selected} return g})
        if(id === 1){
          newGender = newGender.map(s => {if(s.id !== 1){s.selected = false} return s})
        }
        if(id !== 1){
          newGender = newGender.map(s => {if(s.id === 1){s.selected = false} return s})
        }
        
        dispatch(genderActions.setGender({gender: newGender})) 
        dispatch(migrationActions.setMessage({message:''})) 
      };

      const handleSDGChange = (event) => {
        const a = event.target.value.split('-')
        if(a[0] && a[1]){
        dispatch(migrationActions.setSubSchemeSDG({subSchemeSDG:a[0]}))
        dispatch(migrationActions.setMessage({message:''}))
        }
      };

      const handleSdgDisplay = () => {
        if(subSchemeSDG !== ''){
          const a = sdgsubscheme.filter(s => s.goal_number === parseInt(subSchemeSDG))
          return `${a[0].goal_number}-${a[0].goal_name}`
        }

        return 'default'
      }

      const [open19, setOpen19] = React.useState(false);
      const [riskremarksedit, setRiskRemarksEdit] = useState('')

    const handleOpen19 = () => {
      setOpen19(true)
      setRiskRemarksEdit(updateriskremarks)
    };

    const handleClose19 = () => {
      dispatch(migrationActions.setRiskRemarksEntryMessage({entrymessageriskremarks:''}))
      setOpen19(false)
    };

    const handleRiskRemarksChange = (event) => {
      dispatch(migrationActions.setRiskRemarksEntryMessage({entrymessageriskremarks:''}))
      setRiskRemarksEdit(event.target.value)}

    const onSubmitRemarks = (id) => {
      let a = riskremarksedit
      if(riskremarksedit.length >= 2000){
        dispatch(migrationActions.setRiskRemarksEntryMessage({entrymessageriskremarks: 'Maximum characters allowed is 2000'}))
        return
      }
      if(riskremarksedit.length === 0){
        a = '-'
      }
      dispatch(migrationActions.setRiskRemarks({riskremarks:a}))
      setRiskRemarksEdit('')
      handleClose19();
    }

  return (
    <React.Fragment>
      <Modal
        open={open19}
        onClose={handleClose19}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style3}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Risk/Remarks</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='center tc'>
          <textarea id="riskremarks" 
          className='ba b--black'
          name="riskremarks" 
          rows="15" 
          cols="90" 
          value={riskremarksedit} 
          onChange={handleRiskRemarksChange}
          />  
          <p className="f6 ph3 pv2 mb2 mt2 black w-40 tc pointer b nunito">{`Characters Remaining: ${((2000 - riskremarksedit.length) > 0) ? (2000 - riskremarksedit.length) : '2000 characters count exceeded'}`}</p>
          {(entrymessageriskremarks !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessageriskremarks}</p>}
          <p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer center" onClick={() => onSubmitRemarks()}>Save</p>    
          </div>
          </Typography>
        </Box>
      </Modal>
      <Typography variant="h6" gutterBottom>
        Sub-Scheme Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <TextField
            required
            id="subSchemeCode"
            name="subSchemeCode"
            label="Sub-Scheme Code"
            type="number"
            fullWidth
            autoComplete="subSchemeCode"
            variant="standard"
            value={subSchemeCode}
            onChange={handleSubSchemeCodeChange}
          /> */}
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Sub Scheme Code</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={subSchemeCode}
            onChange={handleSubSchemeCodeChange}
            autoWidth
            label="subschemecode"
            >
            {subschemes && subschemes.map(subscheme => {
                <MenuItem value={subscheme.subscheme_code}>{subscheme.subscheme_code}</MenuItem>
            })}
            </Select>
        </FormControl>   
        </Grid>
        <Grid item xs={12}>
          {/* <TextField
            id="subSchemeName"
            name="subSchemeName"
            label="Sub-Scheme Name"
            fullWidth
            autoComplete="subSchemeName"
            variant="standard"
            value={subSchemeName}
            onChange={handleSubSchemeNameChange}
          /> */}
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Sub Scheme Name</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={subSchemeName}
            onChange={handleSubSchemeNameChange}
            autoWidth
            label="subschemename"
            >
            {subschemes && subschemes.map(subscheme => {
                <MenuItem value={subscheme.name}>{subscheme.name}</MenuItem>
            })}
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="subSchemeStateShare"
            name="subSchemeStateShare"
            label="State Share (Rs. in Lakhs)"
            type="number"
            fullWidth
            autoComplete="subSchemeStateShare"
            variant="standard"
            value={subSchemeStateShare}
            // onChange={handleSubSchemeStateShareChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="subSchemeCenterShare"
            name="subSchemeCenterShare"
            label="Center Share (Rs. in Lakhs)"
            type="number"
            fullWidth
            variant="standard"
            value={subSchemeCenterShare}
            // onChange={handleSubSchemeCenterShareChange}
          />
        </Grid>
        <Grid item xs={12}>
        <FormLabel component="legend">Select Social Category</FormLabel>
        <FormGroup row>
        {social && social.map(social => {
          return <FormControlLabel control={<Checkbox checked={social.selected}
          onChange={() => handleChangeSocial(social.id)}
          />} label={`${social.name.toUpperCase()}`} />
        })
        }
        </FormGroup>
        </Grid>
        <Grid item xs={12}>
        <FormLabel component="legend">Select Gender Category</FormLabel>
        <FormGroup row>
        {gender && gender.map(gender => {
          return <FormControlLabel control={<Checkbox checked={gender.selected}
          onChange={() => handleChangeGender(gender.id)}
          />} label={`${gender.name.toUpperCase()}`} />
        })
        }
        </FormGroup>
        </Grid>
        <Grid item xs={12}>
        <FormLabel component="legend">Select SDG</FormLabel>
          <select id="department_name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1 mt2" type="text" aria-describedby="name-desc" onChange={handleSDGChange} value={handleSdgDisplay()}>
          <option value='default'>Select the SDG Goal</option>
          {sdgsubscheme.map(sdgsubscheme => {return <option key={sdgsubscheme.id} value={`${sdgsubscheme.goal_number}-${sdgsubscheme.goal_name}`}>{`${sdgsubscheme.goal_number}-${sdgsubscheme.goal_name}`}</option>})}
          </select>
          </Grid>
          <Grid item xs={12}>
        <FormLabel component="legend">Risk Remarks</FormLabel>
        <div className="overflow-auto h6">
  <p className='ba b b--black f5 w-80-ns w-90 pa3 center overflow-auto h5'>{updateriskremarks ? updateriskremarks.split('\n').map(function(item) {
  return (
    <span>
      {item}
      <br/>
    </span>
  )
}): '-'}</p>
  <p className="pv3 pr3 b--black-80 tc"><span className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={handleOpen19}>Update</span></p>
  </div>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}