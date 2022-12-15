import React, {useState, useEffect} from 'react'
import {getDepartmentData} from '../store/department-action';
import {getDivisionData} from '../store/divisions-action';
import {getOutlayData,storeFinancialData,getFinancialData,updateFinancialData} from '../store/outlay-actions';
import {achievementActions} from '../store/achievementSlice';
import {outlayActions} from '../store/outlaySlice';
import {schemesActions} from '../store/schemesSlice';
import {subschemesActions} from '../store/subschemesSlice';
import {getSubSchemesHeaderReport} from '../store/subschemes-actions';
import {getLatestQuater} from '../store/departmentMaker-actions';
import {departmentMakerActions} from '../store/departmentMakerSlice';
import {
  getAchievementFillData,
  getAchievementsOutputData,
  storeOutputAchievementData,
  getAchievementsOutcomeData,
  storeOutcomeAchievementData,
  getRiskRemarksData,
  storeRiskRemarksData,
  updateOutputAchievementData,
  updateOutcomeAchievementData
} from '../store/achievement-actions';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Accordion from './Utilities/Accordion';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { red } from '@mui/material/colors';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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
    bgcolor: '#fff',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    height: '85%',
    bgcolor: '#fff',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    overflow: 'auto',
    p: 4,
  };

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

  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: '85%',
    bgcolor: '#fff',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    overflow: 'auto',
    p: 4,
  };
  
function AchievementEntryForm() {
    const dispatch = useDispatch();
    let params = useParams();
    let navigate = useNavigate();

    
    
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
    const valueEdit = useSelector((state) => state.achievements.valueEdit);
    const timeEdit = useSelector((state) => state.achievements.timeEdit);
    const entrymessageedit = useSelector((state) => state.achievements.entrymessageedit);
    const valueoutcomeEdit = useSelector((state) => state.achievements.valueoutcomeEdit);
    const timeoutcomeEdit = useSelector((state) => state.achievements.timeoutcomeEdit);
    const entrymessageeditoutcome = useSelector((state) => state.achievements.entrymessageeditoutcome);
    const update = useSelector((state) => state.achievements.update);
    const achievementsoutcome = useSelector((state) => state.achievements.achievementsoutcome);
    const entrymessageoutcome = useSelector((state) => state.achievements.entrymessageoutcome);
    const valueoutcome = useSelector((state) => state.achievements.valueoutcome);
    const timeoutcome = useSelector((state) => state.achievements.timeoutcome);
    const updateoutcome = useSelector((state) => state.achievements.updateoutcome);
    const updateriskremarks = useSelector((state) => state.achievements.riskremarks);
    const entrymessageriskremarks = useSelector((state) => state.achievements.entrymessageriskremarks);
    const updateRemarkSuccess = useSelector((state) => state.achievements.updateRemarkSuccess);
    const updateRemarkFailure = useSelector((state) => state.achievements.updateRemarkFailure);
    const outputAchSuccess = useSelector((state) => state.achievements.outputAchSuccess);
    const outcomeAchSuccess = useSelector((state) => state.achievements.outcomeAchSuccess);
    const outputAchFailure = useSelector((state) => state.achievements.outputAchFailure);
    const outcomeAchFailure = useSelector((state) => state.achievements.outcomeAchFailure);
    const outputAchEditSuccess = useSelector((state) => state.achievements.outputAchEditSuccess);
    const outputAchEditFailure = useSelector((state) => state.achievements.outputAchEditFailure);
    const outcomeAchEditSuccess = useSelector((state) => state.achievements.outcomeAchEditSuccess);
    const outcomeAchEditFailure = useSelector((state) => state.achievements.outcomeAchEditFailure);
    const updateoutputedit = useSelector((state) => state.achievements.updateoutputedit);
    const updateoutcomeedit = useSelector((state) => state.achievements.updateoutcomeedit);
    const addAchievement = useSelector((state) => state.achievements.addAchievement);
    const outlay = useSelector((state) => state.outlay.outlay);
    const sanctionedEdit = useSelector((state) => state.outlay.sanctionedEdit);
    const allotment = useSelector((state) => state.outlay.allotment);
    const sanctioned = useSelector((state) => state.outlay.sanctioned);
    const allotmentEdit = useSelector((state) => state.outlay.allotmentEdit);
    const expenditure = useSelector((state) => state.outlay.expenditure);
    const expenditureEdit = useSelector((state) => state.outlay.expenditureEdit);
    const outlaytimeedit = useSelector((state) => state.outlay.timeEdit);
    const outlaytime = useSelector((state) => state.outlay.time);
    const updateOutlayEdit = useSelector((state) => state.outlay.updateOutlayEdit);
    const updateOutlay = useSelector((state) => state.outlay.updateOutlay);
    const financialDetails = useSelector((state) => state.outlay.financialDetails);
    const entrymessagefinancial = useSelector((state) => state.outlay.entrymessage);
    const entrymessagefinancialedit = useSelector((state) => state.outlay.entrymessageedit);
    const financialentrynotificationsuccess = useSelector((state) => state.outlay.financialentrynotificationsuccess);
    const financialentrynotificationfailure = useSelector((state) => state.outlay.financialentrynotificationfailure);
    const financialentrynotificationsuccessedit = useSelector((state) => state.outlay.financialentrynotificationsuccessedit);
    const financialentrynotificationfailureedit = useSelector((state) => state.outlay.financialentrynotificationfailureedit);
    const subschemename = useSelector((state) => state.subschemes.subschemename);
  const subschemecode = useSelector((state) => state.subschemes.subschemecode);
  const schemeStateName = useSelector((state) => state.schemes.schemeStateName);
  const schemeCenterName = useSelector((state) => state.schemes.schemeCenterName);
  const schemeCenterCode = useSelector((state) => state.schemes.schemeCenterCode);
  const schemeStateCode = useSelector((state) => state.schemes.schemeStateCode);
  const finAddBtn = useSelector((state) => state.subschemes.finAddBtn);
  const verified_status_ss = useSelector((state) => state.subschemes.verified_status_ss);
  const submitted_status_ss = useSelector((state) => state.subschemes.submitted_status_ss);
  const department_name = useSelector((state) => state.subschemes.department_name);
  const division_name = useSelector((state) => state.subschemes.division_name);
  const quaterTs = useSelector((state) => state.maker.quaterTs);

  const [riskremarksedit, setRiskRemarksEdit] = useState('')
  const [openOutputConfirm, setOpenOutputConfirm] = useState(false);
  const [outputConfirmAgree, setOutputConfirmAgree] = useState(false);
  const [openOutputEditConfirm, setOpenOutputEditConfirm] = useState(false);
  const [outputConfirmEditAgree, setOutputConfirmEditAgree] = useState(false);
  const [openOutcomeEditConfirm, setOpenOutcomeEditConfirm] = useState(false);
  const [outcomeConfirmEditAgree, setOutcomeConfirmEditAgree] = useState(false);
  const [openOutcomeConfirm, setOpenOutcomeConfirm] = useState(false);
  const [outcomeConfirmAgree, setOutcomeConfirmAgree] = useState(false)
  const [valueTargetEdit, setValueTargetEdit] = useState('');
  const [valueOutcomeTargetEdit, setValueOutcomeTargetEdit] = useState('');
  const [quaterTD, setquaterTD] = useState('')
  const [yearTD, setyearTD] = useState('2022-23')

  const handleOpenOutputConfirm = () => {
    setOpenOutputConfirm(true);
  };

  const handleOpenOutcomeEditConfirm = () => {
    setOpenOutcomeEditConfirm(true);
  };

  const handleOpenOutputEditConfirm = () => {
    setOpenOutputEditConfirm(true);
  };

  const handleCloseOutputConfirm = () => {
    setOpenOutputConfirm(false);
    handleClose1()
  };

  const handleCloseOutputEditConfirm = () => {
    setOpenOutputEditConfirm(false);
    handleClose8()
  };

  const handleCloseOutcomeEditConfirm = () => {
    setOpenOutcomeEditConfirm(false);
    handleClose9()
  };

  const handleSubmitOutputConfirm = () => {
    setOutputConfirmAgree(true)
  };

  const handleSubmitOutputEditConfirm = () => {
    setOutputConfirmEditAgree(true)
  };

  const handleSubmitOutcomeEditConfirm = () => {
    setOutcomeConfirmEditAgree(true)
  };

  const handleOpenOutcomeConfirm = () => {
    setOpenOutcomeConfirm(true);
  };

  const handleCloseOutcomeConfirm = () => {
    setOpenOutcomeConfirm(false);
    handleClose3()
  };

  const handleSubmitOutcomeConfirm = () => {
    setOutcomeConfirmAgree(true)
  };

  useEffect(() => {
    dispatch(getAchievementsOutputData(params.id));
    }, [updateoutputedit]);

  useEffect(() => {
    dispatch(getAchievementsOutcomeData(params.id));
    }, [updateoutcomeedit]);

  useEffect(() => {
    if(outputConfirmAgree){
      onSubmitAchievement(indicator.department_id,indicator.division_id,indicator.scheme_id,indicator.subscheme_id,indicator.output_id,indicator.id,indicator.target_outputs[0].value)
    }
    }, [outputConfirmAgree]);

useEffect(() => {
    if(updateOutlay){
      dispatch(getSubSchemesHeaderReport(params.id));
    }
    }, [updateOutlay]);

  useEffect(() => {
    if(outcomeConfirmEditAgree){
      onSubmitOutcomeAchievementEdit()
    }
    }, [outcomeConfirmEditAgree]);

  useEffect(() => {
    if(outputConfirmEditAgree){
      onSubmitAchievementEdit()
    }
    }, [outputConfirmEditAgree]);

  useEffect(() => {
    if(outcomeConfirmAgree){
      onSubmitAchievementOutcome(indicatoroutcome.department_id,indicatoroutcome.division_id,indicatoroutcome.scheme_id,indicatoroutcome.subscheme_id,indicatoroutcome.outcome_id,indicatoroutcome.id,indicatoroutcome.target_outcomes[0].value)
    }
    }, [outcomeConfirmAgree]);

    const [open1, setOpen1] = React.useState(false);
    const [indicator,setIndicator] = useState({});
    const [outputAddBtn,setOutputAddBtn] = useState(true);
    const handleOpen1 = (indicator) => {
      setOutputAddBtn(indicator.add_btn_flag)
      setOpen1(true)
      setIndicator(indicator)
      dispatch(achievementActions.setTime({time: new Date().toDateString()}))
    };
    const handleClose1 = () => {
      setOpen1(false)
      setIndicator({})
      dispatch(achievementActions.setEntryMessage({entrymessage:''}))
      dispatch(achievementActions.setValue({value: ''}))
      dispatch(achievementActions.setTime({time: ''}))
    };

    const [open3, setOpen3] = React.useState(false);
    const [indicatoroutcome,setIndicatorOutcome] = useState({});
    const [outcomeAddBtn,setOutcomeAddBtn] = useState(true);
    const handleOpen3 = (indicator) => {
      setOutcomeAddBtn(indicator.add_btn_flag)
      setOpen3(true)
      setIndicatorOutcome(indicator)
      dispatch(achievementActions.setTimeOutcome({timeoutcome: new Date().toDateString()}))
    };
    const handleClose3 = () => {
      setOpen3(false)
      setIndicatorOutcome({})
      dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
      dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))    
      dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
    };

    const [open2, setOpen2] = React.useState(false);
    const [achlists,setAchlists] = useState([]);
    const handleOpen2 = (id,measurement,target) => {
      setValueTargetEdit(target)
      setOpen2(true)
      const achlists = achievements.filter(achievement => achievement.outputindicator_id === id)
      const machlists = achlists.map(achlist => {
        return {...achlist,measurement}
      })
      setAchlists(machlists)
    };

    const handleClose2 = () => {
      setOpen2(false)
      setAchlists([])
    };

    const [open4, setOpen4] = React.useState(false);
    const [achlistsoutcome,setAchlistsOutcome] = useState([]);
    const handleOpen4 = (id,measurement,target) => {
      setValueOutcomeTargetEdit(target)
      setOpen4(true)
      const achlists = achievementsoutcome.filter(achievement => achievement.outcomeindicator_id === id)
      const machlists = achlists.map(achlist => {
        return {...achlist,measurement}
      })
      setAchlistsOutcome(machlists)
    };

    const handleClose4 = () => {
      setOpen4(false)
      setAchlistsOutcome([])
    };

    const [open5, setOpen5] = React.useState(false);
    
    const handleOpen5 = (id) => {
      setOpen5(true)
      dispatch(outlayActions.setOutlayTime({time: new Date().toDateString()}))
      dispatch(getFinancialData(params.id));
    };

    const handleClose5 = () => {
      setOpen5(false)
      dispatch(outlayActions.setSanctioned({sanctioned: ''}))
      dispatch(outlayActions.setAllotment({allotment: ''}))
      dispatch(outlayActions.setExpenditure({expenditure: ''}))
      dispatch(outlayActions.setOutlayTime({time: ''}))
      dispatch(outlayActions.setEntryMessage({entrymessage: ''}))
      dispatch(outlayActions.setFinancialDetails({financialDetails: []}))
    };

    const [open6, setOpen6] = React.useState(false);
    
    const handleOpen6 = () => {
      setOpen6(true)
      dispatch(getFinancialData(params.id));
    };

    const handleClose6 = () => {
      setOpen6(false)
      dispatch(outlayActions.setFinancialDetails({financialDetails: []}))
    };

    const [open7, setOpen7] = React.useState(false);
    const [remarksBtnStatus, setRemarksBtnStatus] = useState(true)

    const handleOpen7 = () => {
      if(submitted_status_ss === 'N' && verified_status_ss === 'N'){
        setRemarksBtnStatus(true)
      }
      if(submitted_status_ss === 'S' && verified_status_ss === 'A'){
        setRemarksBtnStatus(false)
      }
      if(submitted_status_ss === 'S' && verified_status_ss === 'R'){
        setRemarksBtnStatus(true)
      }
      if(submitted_status_ss === 'S' && verified_status_ss === 'T'){
        setRemarksBtnStatus(false)
      }
      if(submitted_status_ss === 'S' && verified_status_ss === 'N'){
        setRemarksBtnStatus(false)
      }
      if(submitted_status_ss === 'N' && verified_status_ss === 'A'){
        setRemarksBtnStatus(false)
      }
      if(submitted_status_ss === 'N' && verified_status_ss === 'R'){
        setRemarksBtnStatus(false)
      }
      if(submitted_status_ss === 'N' && verified_status_ss === 'T'){
        setRemarksBtnStatus(false)
      }
      setOpen7(true)
      setRiskRemarksEdit(updateriskremarks)
    };

    const handleClose7 = () => {
      dispatch(achievementActions.setRiskRemarksEntryMessage({entrymessageriskremarks:''}))
      setOpen7(false)
    };

    const [open10, setOpen10] = React.useState(false);
    const [finEditId, setFinEditId] = useState('');
    const [finEditAllow, setFinEditAllow] = useState(false);

    const handleOpen10 = (id,sanction,allotment,expenditure,time,submit,verified) => {
      if(submit === 'N' && verified === 'N'){
        setFinEditAllow(true)
      }
      if(submit === 'S' && verified === 'A'){
        setFinEditAllow(false)
      }
      if(submit === 'S' && verified === 'R'){
        setFinEditAllow(true)
      }
      if(submit === 'S' && verified === 'T'){
        setFinEditAllow(false)
      }
      if(submit === 'S' && verified === 'N'){
        setFinEditAllow(false)
      }
      if(submit === 'N' && verified === 'A'){
        setFinEditAllow(false)
      }
      if(submit === 'N' && verified === 'R'){
        setFinEditAllow(false)
      }
      if(submit === 'N' && verified === 'T'){
        setFinEditAllow(false)
      }
      setOpen10(true)
      setFinEditId(id)
      dispatch(getFinancialData(params.id));
      dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: sanction}))
      dispatch(outlayActions.setAllotmentEdit({allotmentEdit: allotment}))
      dispatch(outlayActions.setExpenditureEdit({expenditureEdit: expenditure}))
      dispatch(outlayActions.setOutlayTimeEdit({timeEdit: time}))
      handleClose6()
    };

    const handleClose10 = () => {
      dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: ''}))
      dispatch(outlayActions.setAllotmentEdit({allotmentEdit: ''}))
      dispatch(outlayActions.setExpenditureEdit({expenditureEdit: ''}))
      dispatch(outlayActions.setOutlayTimeEdit({timeEdit: ''}))
      dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))
      dispatch(outlayActions.setFinancialDetails({financialDetails: []}))
      setFinEditId('')
      setOpen10(false)
    };

    const [open8, setOpen8] = React.useState(false);
    const [outputAchIdEdit, setOutputAchIdEdit] = useState('')
    const [outputAchEditMeasurement, setOutputAchEditMeasurement] = useState('')
    const [outputAchEditAllow, setOutputAchEditAllow] = useState(false)

    const verifiedstatustodisplay = (verified) => {
      if(verified === 'A'){
        return <Chip label="Approved" color="success" variant="outlined" />
      }
      if(verified === 'R'){
        return <Chip label="Review" color="error" variant="outlined" />
      }
      if(verified === 'T'){
        return <Chip label="Corrected" color="warning" variant="outlined" />
      }
      if(verified === 'N'){
        return <Chip label="Pending" color="primary" variant="outlined" />
      }
    }

    const verifiedStatusBackground = (verified) => {
      if(verified === 'A'){
        return 'approved'
      }
      if(verified === 'R'){
        return 'review'
      }
      if(verified === 'T'){
        return 'corrected'
      }
      if(verified === 'N'){
        return 'pending'
      }
    }

    const [indicatorId, setIndicatorId] = useState('')

    const handleOpen8 = (id,time,value,measurement,submit,verified,indicatorid) => {
      if(submit === 'N' && verified === 'N'){
        setOutputAchEditAllow(true)
      }
      if(submit === 'S' && verified === 'A'){
        setOutputAchEditAllow(false)
      }
      if(submit === 'S' && verified === 'R'){
        setOutputAchEditAllow(true)
      }
      if(submit === 'S' && verified === 'T'){
        setOutputAchEditAllow(false)
      }
      if(submit === 'S' && verified === 'N'){
        setOutputAchEditAllow(false)
      }
      if(submit === 'N' && verified === 'A'){
        setOutputAchEditAllow(false)
      }
      if(submit === 'N' && verified === 'R'){
        setOutputAchEditAllow(false)
      }
      if(submit === 'N' && verified === 'T'){
        setOutputAchEditAllow(false)
      }
      const parts = time.slice(0,10) 
      const indicatorId = parseFloat(indicatorid)
      dispatch(achievementActions.setValueEdit({valueEdit: parseFloat(value)}))
      dispatch(achievementActions.setTimeEdit({timeEdit: parts}))
      setOutputAchIdEdit(id)
      setIndicatorId(indicatorId)
      setOutputAchEditMeasurement(measurement)
      handleClose2()
      setOpen8(true)
    };

    const handleClose8 = () => {
      dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:''}))
      dispatch(achievementActions.setValueEdit({valueEdit: ''}))
      dispatch(achievementActions.setTimeEdit({timeEdit: ''}))
      setOutputAchIdEdit('')
      setValueTargetEdit('')
      setIndicatorId('')
      setOutputAchEditMeasurement('')
      setOpen8(false)
      setOutputAchEditAllow(false)
    };

    const [open9, setOpen9] = React.useState(false);
    const [outcomeAchIdEdit, setOutcomeAchIdEdit] = useState('')
    const [outcomeAchEditMeasurement, setOutcomeAchEditMeasurement] = useState('')
    const [outcomeAchEditAllow, setOutcomeAchEditAllow] = useState(false)

    const handleOpen9 = (id,time,value,measurement,submit,verified,indicatorid) => {
      if(submit === 'N' && verified === 'N'){
        setOutcomeAchEditAllow(true)
      }
      if(submit === 'S' && verified === 'A'){
        setOutcomeAchEditAllow(false)
      }
      if(submit === 'S' && verified === 'R'){
        setOutcomeAchEditAllow(true)
      }
      if(submit === 'S' && verified === 'T'){
        setOutcomeAchEditAllow(false)
      }
      if(submit === 'S' && verified === 'N'){
        setOutcomeAchEditAllow(false)
      }
      if(submit === 'N' && verified === 'A'){
        setOutcomeAchEditAllow(false)
      }
      if(submit === 'N' && verified === 'R'){
        setOutcomeAchEditAllow(false)
      }
      if(submit === 'N' && verified === 'T'){
        setOutcomeAchEditAllow(false)
      }
      const parts = time.slice(0,10) 
      const indicatorId = parseFloat(indicatorid)
      dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit: parseFloat(value)}))
      dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit: parts}))
      setOutcomeAchIdEdit(id)
      setIndicatorId(indicatorId)
      setOutcomeAchEditMeasurement(measurement)
      handleClose4()
      setOpen9(true)
    };

    const handleClose9 = () => {
      dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:''}))
      dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit: ''}))
      dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit: ''}))
      setOutcomeAchIdEdit('')
      setValueOutcomeTargetEdit('')
      setOutcomeAchEditMeasurement('')
      setIndicatorId('')
      setOutcomeAchEditAllow(false)
      setOpen9(false)
    };

    useEffect(() => {
        dispatch(getDepartmentData(departmentid));
        dispatch(getDivisionData(divisionid));
        dispatch(getAchievementFillData(params.id));
        dispatch(getAchievementsOutputData(params.id));
        dispatch(getAchievementsOutcomeData(params.id));
        dispatch(getOutlayData(params.id));
        dispatch(getSubSchemesHeaderReport(params.id));
        dispatch(getRiskRemarksData(params.id));
        dispatch(getLatestQuater(divisionid));
        return () => {
          setRiskRemarksEdit('')
          setquaterTD('')
          setyearTD('2022-23')
          dispatch(departmentMakerActions.setQuaterTs({quaterTs:''}))
          dispatch(achievementActions.setEntryMessage({entrymessage:''}))
          dispatch(achievementActions.setValue({value: ''}))
          dispatch(achievementActions.setTime({time: ''}))
          dispatch(achievementActions.setAchievements({achievements: []}))  
          dispatch(achievementActions.setUpdate({update: false})) 
          dispatch(achievementActions.setOutputUpdateEdit({updateoutputedit: false})) 
          dispatch(achievementActions.setOutcomeUpdateEdit({updateoutcomeedit: false})) 
          dispatch(achievementActions.setUpdateOutcome({updateoutcome:false}))    
          dispatch(achievementActions.setValueOutcome({valueoutcome:''}))  
          dispatch(achievementActions.setTimeOutcome({timeoutcome:''}))    
          dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''})) 
          dispatch(achievementActions.setAchievementsOutcome({achievementsoutcome: []})) 
          dispatch(achievementActions.setMessage({message:''}))
          dispatch(achievementActions.setResult({result: []})) 
          dispatch(achievementActions.setRiskRemarks({riskremarks: ''}))
          dispatch(achievementActions.setOutputAchEditSuccess({outputAchEditSuccess:false}))
          dispatch(achievementActions.setOutputAchEditFailure({outputAchEditFailure:false})) 
          dispatch(achievementActions.setOutcomeAchEditSuccess({outcomeAchEditSuccess:false}))
          dispatch(achievementActions.setOutcomeAchEditFailure({outcomeAchEditFailure:false}))
          dispatch(achievementActions.setUpdateRemarkFailure({updateRemarkFailure:false}))
          dispatch(achievementActions.setUpdateRemarkSuccess({updateRemarkSuccess:false}))
          dispatch(outlayActions.setFinancialEntryNotificationFailure({financialentrynotificationfailure: false}))
          dispatch(outlayActions.setFinancialEntryNotificationFailureEdit({financialentrynotificationfailureedit: false}))
          dispatch(outlayActions.setFinancialEntryNotificationSuccessEdit({financialentrynotificationsuccessedit: false}))
          dispatch(outlayActions.setFinancialEntryNotificationSuccess({financialentrynotificationsuccess: false}))
          dispatch(achievementActions.setOutcomeAchFailure({outcomeAchFailure:false}))
          dispatch(achievementActions.setOutputAchFailure({outputAchFailure:false}))
          dispatch(achievementActions.setOutcomeAchSuccess({outcomeAchSuccess:false}))
          dispatch(achievementActions.setOutputAchSuccess({outputAchSuccess:false}))
          dispatch(outlayActions.setOutlay({outlay: ''}))
          dispatch(outlayActions.setSanctioned({sanctioned: ''}))
          dispatch(outlayActions.setAllotment({allotment: ''}))
          dispatch(outlayActions.setExpenditure({expenditure: ''}))
          dispatch(outlayActions.setOutlayTime({time: ''}))
          dispatch(outlayActions.setFinancialDetails({financialDetails: []}))
          dispatch(outlayActions.setEntryMessage({entrymessage: ''}))
          dispatch(subschemesActions.setSubSchemeName({subschemename: ''}))
          dispatch(subschemesActions.setSubSchemeCode({subschemecode: ''}))
          dispatch(subschemesActions.setDemandNo({demand_no: ''}))
          dispatch(subschemesActions.setDepartmentName({department_name: ''}))
          dispatch(subschemesActions.setDivisionName({division_name: ''}))
          dispatch(schemesActions.setSchemeStateName({schemeStateName: ''}))
          dispatch(schemesActions.setSchemeCenterName({schemeCenterName: ''}))
          dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode: ''}))
          dispatch(schemesActions.setSchemeStateCode({schemeStateCode: ''}))
        }
        }, []);

        useEffect(() => {
          if(quaterTs){
          if(quaterTs === '0'){
            setquaterTD('Quater 1')
            
          }
          if(quaterTs.name === 'quater1'){
            setquaterTD('Quater 2')
            
          }
          if(quaterTs.name === 'quater2'){
            setquaterTD('Quater 3')
            
          }
          if(quaterTs.name === 'quater3'){
            setquaterTD('Quater 4')
            
          }
          if(quaterTs.name === 'quater4'){
            setquaterTD('Quater 1')
            setyearTD('2023-24')
          }
          }
          }, [quaterTs]);

          useEffect(() => {
            if((quaterTD === 'Quater 1') && (yearTD === '2023-24')){
              return navigate(`/dashboarddeptuser/blockentry`);
            }
            }, [quaterTD,yearTD]);

        useEffect(() => {
          dispatch(getAchievementsOutputData(params.id));
          }, [update]);

          useEffect(() => {
            dispatch(getAchievementsOutcomeData(params.id));
            }, [updateoutcome]);

      useEffect(() => {
        if(addAchievement){
          dispatch(getAchievementFillData(params.id));
        }
          }, [addAchievement]);

    const getQuater = (quater) => {
      if(!quater){
        return quaterTD
      }
      if(quater === 'quater1'){
        return 'Quater 1'
      }
      if(quater === 'quater2'){
        return 'Quater 2'
      }
      if(quater === 'quater3'){
        return 'Quater 3'
      }
      if(quater === 'quater4'){
        return 'Quater 4'
      }
    }

    const getYear = (year) => {
      if(!year){
        return yearTD
      }
      return year
    }

    const handleRiskRemarksChange = (event) => {
      dispatch(achievementActions.setRiskRemarksEntryMessage({entrymessageriskremarks:''}))
      setRiskRemarksEdit(event.target.value)}

    const handleSanctionedValueChange = (event) => {
      dispatch(outlayActions.setEntryMessage({entrymessage: ''}))
      dispatch(outlayActions.setSanctioned({sanctioned: event.target.value}))
    }

    const handleSanctionedValueEditChange = (event) => {
      dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))
      dispatch(outlayActions.setSanctionedEdit({sanctionedEdit: event.target.value}))
    }

    const handleAllotmentValueChange = (event) => {
      dispatch(outlayActions.setEntryMessage({entrymessage: ''}))
      dispatch(outlayActions.setAllotment({allotment: event.target.value}))
    }

    const handleAllotmentValueEditChange = (event) => {
      dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))
      dispatch(outlayActions.setAllotmentEdit({allotmentEdit: event.target.value}))
    }

    const handleExpenditureValueChange = (event) => {
      dispatch(outlayActions.setEntryMessage({entrymessage: ''}))
      dispatch(outlayActions.setExpenditure({expenditure: event.target.value}))
    }

    const handleExpenditureValueEditChange = (event) => {
      dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))
      dispatch(outlayActions.setExpenditureEdit({expenditureEdit: event.target.value}))
    }

    const handleOutlayTimeChange = (event) => {
      dispatch(outlayActions.setEntryMessage({entrymessage: ''}))
      dispatch(outlayActions.setOutlayTime({time: event.target.value}))
    }

    const handleOutlayTimeEditChange = (event) => {
      dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: ''}))
      dispatch(outlayActions.setOutlayTimeEdit({timeEdit: event.target.value}))
    }

    const handleAchievementValueChange = (event) => {
      dispatch(achievementActions.setEntryMessage({entrymessage:''}))
      dispatch(achievementActions.setValue({value: event.target.value}))
    }

    const handleAchievementTimeChange = (event) => {
      dispatch(achievementActions.setEntryMessage({entrymessage:''}))
      dispatch(achievementActions.setTime({time: event.target.value}))
    }

    const handleAchievementOutcomeValueChange = (event) => {
      dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
      dispatch(achievementActions.setValueOutcome({valueoutcome: event.target.value}))
    }

    const handleAchievementOutcomeTimeChange = (event) => {
      dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:''}))
      dispatch(achievementActions.setTimeOutcome({timeoutcome: event.target.value}))
    }

    const handleAchievementValueEditChange = (event) => {
      dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:''}))
      dispatch(achievementActions.setValueEdit({valueEdit: event.target.value}))
    }

    const handleOutcomeAchievementValueEditChange = (event) => {
      dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:''}))
      dispatch(achievementActions.setValueOutcomeEdit({valueoutcomeEdit: event.target.value}))
    }

    const handleAchievementTimeEditChange = (event) => {
      dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:''}))
      dispatch(achievementActions.setTimeEdit({timeEdit: event.target.value}))
    }

    const handleOutcomeAchievementTimeEditChange = (event) => {
      dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:''}))
      dispatch(achievementActions.setTimeOutcomeEdit({timeoutcomeEdit: event.target.value}))
    }

    const onSubmitAchievementEdit = () => {
      
      if(valueEdit === ''){
        dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:'Please enter a value'}))
        return
      }
      if(isNaN(valueEdit)){
        dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:'Please enter a numeric value'}))
        return
      }
      if(valueEdit < 0){
        dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:'Please enter a positive value'}))
        return
      }
      if(timeEdit === ''){
        dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:'Please enter a date'}))
        return
      }
      const d = new Date();
      let year = d.getFullYear();
      const d1 = new Date(timeEdit);
      let yearToCheck = d1.getFullYear();
      if(year !== yearToCheck){
        dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:'Please enter a valid date'}))
        return
      }
      if(d1 > d){
        dispatch(achievementActions.setEntryMessageEdit({entrymessageedit:'Future dates are not allowed'}))
        return
      }
      
      const achL = achievements.filter(achievement => achievement.outputindicator_id === indicatorId)
      const achAA = achL.filter(d => d.reportYear === yearTD)
      const achAAA = achAA.filter(d => d.verified_status === 'A')
      const valueA = achAAA.map(s => parseFloat(s.value))
      const valueTC = valueA.length !== 0 ? valueA.reduce((t,n) => { 
        return t + n
      }) : 0
      if(!outputConfirmEditAgree && ((parseFloat(valueEdit) + valueTC) > parseFloat(valueTargetEdit))){
        handleOpenOutputEditConfirm()
        return
      }
      
      dispatch(updateOutputAchievementData(outputAchIdEdit,valueEdit,timeEdit));
      setOutputConfirmEditAgree(false)
      setOpenOutputEditConfirm(false);
      handleClose8()
    }

    const onSubmitOutcomeAchievementEdit = () => {
      if(valueoutcomeEdit === ''){
        dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:'Please enter a value'}))
        return
      }
      if(isNaN(valueoutcomeEdit)){
        dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:'Please enter a numeric value'}))
        return
      }
      if(valueoutcomeEdit < 0){
        dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:'Please enter a positive value'}))
        return
      }
      if(timeoutcomeEdit === ''){
        dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:'Please enter a date'}))
        return
      }
      const d = new Date();
      let year = d.getFullYear();
      const d1 = new Date(timeoutcomeEdit);
      let yearToCheck = d1.getFullYear();
      if(year !== yearToCheck){
        dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:'Please enter a valid date'}))
        return
      }
      if(d1 > d){
        dispatch(achievementActions.setEntryMessageOutcomeEdit({entrymessageeditoutcome:'Future dates are not allowed'}))
        return
      }
      const achL = achievementsoutcome.filter(achievement => achievement.outcomeindicator_id === indicatorId)
      const achAA = achL.filter(d => d.reportYear === yearTD)
      const achAAA = achAA.filter(d => d.verified_status === 'A')
      const valueA = achAAA.map(s => parseFloat(s.value))
      const valueTC = valueA.length !== 0 ? valueA.reduce((t,n) => { 
        return t + n
      }) : 0
      if(!outcomeConfirmEditAgree && ((parseFloat(valueoutcomeEdit) + valueTC) > parseFloat(valueOutcomeTargetEdit))){
        handleOpenOutcomeEditConfirm()
        return
      }
      
      dispatch(updateOutcomeAchievementData(outcomeAchIdEdit,valueoutcomeEdit,timeoutcomeEdit));
      setOutcomeConfirmEditAgree(false)
      setOpenOutcomeEditConfirm(false);
      handleClose9()
    }

    const onSubmitAchievement = (departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId,valueTarget) => {
      if(value === ''){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a value'}))
        return
      }
      if(isNaN(value)){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a numeric value'}))
        return
      }
      if(value < 0){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a positive value'}))
        return
      }
      if(time === ''){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a date'}))
        return
      }
      const d = new Date();
      let year = d.getFullYear();
      const d1 = new Date(time);
      let yearToCheck = d1.getFullYear();
      if(year !== yearToCheck){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Please enter a valid date'}))
        return
      }
      if(d1 > d){
        dispatch(achievementActions.setEntryMessage({entrymessage:'Future dates are not allowed'}))
        return
      }
      const achL = achievements.filter(achievement => achievement.outputindicator_id === outputindicatorId)
      const achAA = achL.filter(d => d.reportYear === yearTD)
      const valueA = achAA.map(s => parseFloat(s.value))
      const valueTC = valueA.length !== 0 ? valueA.reduce((t,n) => { 
        return t + n
      }) : 0
      if(!outputConfirmAgree && ((parseFloat(value) + valueTC) > parseFloat(valueTarget))){
        handleOpenOutputConfirm()
        return
      }
      
      dispatch(storeOutputAchievementData(departmentId,divisionId,schemeId,subschemeId,outputId,outputindicatorId,value,time));
      setOutputConfirmAgree(false)
      setOpenOutputConfirm(false);
      handleClose1();
    }

    const onSubmitFinancial = (id) => {
      
      if(sanctioned === ''){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter sanctioned amount'}))
        return
      }
      if(isNaN(sanctioned)){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter a numeric value for sanctioned amount'}))
        return
      }
      if(allotment === ''){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter alloted amount'}))
        return
      }
      if(isNaN(allotment)){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter a numeric value for alloted amount'}))
        return
      }
      if(expenditure === ''){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter expenditure'}))
        return
      }
      if(isNaN(expenditure)){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter a numeric value for expenditure amount'}))
        return
      }
      if(parseFloat(expenditure) < 0){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter a positive value for expenditure'}))
        return
      }
      if(parseFloat(allotment) < 0){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter a positive value for allotment'}))
        return
      }
      if(parseFloat(sanctioned) < 0){
        dispatch(outlayActions.setEntryMessage({entrymessage: 'Please enter a positive value for sanction'}))
        return
      }
      // const financialDetailsATC = financialDetails.filter(d => d.reportYear === yearTD)
      // const sanctionA = financialDetailsATC.map(s => parseFloat(s.sanction))
      // const allotmentA = financialDetailsATC.map(s => parseFloat(s.allotment))
      // const expenditureA = financialDetailsATC.map(s => parseFloat(s.expenditure))
      // const sanctionTC = sanctionA.length !== 0 ? sanctionA.reduce((t,n) => { 
      //   return t + n
      // }) : 0
      // const allotmentTC = allotmentA.length !== 0 ? allotmentA.reduce((t,n) => {
      //   return t + n
      // }): 0
      // const expenditureTC = expenditureA.length !== 0 ? expenditureA.reduce((t,n) => {
      //   return t + n
      // }): 0
      // if((sanctionTC + parseFloat(sanctioned)) > parseFloat(outlay)){
      //   dispatch(outlayActions.setEntryMessage({entrymessage: 'Sanctioned amount cannot be greater than Budget Estimate'}))
      //   return
      // }
      // if((sanctionTC + parseFloat(sanctioned)) < (parseFloat(allotmentTC) + parseFloat(allotment))){
      //   dispatch(outlayActions.setEntryMessage({entrymessage: 'Alloted amount cannot be greater than Sanctioned'}))
      //   return
      // }
      // if((parseFloat(expenditureTC) + parseFloat(expenditure)) > (parseFloat(allotmentTC) + parseFloat(allotment))){
      //   dispatch(outlayActions.setEntryMessage({entrymessage: 'Expenditure cannot be greater than Alloted amount'}))
      //   return
      // }
      if(outlaytime === ''){
        dispatch(outlayActions.setEntryMessage({entrymessage:'Please enter a date'}))
        return
      }
      const d = new Date();
      let year = d.getFullYear();
      const d1 = new Date(outlaytime);
      let yearToCheck = d1.getFullYear();
      if(year !== yearToCheck){
        dispatch(outlayActions.setEntryMessage({entrymessage:'Please enter a valid date'}))
        return
      }
      if(d1 > d){
        dispatch(outlayActions.setEntryMessage({entrymessage:'Future dates are not allowed'}))
        return
      }
      
      dispatch(storeFinancialData(sanctioned,allotment,expenditure,outlaytime,id));
      handleClose5();
    }

    const onSubmitFinancialEdit = () => {

      if(sanctionedEdit === ''){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter sanctioned amount'}))
        return
      }
      if(isNaN(sanctionedEdit)){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter a numeric value for sanctioned amount'}))
        return
      }
      if(allotmentEdit === ''){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter alloted amount'}))
        return
      }
      if(isNaN(allotmentEdit)){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter a numeric value for alloted amount'}))
        return
      }
      if(expenditureEdit === ''){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter expenditure'}))
        return
      }
      if(isNaN(expenditureEdit)){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter a numeric value for expenditure amount'}))
        return
      }
      if(parseFloat(expenditureEdit) < 0){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter a positive value for expenditure'}))
        return
      }
      if(parseFloat(allotmentEdit) < 0){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter a positive value for allotment'}))
        return
      }
      if(parseFloat(sanctionedEdit) < 0){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Please enter a positive value for sanction'}))
        return
      }
      // const financialDetailsATC = financialDetails.filter(d => d.reportYear === yearTD)
      // const financialDetailsAA = financialDetailsATC.filter(s => s.verified_status === 'A')
      // const sanctionA = financialDetailsAA.map(s => parseFloat(s.sanction))
      // const allotmentA = financialDetailsAA.map(s => parseFloat(s.allotment))
      // const expenditureA = financialDetailsAA.map(s => parseFloat(s.expenditure))
      // const sanctionTC = sanctionA.length !== 0 ? sanctionA.reduce((t,n) => { 
      //   return t + n
      // }) : 0
      // const allotmentTC = allotmentA.length !== 0 ? allotmentA.reduce((t,n) => {
      //   return t + n
      // }): 0
      // const expenditureTC = expenditureA.length !== 0 ? expenditureA.reduce((t,n) => {
      //   return t + n
      // }): 0
      // if((parseFloat(sanctionedEdit) + sanctionTC) > parseFloat(outlay)){
      //   dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Sanctioned amount cannot be greater than Budget Estimate'}))
      //   return
      // }
      // if((parseFloat(sanctionedEdit) + sanctionTC) < (parseFloat(allotmentEdit) + allotmentTC)){
      //   dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Alloted amount cannot be greater than Sanctioned'}))
      //   return
      // }
      // if((parseFloat(expenditureEdit) + expenditureTC) > (parseFloat(allotmentEdit) + allotmentTC)){
      //   dispatch(outlayActions.setEntryMessageEdit({entrymessageedit: 'Expenditure cannot be greater than Alloted amount'}))
      //   return
      // }
      if(outlaytimeedit === ''){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit:'Please enter a date'}))
        return
      }
      const d = new Date();
      let year = d.getFullYear();
      const d1 = new Date(outlaytimeedit);
      let yearToCheck = d1.getFullYear();
      if(year !== yearToCheck){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit:'Please enter a valid date'}))
        return
      }
      if(d1 > d){
        dispatch(outlayActions.setEntryMessageEdit({entrymessageedit:'Future dates are not allowed'}))
        return
      }
      
      dispatch(updateFinancialData(sanctionedEdit,allotmentEdit,expenditureEdit,outlaytimeedit,finEditId));
      handleClose10();
    }

    const onSubmitAchievementOutcome = (departmentId,divisionId,schemeId,subschemeId,outcomeId,outcomeindicatorId,valueTarget) => {
      if(valueoutcome === ''){
        dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:'Please enter a value'}))
        return
      }
      if(isNaN(valueoutcome)){
        dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:'Please enter a numeric value'}))
        return
      }
      if(parseFloat(valueoutcome) < 0){
        dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:'Please enter a positive value'}))
        return
      }
      if(timeoutcome === ''){
        dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:'Please enter a date'}))
        return
      }
      const d = new Date();
      let year = d.getFullYear();
      const d1 = new Date(timeoutcome);
      let yearToCheck = d1.getFullYear();
      if(year !== yearToCheck){
        dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:'Please enter a valid date'}))
        return
      }
      if(d1 > d){
        dispatch(achievementActions.setEntryMessageOutcome({entrymessageoutcome:'Future dates are not allowed'}))
        return
      }
      const achL = achievementsoutcome.filter(achievement => achievement.outcomeindicator_id === outcomeindicatorId)
      const achAA = achL.filter(d => d.reportYear === yearTD)
      const valueA = achAA.map(s => parseFloat(s.value))
      const valueTC = valueA.length !== 0 ? valueA.reduce((t,n) => { 
        return t + n
      }) : 0
      if(!outcomeConfirmAgree && ((parseFloat(valueoutcome) + valueTC) > parseFloat(valueTarget))){
        handleOpenOutcomeConfirm()
        return
      }
      
      dispatch(storeOutcomeAchievementData(departmentId,divisionId,schemeId,subschemeId,outcomeId,outcomeindicatorId,valueoutcome,timeoutcome));
      setOutcomeConfirmAgree(false)
      setOpenOutcomeConfirm(false);
      handleClose3();
    }

    const onSubmitRemarks = (id) => {
      let a = riskremarksedit
      if(riskremarksedit.length >= 2000){
        dispatch(achievementActions.setRiskRemarksEntryMessage({entrymessageriskremarks: 'Maximum characters allowed is 2000'}))
        return
      }
      if(riskremarksedit.length === 0){
        a = '-'
      }
      dispatch(storeRiskRemarksData(a,id));
      setRiskRemarksEdit('')
      handleClose7();
    }

  const handleCloseOutputAchEditSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutputAchEditSuccess({outputAchEditSuccess:false}))
  };

  const handleCloseOutputAchEditFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutputAchEditFailure({outputAchEditFailure:false}))
  };

  const handleCloseOutcomeAchEditSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutcomeAchEditSuccess({outcomeAchEditSuccess:false}))
  };

  const handleCloseOutcomeAchEditFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutcomeAchEditFailure({outcomeAchEditFailure:false}))
  };

  const handleCloseOutputSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutputAchSuccess({outputAchSuccess:false}))
  };

  const handleCloseOutcomeSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutcomeAchSuccess({outcomeAchSuccess:false}))
  };

  const handleCloseOutputFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutputAchFailure({outputAchFailure:false}))
  };

  const handleCloseOutcomeFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setOutcomeAchFailure({outcomeAchFailure:false}))
  };

  const handleCloseFinancialSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(outlayActions.setFinancialEntryNotificationSuccess({financialentrynotificationsuccess: false}))
  };

  const handleCloseFinancialSuccessEdit = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(outlayActions.setFinancialEntryNotificationSuccessEdit({financialentrynotificationsuccessedit: false}))
  };

  const handleCloseFinancialFailureEdit = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(outlayActions.setFinancialEntryNotificationFailureEdit({financialentrynotificationfailureedit: false}))
  };

  const handleCloseFinancialFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(outlayActions.setFinancialEntryNotificationFailure({financialentrynotificationfailure: false}))
  };

  const handleCloseRemarksSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setUpdateRemarkSuccess({updateRemarkSuccess:false}))
  };

  const handleCloseRemarksFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(achievementActions.setUpdateRemarkFailure({updateRemarkFailure:false}))
  };

  return (<>
  <Snackbar open={outputAchEditSuccess} autoHideDuration={4000} onClose={handleCloseOutputAchEditSuccess}>
        <Alert onClose={handleCloseOutputAchEditSuccess} severity="success" sx={{ width: '100%' }}>
          Achievement updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outputAchEditFailure} autoHideDuration={4000} onClose={handleCloseOutputAchEditFailure}>
        <Alert onClose={handleCloseOutputAchEditFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeAchEditSuccess} autoHideDuration={4000} onClose={handleCloseOutcomeAchEditSuccess}>
        <Alert onClose={handleCloseOutcomeAchEditSuccess} severity="success" sx={{ width: '100%' }}>
          Achievement updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeAchEditFailure} autoHideDuration={4000} onClose={handleCloseOutcomeAchEditFailure}>
        <Alert onClose={handleCloseOutcomeAchEditFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
  <Snackbar open={financialentrynotificationsuccess} autoHideDuration={4000} onClose={handleCloseFinancialSuccess}>
        <Alert onClose={handleCloseFinancialSuccess} severity="success" sx={{ width: '100%' }}>
          Financial entry created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={financialentrynotificationsuccessedit} autoHideDuration={4000} onClose={handleCloseFinancialSuccessEdit}>
        <Alert onClose={handleCloseFinancialSuccessEdit} severity="success" sx={{ width: '100%' }}>
          Financial entry updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={financialentrynotificationfailureedit} autoHideDuration={4000} onClose={handleCloseFinancialFailureEdit}>
        <Alert onClose={handleCloseFinancialFailureEdit} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={financialentrynotificationfailure} autoHideDuration={4000} onClose={handleCloseFinancialFailure}>
        <Alert onClose={handleCloseFinancialFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={updateRemarkSuccess} autoHideDuration={4000} onClose={handleCloseRemarksSuccess}>
        <Alert onClose={handleCloseRemarksSuccess} severity="success" sx={{ width: '100%' }}>
          Risk/Remarks updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={updateRemarkFailure} autoHideDuration={4000} onClose={handleCloseRemarksFailure}>
        <Alert onClose={handleCloseRemarksFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
    <Snackbar open={outputAchSuccess} autoHideDuration={4000} onClose={handleCloseOutputSuccess}>
        <Alert onClose={handleCloseOutputSuccess} severity="success" sx={{ width: '100%' }}>
          Output Achievement created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeAchSuccess} autoHideDuration={4000} onClose={handleCloseOutcomeSuccess}>
        <Alert onClose={handleCloseOutcomeSuccess} severity="success" sx={{ width: '100%' }}>
          Outcome Achievement created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outputAchFailure} autoHideDuration={4000} onClose={handleCloseOutputFailure}>
        <Alert onClose={handleCloseOutputFailure} severity="error" sx={{ width: '100%' }}>
          Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeAchFailure} autoHideDuration={4000} onClose={handleCloseOutcomeFailure}>
        <Alert onClose={handleCloseOutcomeFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Dialog
        open={openOutputConfirm}
        onClose={handleCloseOutputConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are entering achievement more than the target. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOutputConfirm}>Disagree</Button>
          <Button onClick={handleSubmitOutputConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openOutputEditConfirm}
        onClose={handleCloseOutputEditConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are entering achievement more than the target. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOutputEditConfirm}>Disagree</Button>
          <Button onClick={handleSubmitOutputEditConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openOutcomeEditConfirm}
        onClose={handleCloseOutcomeEditConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are entering achievement more than the target. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOutcomeEditConfirm}>Disagree</Button>
          <Button onClick={handleSubmitOutcomeEditConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openOutcomeConfirm}
        onClose={handleCloseOutcomeConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are entering achievement more than the target. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOutcomeConfirm}>Disagree</Button>
          <Button onClick={handleSubmitOutcomeConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {outputAddBtn ? (<div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Achievement</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleAchievementValueChange} value={value}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">{`Unit:- ${(Object.keys(indicator).length !== 0) ? indicator.target_outputs[0].measurement : 'NA'}`}</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Achievement Quater</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" value={`${quaterTD} (FY- ${yearTD})`}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Achievement for current year</small>
    {(entrymessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitAchievement(indicator.department_id,indicator.division_id,indicator.scheme_id,indicator.subscheme_id,indicator.output_id,indicator.id,indicator.target_outputs[0].value)}>Save</p>
</div>) : <p>You have already entered an achievement. New Entry will only be allowed once verifier approves the entry.</p>}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open8}
        onClose={handleClose8}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement Entry Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {outputAchEditAllow ? (<div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Achievement</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleAchievementValueEditChange} value={valueEdit}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">{`Unit:- ${outputAchEditMeasurement}`}</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Achievement Quater</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" value={`${quaterTD} (FY- ${yearTD})`}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Achievement for current year</small>
    {(entrymessageedit !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessageedit}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitAchievementEdit}>Save</p>
</div>):<p>This entry has been submitted for review. You cannot edit now.</p>}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open9}
        onClose={handleClose9}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement Entry Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {outcomeAchEditAllow ? (<div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Achievement</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleOutcomeAchievementValueEditChange} value={valueoutcomeEdit}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">{`Unit:- ${outcomeAchEditMeasurement}`}</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Achievement Quater</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" value={`${quaterTD} (FY- ${yearTD})`}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Achievement for current year</small>
    {(entrymessageeditoutcome !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessageeditoutcome}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitOutcomeAchievementEdit}>Save</p>
</div>) : <p>This entry has been submitted for review. You cannot edit now.</p>}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {outcomeAddBtn ? <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Achievement</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleAchievementOutcomeValueChange} value={valueoutcome}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">{`Unit:- ${(Object.keys(indicatoroutcome).length !== 0) ? indicatoroutcome.target_outcomes[0].measurement : 'NA'}`}</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Achievement Quater</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" value={`${quaterTD} (FY- ${yearTD})`}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Achievement for current year</small>
    {(entrymessageoutcome !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessageoutcome}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitAchievementOutcome(indicatoroutcome.department_id,indicatoroutcome.division_id,indicatoroutcome.scheme_id,indicatoroutcome.subscheme_id,indicatoroutcome.outcome_id,indicatoroutcome.id,indicatoroutcome.target_outcomes[0].value)}>Save</p>
</div> : <p>You have already entered an achievement. New Entry will only be allowed once verifier approves the entry.</p>}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement List</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div>
            {(achlists.length !== 0) ? (<div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Achievement for Quater</th>
          <th className="b--black-80 tc pb3 pr3 b">Achievement Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Submitted</th>
          <th className="b--black-80 tc pb3 pr3 b">Verified</th>
          <th className="b--black-80 tc pb4 pr4 b">Action</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {achlists && achlists.map(achlist => {
        return (<tr>
          <td className="pv3 pr3  b--black-80 tc">{`${getQuater(achlist.reportName)} (FY - ${getYear(achlist.reportYear)})`}</td>
          <td className="pv3 pr3  b--black-80 tc">{achlist.value}</td>
          <td className="pv3 pr3  b--black-80 tc">{achlist.measurement}</td>
          <td className="pv3 pr3  b--black-80 tc">{(achlist.submitted_status === 'N') ? <CancelIcon sx={{ color: red[500] }} /> : <TaskAltIcon color="success" />}</td>
          <td className={`pv3 pr3  b--black-80 tc`}>{verifiedstatustodisplay(achlist.verified_status)}</td>
          <td className="pv4 pr4  b--black-80 tc"><p className="f6 link dim br3 ph1 pv1 ml3 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen8(achlist.id,achlist.time,achlist.value,achlist.measurement,achlist.submitted_status,achlist.verified_status,achlist.outputindicator_id)}>Edit</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>):(
  <h3 className='b f5'>No Achievement Entered for this indicator</h3>
)}
                    
          </div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Achievement List</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div>
          {(achlistsoutcome.length !== 0) ? (<div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Achievement for Quater</th>
          <th className="b--black-80 tc pb3 pr3 b">Achievement Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Submitted</th>
          <th className="b--black-80 tc pb3 pr3 b">Verified</th>
          <th className="b--black-80 tc pb4 pr4 b">Action</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {achlistsoutcome && achlistsoutcome.map(achlist => {
        return (<tr>
          <td className="pv3 pr3  b--black-80">{`${getQuater(achlist.reportName)} (FY - ${getYear(achlist.reportYear)})`}</td>
          <td className="pv3 pr3  b--black-80">{achlist.value}</td>
          <td className="pv3 pr3  b--black-80">{achlist.measurement}</td>
          <td className="pv3 pr3  b--black-80 tc">{(achlist.submitted_status === 'N') ? <CancelIcon sx={{ color: red[500] }} /> : <TaskAltIcon color="success" />}</td>
          <td className={`pv3 pr3  b--black-80 tc`}>{verifiedstatustodisplay(achlist.verified_status)}</td>
          <td className="pv4 pr4  b--black-80 tc"><p className="f6 link dim br3 ph1 pv1 ml3 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen9(achlist.id,achlist.time,achlist.value,achlist.measurement,achlist.submitted_status,achlist.verified_status,achlist.outcomeindicator_id)}>Edit</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>):(
  <h3 className='b f5'>No Achievement Entered for this indicator</h3>
)}      
          </div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Financial Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {finAddBtn ? <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Sanctioned Amount</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleSanctionedValueChange} value={sanctioned}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Rs. in Lakhs</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Alloted Amount</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleAllotmentValueChange} value={allotment}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Rs. in Lakhs</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Expenditure</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleExpenditureValueChange} value={expenditure}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Rs. in Lakhs</small>
    <label htmlFor="time" className="f6 b db mb2 nunito">Financial Quater</label>
    <input id="time" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" value={`${quaterTD} (FY- ${yearTD})`}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Financial Details for current quater</small>
    {(entrymessagefinancial !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessagefinancial}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitFinancial(params.id)}>Save</p>
</div> : <p>You have already entered an entry. New Entry will only be allowed once verifier approves the entry.</p>}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open10}
        onClose={handleClose10}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Financial Entry Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {finEditAllow ? (<div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Sanctioned Amount</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleSanctionedValueEditChange} value={sanctionedEdit}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Rs. in Lakhs</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Alloted Amount</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleAllotmentValueEditChange} value={allotmentEdit}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Rs. in Lakhs</small>
    <label htmlFor="name" className="f6 b db mb2 nunito">Please Enter Expenditure</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleExpenditureValueEditChange} value={expenditureEdit}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Rs. in Lakhs</small>
    <label htmlFor="time" className="f6 b db mb2 nunito">Financial Detail Quater</label>
    <input id="time" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" value={`${quaterTD} (FY- ${yearTD})`}/>
    <small id="name-desc" className="f6 black-60 db mb2">Enter Financial Details for current year</small>
    {(entrymessagefinancialedit !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessagefinancialedit}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitFinancialEdit()}>Save</p>
</div>) : <p>This entry has been submitted for review. You cannot edit now.</p>}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Financial Details</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="overflow-auto">
          {(financialDetails.length !== 0) ? (<div className="pa4">
  <div >
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr2 b">{"Sanctioned Amount (Rs. in Lakhs)"}</th>
          <th className="b--black-80 tc pb3 pr2 b">{"Allotment Amount (Rs. in Lakhs)"}</th>
          <th className="b--black-80 tc pb3 pr2 b">{"Expenditure Amount (Rs. in Lakhs)"}</th>
          <th className="b--black-80 tc pb3 pr4 b">Financial Record for quater</th>
          <th className="b--black-80 tc pb3 pr4 b">Entered On</th>
          <th className="b--black-80 tc pb3 pr3 b">Submitted</th>
          <th className="b--black-80 tc pb3 pr3 b">Verified</th>
          <th className="b--black-80 tc pb4 pr4 b">Action</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {financialDetails && financialDetails.map(financial => {
        return (<tr>
          <td className="pv3 pr2  b--black-80">{financial.sanction}</td>
          <td className="pv3 pr2  b--black-80">{financial.allotment}</td>
          <td className="pv3 pr2  b--black-80">{financial.expenditure}</td>
          <td className="pv3 pr4 b--black-80">{`${getQuater(financial.reportName)} (FY - ${getYear(financial.reportYear)})`}</td>
          <td className="pv3 pr4 b--black-80">{financial.created_at.slice(0,10)}</td>
          <td className="pv3 pr3  b--black-80 tc">{(financial.submitted_status === 'N') ? <CancelIcon sx={{ color: red[500] }} /> : <TaskAltIcon color="success" />}</td>
          <td className={`pv3 pr3  b--black-80 tc`}>{verifiedstatustodisplay(financial.verified_status)}</td>
          <td className="pv4 pr4  b--black-80 tc"><p className="f6 link dim br3 ph1 pv1 ml3 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen10(financial.id,financial.sanction,financial.allotment,financial.expenditure,financial.time.slice(0,10),financial.submitted_status,financial.verified_status)}>Edit</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>):(
  <h3 className='b f5'>No Financial Entry made</h3>
)}      
          </div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open7}
        onClose={handleClose7}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style3}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Risk/Remarks</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {remarksBtnStatus ? <div className='center tc'>
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
          <p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer center" onClick={() => onSubmitRemarks(params.id)}>Save</p>    
          </div> : <h3 className='b f5'>Submitted for verification!!</h3>}
          </Typography>
        </Box>
      </Modal>
      <div className='container'>
      <h1 className='b'>{`Dashboard for submission of sub-schemes details for verification of ${quaterTD} (${yearTD})`}</h1>
      <p className='f4'><span className='b'>State Scheme/Programme :</span> {`${schemeStateCode ? schemeStateCode : '0000'}-${schemeStateName ? schemeStateName : '0000' }`}</p>
      <p className='f4'><span className='b'>Center Scheme/Programme :</span> {`${schemeCenterCode ? schemeCenterCode : 'NAPL'}-${schemeCenterName ? schemeCenterName : 'NAPL'}`}</p>
      <p className='f4'><span className='b'>Sub-Scheme :</span> {`${subschemecode}-${subschemename}`}</p>
      </div>
      {/* <table class="f6 w-100 center mb3" cellspacing="0">
      
      <tbody class="lh-copy">
      <tr class="stripe-dark">
          <td class="pa3 tl">Financial Year</td>
          <td class="pa3 tl">2022-23</td>
          
        </tr>
        <tr class="stripe-dark">
          <td class="pa3 tl">Name of secretariat department</td>
          <td class="pa3 tl">{`${demand_no}-${department_name}(${division_name})`}</td>
          
        </tr>
        <tr class="stripe-dark">
          <td class="pa3 tl">Name of the state scheme</td>
          <td class="pa3 tl">{`${schemeStateCode ? schemeStateCode : '0000'}-${schemeStateName ? schemeStateName : '0000' }`}</td>
          
        </tr>
        <tr class="stripe-dark">
          <td class="pa3 tl">Name of the center scheme</td>
          <td class="pa3 tl">{`${schemeCenterCode ? schemeCenterCode : 'NAPL'}-${schemeCenterName ? schemeCenterName : 'NAPL'}`}</td>
          
        </tr>
        <tr class="stripe-dark">
          <td class="pa3 tl">Name of the sub-scheme</td>
          <td class="pa3 tl">{`${subschemecode}-${subschemename}`}</td>
        
        </tr>
      </tbody>
    </table> */}
    <div className='container'>
      <div className="accordion" id="headingfinancial">
    <div className="accordion-item">
      <h4 className="accordion-header bg-blue " id='headingfinancial'>
        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target='#collapsefinancial' aria-expanded="true" aria-controls='collapsefinancial'>
          <p className='black f5 b'>Financial Details</p>
        </button>
      </h4>
      <div id='collapsefinancial' className="accordion-collapse collapse show" aria-labelledby='headingfinancial' data-bs-parent="#headingfinancial">
        <div className="accordion-body">
          <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Budget Estimate (Rs. in lakhs)</th>
          <th className="b--black-80 tc pb3 pr3 b">Add Details</th>
          <th className="b--black-80 tc pb3 pr3 b">View Details</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr>
          <td className="pv3 pr3  b--black-80">{outlay}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen5()}>Add</p></td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen6()}>View</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    {result.outputs && result.outputs.map(result => {
      return (
      <div key={result.id} className='container'>
      <div className="accordion" id={`accordionoutput${result.id}`}>
    <div className="accordion-item">
      <h4 className="accordion-header bg-blue " id={`output${result.id}`}>
        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target={`#collapseoutput${result.id}`} aria-expanded="true" aria-controls={`collapseoutput${result.id}`}>
          <p className='black f5 b'>{`Output:- ${result.name.toUpperCase()}`}</p>
        </button>
      </h4>
      <div id={`collapseoutput${result.id}`} className="accordion-collapse collapse show" aria-labelledby={`output${result.id}`} data-bs-parent={`#accordionoutput${result.id}`}>
        <div className="accordion-body">
          <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw9 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Output Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Year</th>
          <th className="b--black-80 tc pb3 pr3 b">Add Achievement</th>
          <th className="b--black-80 tc pb3 pr3 b">View Achievement</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {result.outputindicators && result.outputindicators.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{parseFloat(indicator.target_outputs[0].value)}</td>
          <td className="pv3 pr3  b--black-80">{indicator.target_outputs[0].measurement}</td>
          <td className="pv3 pr3  b--black-80">{indicator.target_outputs[0].year}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen1(indicator)}>Add</p></td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen2(indicator.id,indicator.target_outputs[0].measurement,indicator.target_outputs[0].value)}>View</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>)
    }
      )}
    {result.outcomes && result.outcomes.map(result => {
      return (
      <div key={result.id} className='container'>
      <div className="accordion" id={`outcome${result.id}`}>
    <div className="accordion-item">
      <h4 className="accordion-header" id={`heading${result.id}`}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseoutcome${result.id}`} aria-expanded="true" aria-controls={`collapseoutcome${result.id}`}>
          <p className='black f5 b'>{`Outcome:- ${result.name.toUpperCase()}`}</p>
        </button>
      </h4>
      <div id={`collapseoutcome${result.id}`} className="accordion-collapse collapse show" aria-labelledby={`outcome${result.id}`} data-bs-parent={`#outcome${result.id}`}>
        <div className="accordion-body">
          <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw9 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Outcome Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Year</th>
          <th className="b--black-80 tc pb3 pr3 b">Add Achievement</th>
          <th className="b--black-80 tc pb3 pr3 b">View Achievement</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {result.outcomeindicators && result.outcomeindicators.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{parseFloat(indicator.target_outcomes[0].value)}</td>
          <td className="pv3 pr3  b--black-80">{indicator.target_outcomes[0].measurement}</td>
          <td className="pv3 pr3  b--black-80">{indicator.target_outcomes[0].year}</td>
          <td className="pv3 pr3 b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen3(indicator)}>Add</p></td>
          <td className="pv3 pr3 b--black-80"><span className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen4(indicator.id,indicator.target_outcomes[0].measurement,indicator.target_outcomes[0].value)}>View</span></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>)
    }
      )}
      <div className='container'>
      <div className="accordion" id="riskremarks">
    <div className="accordion-item">
      <h4 className="accordion-header bg-blue " id='riskremarks'>
        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target='#collapseriskremarks' aria-expanded="true" aria-controls='collapseriskremarks'>
          <p className='black f5 b'>Risk/Remarks</p>
        </button>
      </h4>
      <div id='collapseriskremarks' className="accordion-collapse collapse show" aria-labelledby='riskremarks' data-bs-parent="#riskremarks">
        <div className="accordion-body">
          <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto h6">
  <p className='ba b b--black f5 w-80-ns w-90 pa3 center overflow-auto h5'>{updateriskremarks ? updateriskremarks.split('\n').map(function(item) {
  return (
    <span>
      {item}
      <br/>
    </span>
  )
}): '-'}</p>
  <p className="pv3 pr3 b--black-80 tc"><span className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={handleOpen7}>Update</span></p>
  </div>
</div>
              
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    <h3>{message}</h3>
    </>
  )
}

export default AchievementEntryForm