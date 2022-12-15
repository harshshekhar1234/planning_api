import React, {useState, useEffect} from 'react'
import {getDepartmentData} from '../store/department-action';
import {getDivisionData} from '../store/divisions-action';
import {achievementActions} from '../store/achievementSlice';
import {getAchievementFillData,getAchievementsOutputData,storeOutputAchievementData} from '../store/achievement-actions';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Accordion from './Utilities/Accordion';


function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }
  
  const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);
  
    const handleMouseEnter = () => {
      const isCurrentlyOverflown = isOverflown(cellValue.current);
      setShowPopper(isCurrentlyOverflown);
      setAnchorEl(cellDiv.current);
      setShowFullCell(true);
    };
  
    const handleMouseLeave = () => {
      setShowFullCell(false);
    };
  
    React.useEffect(() => {
      if (!showFullCell) {
        return undefined;
      }
  
      function handleKeyDown(nativeEvent) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          setShowFullCell(false);
        }
      }
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [setShowFullCell, showFullCell]);
  
    return (
      <Box
        ref={wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignItems: 'center',
          lineHeight: '24px',
          width: 1,
          height: 1,
          position: 'relative',
          display: 'flex',
        }}
      >
        <Box
          ref={cellDiv}
          sx={{
            height: 1,
            width,
            display: 'block',
            position: 'absolute',
            top: 0,
          }}
        />
        <Box
          ref={cellValue}
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {value}
        </Box>
        {showPopper && (
          <Popper
            open={showFullCell && anchorEl !== null}
            anchorEl={anchorEl}
            style={{ width, marginLeft: -17 }}
          >
            <Paper
              elevation={1}
              style={{ minHeight: wrapper.current.offsetHeight - 3 }}
            >
              <Typography variant="body2" style={{ padding: 8 }}>
                {value}
              </Typography>
            </Paper>
          </Popper>
        )}
      </Box>
    );
  });
  
  GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };
  
  function renderCellExpand(params) {
    return (
      <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
    );
  }
  
  renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.string.isRequired,
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#cccd85',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };
  
function AchievementEntryForm() {
    const dispatch = useDispatch();
    let params = useParams();

    const [open, setOpen] = React.useState(false);
    const [indicator,setIndicator] = useState({});
    const handleOpen = (indicator) => {
      setOpen(true)
      setIndicator(indicator)
    };
    const handleClose = () => {
      setOpen(false)
      setIndicator({})
    };
    
    const departmentid = useSelector((state) => state.department.departmentId);
    const divisionid = useSelector((state) => state.divisions.divisionId);
    const division = useSelector((state) => state.divisions.division);
    const department = useSelector((state) => state.department.name);
    const result = useSelector((state) => state.achievements.result);
    const message = useSelector((state) => state.achievements.message);
    const achievements = useSelector((state) => state.achievements.achievements);
    const entrymessage = useSelector((state) => state.achievements.entrymessage);
    const value = useSelector((state) => state.achievements.value);
    const time = useSelector((state) => state.achievements.time);
    const update = useSelector((state) => state.achievements.update);
    
    

    useEffect(() => {
        dispatch(getDepartmentData(departmentid));
        dispatch(getDivisionData(divisionid));
        dispatch(getAchievementFillData(params.id));
        dispatch(getAchievementsOutputData(params.id));
        return () => {
          dispatch(achievementActions.setEntryMessage({entrymessage:''}))
          dispatch(achievementActions.setValue({value: ''}))
          dispatch(achievementActions.setTime({time: ''}))
          dispatch(achievementActions.setAchievements({achievements: []}))  
          dispatch(achievementActions.setUpdate({update: false})) 
          dispatch(achievementActions.setMessage({message:''}))
          dispatch(achievementActions.setResult({result: []})) 
        }
        }, []);

        useEffect(() => {
          dispatch(getAchievementsOutputData(params.id));
          }, [update]);

    const handleAchievementValueChange = (event) => {
      dispatch(achievementActions.setEntryMessage({entrymessage:''}))
      dispatch(achievementActions.setValue({value: event.target.value}))
    }

    const handleAchievementTimeChange = (event) => {
      dispatch(achievementActions.setEntryMessage({entrymessage:''}))
      dispatch(achievementActions.setTime({time: event.target.value}))
    }

    const onSubmitAchievement = (departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId) => {
      if(value === ''){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a value'}))
        return
      }
      if(time === ''){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a date'}))
        return
      }
      handleClose();
      dispatch(storeOutputAchievementData(departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId,value,time));
    }

  return (<>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Achievement</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleAchievementValueChange} value={value}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Achievement Time</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="date" aria-describedby="name-desc" onChange={handleAchievementTimeChange} value={time}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    {(entrymessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40 nunito">{entrymessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitAchievement(indicator.department_id,indicator.division_id,indicator.scheme_id,indicator.subscheme_id,indicator.output_id,indicator.id)}>Save</p>
</div>
          </Typography>
        </Box>
      </Modal>
    <h1>{department}</h1>
    <h2>{division}</h2>
    {result && result.map(result => {
      return (
      <div key={result.id} className='container'>
      <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h4 className="accordion-header" id={`heading${result.id}`}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${result.id}`} aria-expanded="true" aria-controls={`collapse${result.id}`}>
          <p>{`Output:- ${result.name.toUpperCase()}`}</p>
        </button>
      </h4>
      <div id={`collapse${result.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${result.id}`} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <div className='b'>
            {result.outputindicators && result.outputindicators.map((indicator) => {
              let achlists = achievements.filter(achievement => achievement.outputindicator_id === indicator.id);
              return (
              <div>
              <h5 key={indicator.id}>{`Output Indicator:- ${indicator.name.toUpperCase()}`}</h5>
              {indicator.target_outputs && <p>{`Target: ${indicator.target_outputs[0].value} ${indicator.target_outputs[0].measurement}`}</p>}
              {indicator.target_outputs && <p>{`Target Year: ${indicator.target_outputs[0].year}`}</p>}
              {
              achlists && achlists.map(achlist => <p>{`Achievement as on: ${achlist.time} = ${achlist.value}`}</p>)}
<p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => handleOpen(indicator)}>Add Achievement</p>
              </div>
              )
            })} 
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>)
    }
      )}
    <h3>{message}</h3>
    </>
  )
}

export default AchievementEntryForm