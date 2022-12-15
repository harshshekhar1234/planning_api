import React, {useState, useEffect} from 'react'
import { 
    searchSchemesStateName,
    searchSchemesCenterName,
    searchSchemesStateCode,
    searchSchemesCenterCode
  } from '../store/schemes-action';
import {schemesActions} from '../store/schemesSlice';
import {subschemesActions} from '../store/subschemesSlice';
import {outputsActions} from '../store/outputSlice';
import {outcomesActions} from '../store/outcomeSlice';
import {outputindicatorActions} from '../store/outputindicatorSlice';
import {outcomeindicatorActions} from '../store/outcomeindicatorSlice';
import {outputtargetActions} from '../store/outputtargetSlice';
import {outcometargetActions} from '../store/outcometargetSlice';
import {socialActions} from '../store/socialSlice';
import {genderActions} from '../store/genderSlice';
import {deptUserEntryActions} from '../store/deptUserEntrySlice';
import {sdgsubschemeActions} from '../store/sdgsubschemeSlice';
import {searchSubSchemesName,searchSubSchemesCode,getSubSchemesHeaderReport} from '../store/subschemes-actions';
import {getSearchOutputData,updateOutputData,deleteOutputData} from '../store/output-actions';
import {getSocialData, getSocialSubschemeData,updateSocialData} from '../store/social-actions';
import {getGenderData, getGenderSubschemeData,updateGenderData} from '../store/gender-actions';
import {getSdgsubschemeData,getSdgData,updateSdg} from '../store/sdgsubscheme-actions';
import {getSearchOutcomeData,updateOutcomeData,deleteOutcomeData} from '../store/outcome-actions';
import {getOutputTargetData} from '../store/outputtarget-actions';
import {getOutcomeTargetData} from '../store/outcometarget-actions';
import {getOutputIndicatorsData,deleteOutputIndicatorData} from '../store/outputindicator-actions';
import {getOutcomeIndicatorsData,deleteOutcomeIndicatorData} from '../store/outcomeindicator-actions';
import {getOutlayShareData,updateStateCenterData} from '../store/outlay-actions';
import {storeNewOutputData,
  storeNewOutputIndicatorData,
  storeNewOutcomeData,
  storeNewOutcomeIndicatorData,
  getOutputIndicatorEditData,
  getOutcomeIndicatorEditData,
  updateOutputIndicatorData,
  updateOutcomeIndicatorData
} from '../store/deptUserEntry-actions';
import {outlayActions} from '../store/outlaySlice';
import { useParams, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
    width: 850,
    height: '85%',
    bgcolor: '#fff',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    overflow: 'auto',
    p: 4,
  };

  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    height: '35%',
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
    width: 400,
    bgcolor: '#fff',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

const AdminEntryForm = () => {

    const dispatch = useDispatch();
    let params = useParams();

    const departments = useSelector((state) => state.departments.departments);
    const divisions = useSelector((state) => state.divisions.divisions);
    const searchScheme = useSelector((state) => state.schemes.schemeSearch);
    const departmentId = useSelector((state) => state.department.departmentId);
    const divisionId = useSelector((state) => state.divisions.divisionId);
    const searchSubScheme = useSelector((state) => state.subschemes.subschemeSearch);
    const subschemename = useSelector((state) => state.subschemes.subschemename);
    const subschemecode = useSelector((state) => state.subschemes.subschemecode);
    const subschemesearchmessage = useSelector((state) => state.subschemes.searchMessage);
    const outputsearch = useSelector((state) => state.outputs.searchOutput);
    const editOutput = useSelector((state) => state.outputs.editOutput);
    const editOutputId = useSelector((state) => state.outputs.editOutputId);
    const updateOutput = useSelector((state) => state.outputs.updateOutput);
    const editOutputMessage = useSelector((state) => state.outputs.editOutputMessage);
    const editOutcome = useSelector((state) => state.outcomes.editOutcome);
    const editOutcomeId = useSelector((state) => state.outcomes.editOutcomeId);
    const updateOutcome = useSelector((state) => state.outcomes.updateOutcome);
    const editOutcomeMessage = useSelector((state) => state.outcomes.editOutcomeMessage);
    const outcomesearch = useSelector((state) => state.outcomes.searchOutcome);
    const outcomeDeleteId = useSelector((state) => state.outcomes.outcomeDeleteId);
    const outcomeDeleteSuccess = useSelector((state) => state.outcomes.outcomeDeleteSuccess);
    const outputsearchmessage = useSelector((state) => state.outputs.searchMessage);
    const outputindicatorsearch = useSelector((state) => state.outputindicator.searchOutputIndicator);
    const outputIndicatorDeleteSuccess = useSelector((state) => state.outputindicator.outputIndicatorDeleteSuccess);
    const outputIndicatorDeleteId = useSelector((state) => state.outputindicator.outputIndicatorDeleteId);
    const outcomeindicatorsearch = useSelector((state) => state.outcomeindicator.searchOutcomeIndicator);
    const outcomeIndicatorDeleteId = useSelector((state) => state.outcomeindicator.outcomeIndicatorDeleteId);
    const outcomeIndicatorDeleteSuccess = useSelector((state) => state.outcomeindicator.outcomeIndicatorDeleteSuccess);
    const outputindicatortarget = useSelector((state) => state.targets.targets);
    const outcomeindicatortarget = useSelector((state) => state.outcometargets.targets);
    const outputname = useSelector((state) => state.outputs.outputName);
    const outputDeleteId = useSelector((state) => state.outputs.outputDeleteId);
    const outputDeleteSuccess = useSelector((state) => state.outputs.outputDeleteSuccess);
    const outcomename = useSelector((state) => state.outcomes.outcomeName);
    const social = useSelector((state) => state.social.social);
    const editSocialMessage = useSelector((state) => state.social.editSocialMessage);
    const editSocial = useSelector((state) => state.social.editSocial);
    const gender = useSelector((state) => state.gender.gender);
    const editGenderMessage = useSelector((state) => state.gender.editGenderMessage);
    const editGender = useSelector((state) => state.gender.editGender);
    const stateShare = useSelector((state) => state.outlay.stateShare);
    const centerShare = useSelector((state) => state.outlay.centerShare);
    const editStateShare = useSelector((state) => state.outlay.editStateShare);
    const editCenterShare = useSelector((state) => state.outlay.editCenterShare);
    const editOutlayMessage = useSelector((state) => state.outlay.editOutlayMessage);
    const sdgsubscheme = useSelector((state) => state.sdgsubscheme.sdgsubscheme);
    const sdgName = useSelector((state) => state.sdgsubscheme.sdgName);
    const sdgId = useSelector((state) => state.sdgsubscheme.sdgId);
    const sdgEdit = useSelector((state) => state.sdgsubscheme.sdgEdit);
    const sdgEditName = useSelector((state) => state.sdgsubscheme.sdgEditName);
    const outputindicatoredit = useSelector((state) => state.deptuserentry.indicatorEdit);
    const outputindicatortargetedit = useSelector((state) => state.deptuserentry.indicatorTargetEdit);
    const outputeditmessage = useSelector((state) => state.deptuserentry.outputeditmessage);
    const outcomeindicatoredit = useSelector((state) => state.deptuserentry.outcomeindicatorEdit);
    const outcomeindicatortargetedit = useSelector((state) => state.deptuserentry.outcomeindicatorTargetEdit);
    const outcomeeditmessage = useSelector((state) => state.deptuserentry.outcomeeditmessage);
    const newoutputnotificationsuccess = useSelector((state) => state.deptuserentry.newoutputnotificationsuccess);
    const newoutcomenotificationsuccess = useSelector((state) => state.deptuserentry.newoutcomenotificationsuccess);
    const newoutputnotificationfailure = useSelector((state) => state.deptuserentry.newoutputnotificationfailure);
    const newoutcomenotificationfailure = useSelector((state) => state.deptuserentry.newoutcomenotificationfailure);
    const outputindicatoreditnotificationsuccess = useSelector((state) => state.deptuserentry.outputindicatoreditnotificationsuccess);
    const outcomeindicatoreditnotificationsuccess = useSelector((state) => state.deptuserentry.outcomeindicatoreditnotificationsuccess);
    const outputindicatoreditnotificationfailure = useSelector((state) => state.deptuserentry.outputindicatoreditnotificationfailure);
    const outcomeindicatoreditnotificationfailure = useSelector((state) => state.deptuserentry.outcomeindicatoreditnotificationfailure);
    const newoutputindicatornotificationsuccess = useSelector((state) => state.deptuserentry.newoutputindicatornotificationsuccess);
    const newoutcomeindicatornotificationsuccess = useSelector((state) => state.deptuserentry.newoutcomeindicatornotificationsuccess);
    const newoutputindicatornotificationfailure = useSelector((state) => state.deptuserentry.newoutputindicatornotificationfailure);
    const newoutcomeindicatornotificationfailure = useSelector((state) => state.deptuserentry.newoutcomeindicatornotificationfailure);
    

    const schemeStateName = useSelector((state) => state.schemes.schemeStateName);
    const schemeCenterName = useSelector((state) => state.schemes.schemeCenterName); 
    const schemeStateCode = useSelector((state) => state.schemes.schemeStateCode); 
    const schemeCenterCode = useSelector((state) => state.schemes.schemeCenterCode);   
    const schemeSearchMessage = useSelector((state) => state.schemes.searchMessage);

    const [schemeSearchType, setSchemeSearchType] = useState('statename')
    const [schemeSearchResult, setSchemeSearchResult] = useState({...searchScheme})
    const [subschemeSearchType, setSubSchemeSearchType] = useState('name')
    const [subSchemeSearchResult, setSubSchemeSearchResult] = useState({...searchSubScheme})
    const [outputId, setOutputId] = useState('')
    const [outcomeId, setOutcomeId] = useState('')
    const [newOutputId, setNewOutputId] = useState('')
    const [newOutcomeId, setNewOutcomeId] = useState('')
    const [outputIndicatorRows, setOutputIndicatorRows] = useState([])
    const [outcomeIndicatorRows, setOutcomeIndicatorRows] = useState([])
    const [outputIndicatorRowCount, setOutputIndicatorRowCount] = useState(0)
    const [outcomeIndicatorRowCount, setOutcomeIndicatorRowCount] = useState(0)
    const [outputIndicatorName, setOutputIndicatorName] = useState('')
    const [outputTargetValue, setOutputTargetValue] = useState('')
    const [outputTargetMeasurement, setOutputTargetMeasurement] = useState('')
    const [outputTargetYear, setOutputTargetYear] = useState('2023')
    const [outputCreateMessage, setOutputCreateMessage] = useState('')
    const [outcomeIndicatorName, setOutcomeIndicatorName] = useState('')
    const [outcomeTargetValue, setOutcomeTargetValue] = useState('')
    const [outcomeTargetMeasurement, setOutcomeTargetMeasurement] = useState('')
    const [outcomeTargetYear, setOutcomeTargetYear] = useState('2023')
    const [outcomeCreateMessage, setOutcomeCreateMessage] = useState('')
    const [indicatorNameEdit, setIndicatorNameEdit] = useState();
    const [genderCat, setGenderCat] = useState(gender);
    const [sdgSubschemeCat, setSdgSubschemeCat] = useState([]);

    useEffect(() => {
      dispatch(getSdgData(params.id))
      dispatch(getSearchOutputData(params.id))
      dispatch(getSearchOutcomeData(params.id))
      dispatch(getSocialSubschemeData(params.id))
      dispatch(getGenderSubschemeData(params.id))
      dispatch(getSubSchemesHeaderReport(params.id))
      dispatch(getOutlayShareData(params.id))
      return () => {
        setSchemeSearchType('statename')
        setSchemeSearchResult({})
        setSubSchemeSearchType('name')
        setSubSchemeSearchResult({})
        setNewOutputId('')
        setNewOutcomeId('')
        setOutputIndicatorRows([])
        setOutcomeIndicatorRows([])
        setOutputIndicatorRowCount(0)
        setOutcomeIndicatorRowCount(0)
        setOutputIndicatorName('')
        setOutputTargetValue('')
        setOutputTargetMeasurement('')
        setOutputCreateMessage('')
        setOutcomeIndicatorName('')
        setOutcomeTargetValue('')
        setOutcomeTargetMeasurement('')
        setOutcomeCreateMessage('')
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
        dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))
        dispatch(outputsActions.setOutputSearch({searchOutput:[]}))
        dispatch(outcomesActions.setOutcomeSearch({searchOutcome:[]}))
        dispatch(outputsActions.setOutputName({outputName:''}))
        dispatch(outputsActions.setEditOutput({editOutput:''}))
        dispatch(outputsActions.setEditOutputMessage({editOutputMessage:''}))
        dispatch(outputsActions.setOutputDeleteSuccess({outputDeleteSuccess:false}))
        dispatch(outcomesActions.setEditOutcome({editOutcome:''}))
        dispatch(outcomesActions.setEditOutcomeMessage({editOutcomeMessage:''}))
        dispatch(outcomesActions.setOutcomeName({outcomeName:''}))
        dispatch(outcomesActions.setOutcomeDeleteSuccess({outcomeDeleteSuccess:false}))
        dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator:[]}))
        dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator:[]}))
        dispatch(outputindicatorActions.setOutputIndicatorSearchMessage({searchMessage:''}))
        dispatch(outputindicatorActions.setOutputIndicatorDeleteSuccess({outputIndicatorDeleteSuccess:false}))
        dispatch(outcomeindicatorActions.setOutcomeIndicatorDeleteSuccess({outcomeIndicatorDeleteSuccess:false}))
        dispatch(outcometargetActions.setOutcomeTargets({targets:[]}))
        dispatch(outputtargetActions.setOutputTargets({targets:[]}))
        dispatch(outputtargetActions.setOutputTargetValue({value:''}))
        dispatch(outputtargetActions.setTargetYear({year:''}))
        dispatch(outputtargetActions.setTargetMeasurement({measurement:''}))
        dispatch(outputtargetActions.setMessage({message:''}))
        dispatch(genderActions.setGender({gender: []})) 
        dispatch(genderActions.setEditGender({editGender: []}))
        dispatch(socialActions.setSocial({social: []}))
        dispatch(socialActions.setEditSocial({editSocial: []}))
        dispatch(outlayActions.setStateShare({stateShare: ''})) 
        dispatch(outlayActions.setCenterShare({centerShare: ''}))
        dispatch(outlayActions.setEditStateShare({editStateShare: ''})) 
        dispatch(outlayActions.setEditCenterShare({editCenterShare: ''}))
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage: ''}))
        dispatch(sdgsubschemeActions.setSdgName({sdgName: ''})) 
        dispatch(sdgsubschemeActions.setSdgId({sdgId: ''}))
      }
    }, []);

    useEffect(() => {
      if(updateOutput){
        dispatch(getSearchOutputData(params.id))
      }
      }, [updateOutput]);

    useEffect(() => {
      if(updateOutcome){
        dispatch(getSearchOutcomeData(params.id))
      }
      }, [updateOutcome]);

    useEffect(() => {
        if(Object.keys(subSchemeSearchResult).length !== 0){
        dispatch(getSearchOutputData(subSchemeSearchResult.id))
        dispatch(getSearchOutcomeData(subSchemeSearchResult.id))
        dispatch(getSocialSubschemeData(subSchemeSearchResult.id))
        dispatch(getGenderSubschemeData(subSchemeSearchResult.id))
      }
      }, [subSchemeSearchResult]);

      const handleChangeSocial = (g) => {
        const id = parseFloat(g)
        let newSocial = editSocial.map(s => ({...s}))
        newSocial = newSocial.map(s => {if(s.id === id){s.selected = !s.selected} return s})
        if(id === 1){
          newSocial = newSocial.map(s => {if(s.id !== 1){s.selected = false} return s})
        }
        if(id !== 1){
          newSocial = newSocial.map(s => {if(s.id === 1){s.selected = false} return s})
        }
        dispatch(socialActions.setEditSocial({editSocial: newSocial}))
        dispatch(socialActions.setEditSocialMessage({editSocialMessage: ''}))
        
      };

      const handleOutputIndicatorEdit = (event) => {
        dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: ''}))
        const newIndicator = {...outputindicatoredit, name: event.target.value}
        dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit: newIndicator}))
        
      }

      const handleOutputTargetValueEdit = (event) => {
        dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: ''}))
        const newTarget = {...outputindicatortargetedit, value: event.target.value}
        dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit: newTarget}))
      }

      const handleOutputTargetMeasurementEdit = (event) => {
        dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: ''}))
        const newTarget = {...outputindicatortargetedit, measurement: event.target.value}
        dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit: newTarget}))
      }

      const handleOutputTargetYearEdit = (event) => {
        dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: ''}))
        const newTarget = {...outputindicatortargetedit, year: event.target.value}
        dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit: newTarget}))
      }

      const handleOutputIndicatorEditSubmit = () => {
        if(outputindicatoredit.name === ''){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter Output Indicator'}))
          return
        }
        if(!isNaN(outputindicatoredit.name)){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter valid Output Indicator'}))
          return
        }
        if(outputindicatortargetedit.value === ''){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter Output Indicator Target Value'}))
          return
        }
        if(isNaN(outputindicatortargetedit.value)){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter numeric value for Output Indicator Target Value'}))
          return
        }
        if(outputindicatortargetedit.measurement === ''){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter Output Indicator Target Measurement Unit'}))
          return
        }
        if(!isNaN(outputindicatortargetedit.measurement)){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter Output Indicator Target Measurement Unit'}))
          return
        }
        if(outputindicatortargetedit.year === ''){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter Output Indicator Target Year'}))
          return
        }
        if(isNaN(outputindicatortargetedit.year)){
          dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage: 'Please enter a valid Output Indicator Target Year'}))
          return
        }

        dispatch(updateOutputIndicatorData(outputindicatoredit,outputindicatortargetedit))
        handleClose8()

      }

      const handleOutcomeIndicatorEdit = (event) => {
        dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: ''}))
        const newIndicator = {...outcomeindicatoredit, name: event.target.value}
        dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit: newIndicator}))
        
      }

      const handleOutcomeTargetValueEdit = (event) => {
        dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: ''}))
        const newTarget = {...outcomeindicatortargetedit, value: event.target.value}
        dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit: newTarget}))
      }

      const handleOutcomeTargetMeasurementEdit = (event) => {
        dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: ''}))
        const newTarget = {...outcomeindicatortargetedit, measurement: event.target.value}
        dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit: newTarget}))
      }

      const handleOutcomeTargetYearEdit = (event) => {
        dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: ''}))
        const newTarget = {...outcomeindicatortargetedit, year: event.target.value}
        dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit: newTarget}))
      }

      const handleOutcomeIndicatorEditSubmit = () => {
        if(outcomeindicatoredit.name === ''){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter Outcome Indicator'}))
          return
        }
        if(!isNaN(outcomeindicatoredit.name)){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter a valid Outcome Indicator'}))
          return
        }
        if(outcomeindicatortargetedit.value === ''){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter Outcome Indicator Target Value'}))
          return
        }
        if(isNaN(outcomeindicatortargetedit.value)){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter a valid Outcome Indicator Target Value'}))
          return
        }
        if(outcomeindicatortargetedit.measurement === ''){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter Outcome Indicator Target Measurement Unit'}))
          return
        }
        if(!isNaN(outcomeindicatortargetedit.measurement)){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter a valid Outcome Indicator Target Measurement Unit'}))
          return
        }
        if(outcomeindicatortargetedit.year === ''){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter Outcome Indicator Target Year'}))
          return
        }
        if(isNaN(outcomeindicatortargetedit.year)){
          dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage: 'Please enter a valid Outcome Indicator Target Year'}))
          return
        }

        dispatch(updateOutcomeIndicatorData(outcomeindicatoredit,outcomeindicatortargetedit))
        handleClose9()
        

      }

      const handleChangeGender = (id) => {
        let newGender = editGender.map(g => ({...g}))
        newGender = newGender.map(g => {if(g.id === id){g.selected = !g.selected} return g})
        if(id === 1){
          newGender = newGender.map(s => {if(s.id !== 1){s.selected = false} return s})
        }
        if(id !== 1){
          newGender = newGender.map(s => {if(s.id === 1){s.selected = false} return s})
        }
        
        dispatch(genderActions.setEditGender({editGender: newGender})) 
        dispatch(genderActions.setEditGenderMessage({editGenderMessage: ''})) 
      };

      const handleSDGChange = (event) => {
        const a = event.target.value.split('-')
        if(a[0] && a[1]){
        dispatch(sdgsubschemeActions.setSdgEdit({sdgEdit: a[0]})) 
        dispatch(sdgsubschemeActions.setSdgEditName({sdgEditName: a[1]}))
        }
      };

      const handleSDGEdit = () => {
        if(sdgEdit === ''){
          return
        }
        dispatch(updateSdg(params.id,sdgEdit,sdgEditName))
        handleClose7()
      }

      const handleOutputNameChange = (event) => {
        setOutputCreateMessage('')
        dispatch(outputsActions.setOutputName({outputName:event.target.value}))
      }

      const handleOutcomeNameChange = (event) => {
        setOutcomeCreateMessage('')
        dispatch(outcomesActions.setOutcomeName({outcomeName:event.target.value}))
      }

      const handleOutputIndicatorName = (event) => {
        setOutputCreateMessage('')
        setOutputIndicatorName(event.target.value)
      }

      const handleOutcomeIndicatorName = (event) => {
        setOutcomeCreateMessage('')
        setOutcomeIndicatorName(event.target.value)
      }

      const handleOutputTargetValue = (event) => {
        setOutputCreateMessage('')
        setOutputTargetValue(event.target.value)
      }

      const handleOutcomeTargetValue = (event) => {
        setOutcomeCreateMessage('')
        setOutcomeTargetValue(event.target.value)
      }

      const handleOutputTargetMeasurement = (event) => {
        setOutputCreateMessage('')
        setOutputTargetMeasurement(event.target.value)
      }

      const handleOutcomeTargetMeasurement = (event) => {
        setOutcomeCreateMessage('')
        setOutcomeTargetMeasurement(event.target.value)
      }

      const handleOutputTargetYear = (event) => {
        setOutputCreateMessage('')
        setOutputTargetYear(event.target.value)
      }

      const handleOutcomeTargetYear = (event) => {
        setOutcomeCreateMessage('')
        setOutcomeTargetYear(event.target.value)
      }

      const handleAddOutputIndicatorRow = (id) => {

        if(Object.keys(schemeSearchResult).length === 0) {
        return setOutputCreateMessage('No Scheme Selected')}
  
        if(Object.keys(subSchemeSearchResult).length === 0) {
        return setOutputCreateMessage('No Sub Scheme Selected')}

        if((outputname === '') && (newOutputId === '')) {
        return setOutputCreateMessage('No Output Entered')}

        if(outputIndicatorName === '') {
        return setOutputCreateMessage('No Output Indicator Entered')}

        if(outputTargetValue === '') {
        return setOutputCreateMessage('No Target Value Entered')}

        if(isNaN(outputTargetValue)) {
          return setOutputCreateMessage('Enter a valid Target Value')}

        if(outputTargetMeasurement === '') {
        return setOutputCreateMessage('No Target Measurement Entered')}

        if(!isNaN(outputTargetMeasurement)) {
          return setOutputCreateMessage('Enter a valid Target Measurement')}

        if(outputTargetYear === '') {
        return setOutputCreateMessage('No Target Year Selected')}

        if(isNaN(outputTargetYear)) {
          return setOutputCreateMessage('Enter a valid Target Year')}


      const item = {
        id:id,
        name: outputIndicatorName,
        targetValue: outputTargetValue,
        targetMeasurement: outputTargetMeasurement,
        targetYear:outputTargetYear
      };

      setOutputIndicatorRows([...outputIndicatorRows,item])
      setOutputIndicatorRowCount(prevCount => prevCount + 1)
      setOutputIndicatorName('')
      setOutputTargetValue('')
      setOutputTargetMeasurement('')
    };

    const handleAddOutcomeIndicatorRow = (id) => {

      if(Object.keys(schemeSearchResult).length === 0) {
      return setOutcomeCreateMessage('No Scheme Selected')}

      if(Object.keys(subSchemeSearchResult).length === 0) {
      return setOutcomeCreateMessage('No Sub Scheme Selected')}

      if((outcomename === '') && (newOutcomeId === '')) {
      return setOutcomeCreateMessage('No Outcome Entered')}

      if(outcomeIndicatorName === '') {
      return setOutcomeCreateMessage('No Outcome Indicator Entered')}

      if(outcomeTargetValue === '') {
      return setOutcomeCreateMessage('No Target Value Entered')}

      if(isNaN(outcomeTargetValue)) {
        return setOutcomeCreateMessage('Enter a valid Target Value')}

      if(outcomeTargetMeasurement === '') {
      return setOutcomeCreateMessage('No Target Measurement Entered')}

      if(!isNaN(outcomeTargetMeasurement)) {
        return setOutcomeCreateMessage('Enter a valid Target Measurement')}

      if(outcomeTargetYear === '') {
      return setOutcomeCreateMessage('No Target Year Selected')}

      if(isNaN(outcomeTargetYear)) {
        return setOutcomeCreateMessage('Enter a valid Target Year')}

    const item = {
      id:id,
      name: outcomeIndicatorName,
      targetValue: outcomeTargetValue,
      targetMeasurement: outcomeTargetMeasurement,
      targetYear:outcomeTargetYear
    };

    setOutcomeIndicatorRows([...outcomeIndicatorRows,item])
    setOutcomeIndicatorRowCount(prevCount => prevCount + 1)
    setOutcomeIndicatorName('')
    setOutcomeTargetValue('')
    setOutcomeTargetMeasurement('')
  };

      const handleRemoveOutputIndicatorRow = (idx) => {
        const rows = outputIndicatorRows.filter((item) => item.id !== idx)
        setOutputIndicatorRows([...rows])
        
      }

      const handleRemoveOutcomeIndicatorRow = (idx) => {
        const rows = outcomeIndicatorRows.filter((item) => item.id !== idx)
        setOutcomeIndicatorRows([...rows])
        
      }

    const handleSearchType = (event) => {
        setSchemeSearchType(event.target.value)
        
      }

      const handleSubSchemeSearchType = (event) => {
        setSubSchemeSearchType(event.target.value)
        
      }

      const handleSearchSchemeStateNameClick = (scheme) => {
        setSchemeSearchResult(scheme)
        setOutputCreateMessage('')
        dispatch(schemesActions.setSchemeStateName({schemeStateName:scheme.state_name}))
        dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
        dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
        
      }
    
      const handleSearchSchemeCenterNameClick = (scheme) => {
        setSchemeSearchResult(scheme)
        setOutputCreateMessage('')
        dispatch(schemesActions.setSchemeCenterName({schemeCenterName:scheme.center_name}))
        dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
        dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
        
      }
    
      const handleSearchSchemeStateCodeClick = (scheme) => {
        setSchemeSearchResult(scheme)
        setOutputCreateMessage('')
        dispatch(schemesActions.setSchemeStateName({schemeStateName:scheme.state_name}))
        dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
        dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
        setSchemeSearchType('statename')
       
      }
    
      const handleSearchSchemeCenterCodeClick = (scheme) => {
        setSchemeSearchResult(scheme)
        setOutputCreateMessage('')
        dispatch(schemesActions.setSchemeCenterName({schemeCenterName:scheme.center_name}))
        dispatch(schemesActions.setSchemeSearchMessage({searchMessage:''}))
        dispatch(schemesActions.setSchemeSearch({schemeSearch: []})) 
        setSchemeSearchType('centername')
        
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

      const handleSearchSubSchemeNameClick = (subscheme) => {
        setSubSchemeSearchResult(subscheme)
        setOutputCreateMessage('')
        setOutcomeCreateMessage('')
        dispatch(subschemesActions.setSubSchemeName({subschemename:subscheme.name}))
        dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
        dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
       
      }
    
      const handleSearchSubSchemeCodeClick = (subscheme) => {
        setSubSchemeSearchResult(subscheme)
        setOutputCreateMessage('')
        setOutcomeCreateMessage('')
        dispatch(subschemesActions.setSubSchemeName({subschemename:subscheme.name}))
        dispatch(subschemesActions.setSearchMessage({searchMessage:''}))
        dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
        setSubSchemeSearchType('name')
       
      }

      const handleOutputChange = (event) => {
        dispatch(outputsActions.setOutputSearchMessage({searchMessage:''}))
        setOutputId(event.target.value)
      }

      const handleStateShareChange = (event) => {
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:''}))
        dispatch(outlayActions.setEditStateShare({editStateShare: event.target.value}))
      }

      const handleCenterShareChange = (event) => {
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:''}))
        dispatch(outlayActions.setEditCenterShare({editCenterShare: event.target.value}))
      }

      const handleEditOutputChange = (event) => {
        dispatch(outputsActions.setEditOutputMessage({editOutputMessage:''}))
        dispatch(outputsActions.setEditOutput({editOutput: event.target.value}))
      }

      const handleEditOutcomeChange = (event) => {
        dispatch(outcomesActions.setEditOutcomeMessage({editOutcomeMessage:''}))
        dispatch(outcomesActions.setEditOutcome({editOutcome: event.target.value}))
      }

      const handleNewOutput = () => {
        handleOpen1()
      }

      const handleNewOutcome = () => {
        handleOpen4()
      }

    const [open1, setOpen1] = React.useState(false);

    const handleOpen1 = () => {
      setOpen1(true)
    };
    const handleClose1 = () => {
      setOpen1(false)
      dispatch(outputsActions.setOutputName({outputName:''}))
      setOutputIndicatorRows([])
      setOutputIndicatorName('')
      setOutputTargetValue('')
      setOutputTargetMeasurement('')
      setOutputCreateMessage('')
    };

    const [open8, setOpen8] = React.useState(false);

    const handleOpen8 = (id) => {
      
      setOpen8(true)
      handleClose2()
      dispatch(getOutputIndicatorEditData(id))
      
    };
    const handleClose8 = () => {
      setOpen8(false)
      dispatch(deptUserEntryActions.setOutputEditMessage({outputeditmessage:''})) 
      dispatch(deptUserEntryActions.setIndicatorEdit({indicatorEdit:{}}))    
      dispatch(deptUserEntryActions.setIndicatorTargetEdit({indicatorTargetEdit:{}}))
    };

    const [open17, setOpen17] = React.useState(false);
    const [allowDeleteOutput, setAllowDeleteOutput] = React.useState(false);

    const handleOpen17 = (id) => {
      setOpen17(true)
      const count = outputsearch.length 
      if(count === 1){
        setAllowDeleteOutput(false)
        return
      }
      setAllowDeleteOutput(true)
      dispatch(outputsActions.setOutputDeleteId({outputDeleteId:id})) 
    };
    const handleClose17 = () => {
      setOpen17(false)
      dispatch(outputsActions.setOutputDeleteId({outputDeleteId:''})) 
      setAllowDeleteOutput(false)
    };

    const handleOutputDelete = () => {
      dispatch(deleteOutputData(outputDeleteId))
      handleClose17()
    }

    const [open15, setOpen15] = React.useState(false);
    const [allowDeleteOutputIndicator, setAllowDeleteOutputIndicator] = React.useState(false);

    const handleOpen15 = (id) => {
      setOpen15(true)
      handleClose2()
      const count = outputindicatorsearch.length 
      if(count === 1){
        setAllowDeleteOutputIndicator(false)
        return
      }
      setAllowDeleteOutputIndicator(true)
      dispatch(outputindicatorActions.setOutputIndicatorDeleteId({outputIndicatorDeleteId:id})) 
    };
    const handleClose15 = () => {
      setOpen15(false)
      dispatch(outputindicatorActions.setOutputIndicatorDeleteId({outputIndicatorDeleteId:''})) 
      setAllowDeleteOutputIndicator(false)
    };

    const handleOutputIndicatorDelete = () => {
      dispatch(deleteOutputIndicatorData(outputIndicatorDeleteId))
      handleClose15()
    }

    const [open18, setOpen18] = React.useState(false);
    const [allowDeleteOutcome, setAllowDeleteOutcome] = React.useState(false);

    const handleOpen18 = (id) => {
      setOpen18(true)
      const count = outcomesearch.length 
      if(count === 1){
        setAllowDeleteOutcome(false)
        return
      }
      setAllowDeleteOutcome(true)
      dispatch(outcomesActions.setOutcomeDeleteId({outcomeDeleteId:id})) 
    };
    const handleClose18 = () => {
      setOpen18(false)
      dispatch(outcomesActions.setOutcomeDeleteId({outcomeDeleteId:''})) 
      setAllowDeleteOutcome(false)
    };

    const handleOutcomeDelete = () => {
      dispatch(deleteOutcomeData(outcomeDeleteId))
      handleClose18()
    }

    const [open16, setOpen16] = React.useState(false);
    const [allowDeleteOutcomeIndicator, setAllowDeleteOutcomeIndicator] = React.useState(false);

    const handleOpen16 = (id) => {
      setOpen16(true)
      handleClose5()
      const count = outcomeindicatorsearch.length 
      if(count === 1){
        setAllowDeleteOutcomeIndicator(false)
        return
      }
      setAllowDeleteOutcomeIndicator(true)
      dispatch(outcomeindicatorActions.setOutcomeIndicatorDeleteId({outcomeIndicatorDeleteId:id})) 
    };
    const handleClose16 = () => {
      setOpen16(false)
      dispatch(outcomeindicatorActions.setOutcomeIndicatorDeleteId({outcomeIndicatorDeleteId:''})) 
      setAllowDeleteOutcomeIndicator(false)
    };

    const handleOutcomeIndicatorDelete = () => {
      dispatch(deleteOutcomeIndicatorData(outcomeIndicatorDeleteId))
      handleClose16()
    }

    const [open9, setOpen9] = React.useState(false);

    const handleOpen9 = (id) => {
      
      setOpen9(true)
      handleClose5()
      dispatch(getOutcomeIndicatorEditData(id))
      
    };
    const handleClose9 = () => {
      setOpen9(false)
      dispatch(deptUserEntryActions.setOutcomeEditMessage({outcomeeditmessage:''})) 
      dispatch(deptUserEntryActions.setOutcomeIndicatorEdit({outcomeindicatorEdit:{}}))    
      dispatch(deptUserEntryActions.setOutcomeIndicatorTargetEdit({outcomeindicatorTargetEdit:{}}))
    };

    const [open4, setOpen4] = React.useState(false);

    const handleOpen4 = () => {
      setOpen4(true)
    };
    const handleClose4 = () => {
      setOpen4(false)
      dispatch(outcomesActions.setOutcomeName({outcomeName:''}))
      setOutcomeIndicatorRows([])
      setOutcomeIndicatorName('')
      setOutcomeTargetValue('')
      setOutcomeTargetMeasurement('')
      setOutcomeCreateMessage('')
    };

    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = (id) => {
      setOpen2(true)
      dispatch(getOutputIndicatorsData(id))
      dispatch(getOutputTargetData(id))
     
    };
    const handleClose2 = () => {
      setOpen2(false)
      dispatch(outputtargetActions.setOutputTargets({targets: []}))
      dispatch(outputindicatorActions.setOutputIndicatorSearch({searchOutputIndicator: []}))
    };

    const [open5, setOpen5] = React.useState(false);

    const handleOpen5 = (id) => {
      setOpen5(true)
      dispatch(getOutcomeIndicatorsData(id))
      dispatch(getOutcomeTargetData(id))
      
    };
    const handleClose5 = () => {
      setOpen5(false)
      dispatch(outcometargetActions.setOutcomeTargets({targets: []}))
      dispatch(outcomeindicatorActions.setOutcomeIndicatorSearch({searchOutcomeIndicator: []}))
    };

    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = (id) => {
      setOpen3(true)
      setNewOutputId(id)
    };
    const handleClose3 = () => {
      setOpen3(false)
      setOutputIndicatorRows([])
      setOutputIndicatorName('')
      setOutputTargetValue('')
      setOutputTargetMeasurement('')
      setOutputCreateMessage('')
    };

    const [open7, setOpen7] = React.useState(false);

    const handleOpen7 = () => {
      setOpen7(true)
      dispatch(getSdgsubschemeData())
      dispatch(sdgsubschemeActions.setSdgEdit({sdgEdit: sdgId}))
      dispatch(sdgsubschemeActions.setSdgEditName({sdgEditName: sdgName}))
      
    };
    const handleClose7 = () => {
      setOpen7(false)
      dispatch(sdgsubschemeActions.setSdgEdit({sdgEdit: ''}))
      dispatch(sdgsubschemeActions.setSdgEditName({sdgEditName: ''}))
    };

  



    const [open10, setOpen10] = React.useState(false);

    const handleOpen10 = () => {
      dispatch(socialActions.setEditSocial({editSocial: social}))
      setOpen10(true)
    };
    const handleClose10 = () => {
      setOpen10(false)
      dispatch(socialActions.setEditSocial({editSocial: []}))
      dispatch(socialActions.setEditSocialMessage({editSocialMessage: ''}))
    };

    const handleUpdateSocial = () => {
      const g = editSocial.filter(d => d.selected === true)
      if(g.length === 0){
        dispatch(socialActions.setEditSocialMessage({editSocialMessage: 'Please select a social category'}))
        return
      }
      dispatch(updateSocialData(params.id,editSocial))
      handleClose10()
    }

    const [open11, setOpen11] = React.useState(false);

    const handleOpen11 = () => {
      dispatch(genderActions.setEditGender({editGender: gender}))
      setOpen11(true)
    };
    const handleClose11 = () => {
      setOpen11(false)
      dispatch(genderActions.setEditGender({editGender: []}))
      dispatch(genderActions.setEditGenderMessage({editGenderMessage: ''}))
    };

    const handleUpdateGender = () => {
      const g = editGender.filter(d => d.selected === true)
      if(g.length === 0){
        dispatch(genderActions.setEditGenderMessage({editGenderMessage: 'Please select a gender'}))
        return
      }
      dispatch(updateGenderData(params.id,editGender))
      handleClose11()
    }

    const [open13, setOpen13] = React.useState(false);

    const handleOpen13 = (id,name) => {
      dispatch(outputsActions.setEditOutput({editOutput: name}))
      dispatch(outputsActions.setEditOutputId({editOutputId: id}))
      setOpen13(true)
    };
    const handleClose13 = () => {
      setOpen13(false)
      dispatch(outputsActions.setEditOutput({editOutput: ''}))
      dispatch(outputsActions.setEditOutputId({editOutputId: ''}))
      dispatch(outputsActions.setEditOutputMessage({editOutputMessage: ''}))
    };

    const handleUpdateOutput = () => {
      if(editOutput === ''){
        dispatch(outputsActions.setEditOutputMessage({editOutputMessage: 'Please enter output'}))
        return
      }
      dispatch(updateOutputData(editOutputId,editOutput))
      handleClose13()
    }

    const [open14, setOpen14] = React.useState(false);

    const handleOpen14 = (id,name) => {
      dispatch(outcomesActions.setEditOutcome({editOutcome: name}))
      dispatch(outcomesActions.setEditOutcomeId({editOutcomeId: id}))
      setOpen14(true)
    };
    const handleClose14 = () => {
      setOpen14(false)
      dispatch(outcomesActions.setEditOutcome({editOutcome: ''}))
      dispatch(outcomesActions.setEditOutcomeId({editOutcomeId: ''}))
      dispatch(outcomesActions.setEditOutcomeMessage({editOutcomeMessage: ''}))
    };

    const handleUpdateOutcome = () => {
      if(editOutcome === ''){
        dispatch(outcomesActions.setEditOutcomeMessage({editOutcomeMessage: 'Please enter outcome'}))
        return
      }
      dispatch(updateOutcomeData(editOutcomeId,editOutcome))
      handleClose14()
    }

    const [open12, setOpen12] = React.useState(false);

    const handleOpen12 = () => {
      dispatch(outlayActions.setEditStateShare({editStateShare: stateShare}))
      dispatch(outlayActions.setEditCenterShare({editCenterShare: centerShare}))
      setOpen12(true)
    };
    const handleClose12 = () => {
      setOpen12(false)
      dispatch(outlayActions.setEditStateShare({editStateShare: ''}))
      dispatch(outlayActions.setEditCenterShare({editCenterShare: ''}))
    };

    const handleUpdateOutlay = () => {
      if(editCenterShare === ''){
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:'Please enter a value for center share'}))
        return
      }
      if(isNaN(editCenterShare)){
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:'Please enter a numeric value for center share'}))
        return
      }
      if(editCenterShare < 0){
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:'Please enter a positive value for center share'}))
        return
      }
      if(editStateShare === ''){
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:'Please enter a value for state share'}))
        return
      }
      if(isNaN(editStateShare)){
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:'Please enter a numeric value for state share'}))
        return
      }
      if(editStateShare < 0){
        dispatch(outlayActions.setEditOutlayMessage({editOutlayMessage:'Please enter a positive value for state share'}))
        return
      }
      dispatch(updateStateCenterData(params.id,parseFloat(editStateShare),parseFloat(editCenterShare)))
      handleClose12()
    }
    

    const [open6, setOpen6] = React.useState(false);

    const handleOpen6 = (id) => {
      setOpen6(true)
      setNewOutcomeId(id)
    };
    const handleClose6 = () => {
      setOpen6(false)
      setOutcomeIndicatorRows([])
      setOutcomeIndicatorName('')
      setOutcomeTargetValue('')
      setOutcomeTargetMeasurement('')
      setOutcomeCreateMessage('')
    };

    const handleNewOutputSubmit = () => {

      if(Object.keys(schemeSearchResult).length === 0) {
        return setOutputCreateMessage('No Scheme Selected')}
  
      if(Object.keys(subSchemeSearchResult).length === 0) {
        return setOutputCreateMessage('No Sub Scheme Selected')}

      if(outputname === '') {
        return setOutputCreateMessage('No Output Entered')}

      if(outputIndicatorRows.length === 0) {
        return setOutputCreateMessage('No Output Indicator Details Entered')}

      const output = {
          name:outputname,
          department_id: departmentId,
          division_id: divisionId,
          scheme_id: schemeSearchResult.id,
          subscheme_id:subSchemeSearchResult.id
        };

      dispatch(storeNewOutputData(output,outputIndicatorRows))
      handleClose1()

    }

    const handleEditSocial = () => {
      handleOpen10();
    }

    const handleEditGender = () => {
      handleOpen11();
    }

    const handleEditSDG = () => {
      handleOpen7()
    }

    const handleEditOutlay = () => {
      handleOpen12();
    }

    const handleNewOutcomeSubmit = () => {

      if(Object.keys(schemeSearchResult).length === 0) {
        return setOutcomeCreateMessage('No Scheme Selected')}
  
      if(Object.keys(subSchemeSearchResult).length === 0) {
        return setOutcomeCreateMessage('No Sub Scheme Selected')}

      if(outcomename === '') {
        return setOutcomeCreateMessage('No Outcome Entered')}

      if(outcomeIndicatorRows.length === 0) {
        return setOutcomeCreateMessage('No Outcome Indicator Details Entered')}

      const outcome = {
          name:outcomename,
          department_id: departmentId,
          division_id: divisionId,
          scheme_id: schemeSearchResult.id,
          subscheme_id:subSchemeSearchResult.id
        };

      dispatch(storeNewOutcomeData(outcome,outcomeIndicatorRows))
      handleClose4()

    }

    const handleNewOutputIndicatorSubmit = () => {

      if(Object.keys(schemeSearchResult).length === 0) {
        return setOutputCreateMessage('No Scheme Selected')}
  
      if(Object.keys(subSchemeSearchResult).length === 0) {
        return setOutputCreateMessage('No Sub Scheme Selected')}

      if(outputIndicatorRows.length === 0) {
        return setOutputCreateMessage('No Output Indicator Details Entered')}

      const output = {
          id:newOutputId,
          department_id: departmentId,
          division_id: divisionId,
          scheme_id: schemeSearchResult.id,
          subscheme_id:subSchemeSearchResult.id
        };

      dispatch(storeNewOutputIndicatorData(output,outputIndicatorRows))
      handleClose3()
    }

    const handleNewOutcomeIndicatorSubmit = () => {

      if(Object.keys(schemeSearchResult).length === 0) {
        return setOutcomeCreateMessage('No Scheme Selected')}
  
      if(Object.keys(subSchemeSearchResult).length === 0) {
        return setOutcomeCreateMessage('No Sub Scheme Selected')}

      if(outcomeIndicatorRows.length === 0) {
        return setOutcomeCreateMessage('No Outcome Indicator Details Entered')}

      const outcome = {
          id:newOutcomeId,
          department_id: departmentId,
          division_id: divisionId,
          scheme_id: schemeSearchResult.id,
          subscheme_id:subSchemeSearchResult.id
        };

      dispatch(storeNewOutcomeIndicatorData(outcome,outcomeIndicatorRows))
      handleClose6()
    }

    const handleCloseNewOutputNotificationSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutputNotificationSuccess({newoutputnotificationsuccess:false}))
    };

    const handleCloseNewOutcomeNotificationSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutcomeNotificationSuccess({newoutcomenotificationsuccess:false}))
    };

    const handleCloseNewOutputNotificationFailure = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutputNotificationFailure({newoutputnotificationfailure:false}))
    };

    const handleCloseNewOutcomeNotificationFailure = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutcomeNotificationFailure({newoutcomenotificationfailure:false}))
    };

    const handleCloseOutputIndicatorEditNotificationSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationSuccess({outputindicatoreditnotificationsuccess:false}))
    };

    const handleCloseOutcomeIndicatorEditNotificationSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationSuccess({outcomeindicatoreditnotificationsuccess:false}))
    };

    const handleCloseOutputIndicatorEditNotificationFailure = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setOutputIndicatorEditNotificationFailure({outputindicatoreditnotificationfailure:false}))
    };

    const handleCloseOutcomeIndicatorEditNotificationFailure = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setOutcomeIndicatorEditNotificationFailure({outcomeindicatoreditnotificationfailure:false}))
    };

    const handleCloseNewOutputIndicatorNotificationSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationSuccess({newoutputindicatornotificationsuccess:false}))
    };

    const handleCloseNewOutcomeIndicatorNotificationSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationSuccess({newoutcomeindicatornotificationsuccess:false}))
    };

    const handleCloseNewOutcomeIndicatorNotificationFailure = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutcomeIndicatorNotificationFailure({newoutcomeindicatornotificationfailure:false}))
    };

    const handleCloseNewOutputIndicatorNotificationFailure = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(deptUserEntryActions.setNewOutputIndicatorNotificationFailure({newoutputindicatornotificationfailure:false}))
    };

    const handleCloseNewOutputIndicatorDeleteSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(outputindicatorActions.setOutputIndicatorDeleteSuccess({outputIndicatorDeleteSuccess:false}))
    };

    const handleCloseNewOutcomeIndicatorDeleteSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(outcomeindicatorActions.setOutcomeIndicatorDeleteSuccess({outcomeIndicatorDeleteSuccess:false}))
    };

    const handleCloseOutputDeleteSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(outputsActions.setOutputDeleteSuccess({outputDeleteSuccess:false}))
    };

    const handleCloseOutcomeDeleteSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(outcomesActions.setOutcomeDeleteSuccess({outcomeDeleteSuccess:false}))
    };

  return (
    <>
    <Snackbar open={outcomeDeleteSuccess} autoHideDuration={4000} onClose={handleCloseOutcomeDeleteSuccess}>
        <Alert onClose={handleCloseOutcomeDeleteSuccess} severity="success" sx={{ width: '100%' }}>
        Outcome deleted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outputDeleteSuccess} autoHideDuration={4000} onClose={handleCloseOutputDeleteSuccess}>
        <Alert onClose={handleCloseOutputDeleteSuccess} severity="success" sx={{ width: '100%' }}>
        Output deleted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeIndicatorDeleteSuccess} autoHideDuration={4000} onClose={handleCloseNewOutcomeIndicatorDeleteSuccess}>
        <Alert onClose={handleCloseNewOutcomeIndicatorDeleteSuccess} severity="success" sx={{ width: '100%' }}>
        Outcome Indicator deleted successfully!
        </Alert>
      </Snackbar>
    <Snackbar open={outputIndicatorDeleteSuccess} autoHideDuration={4000} onClose={handleCloseNewOutputIndicatorDeleteSuccess}>
        <Alert onClose={handleCloseNewOutputIndicatorDeleteSuccess} severity="success" sx={{ width: '100%' }}>
        Output Indicator deleted successfully!
        </Alert>
      </Snackbar>
    <Snackbar open={newoutputnotificationsuccess} autoHideDuration={4000} onClose={handleCloseNewOutputNotificationSuccess}>
        <Alert onClose={handleCloseNewOutputNotificationSuccess} severity="success" sx={{ width: '100%' }}>
        Output created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutcomenotificationsuccess} autoHideDuration={4000} onClose={handleCloseNewOutcomeNotificationSuccess}>
        <Alert onClose={handleCloseNewOutcomeNotificationSuccess} severity="success" sx={{ width: '100%' }}>
        Outcome created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutputnotificationfailure} autoHideDuration={4000} onClose={handleCloseNewOutputNotificationFailure}>
        <Alert onClose={handleCloseNewOutputNotificationFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutcomenotificationfailure} autoHideDuration={4000} onClose={handleCloseNewOutcomeNotificationFailure}>
        <Alert onClose={handleCloseNewOutcomeNotificationFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={outputindicatoreditnotificationsuccess} autoHideDuration={4000} onClose={handleCloseOutputIndicatorEditNotificationSuccess}>
        <Alert onClose={handleCloseOutputIndicatorEditNotificationSuccess} severity="success" sx={{ width: '100%' }}>
        Output Indicator updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeindicatoreditnotificationsuccess} autoHideDuration={4000} onClose={handleCloseOutcomeIndicatorEditNotificationSuccess}>
        <Alert onClose={handleCloseOutcomeIndicatorEditNotificationSuccess} severity="success" sx={{ width: '100%' }}>
        Outcome Indicator updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={outputindicatoreditnotificationfailure} autoHideDuration={4000} onClose={handleCloseOutputIndicatorEditNotificationFailure}>
        <Alert onClose={handleCloseOutputIndicatorEditNotificationFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={outcomeindicatoreditnotificationfailure} autoHideDuration={4000} onClose={handleCloseOutcomeIndicatorEditNotificationFailure}>
        <Alert onClose={handleCloseOutcomeIndicatorEditNotificationFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutputindicatornotificationsuccess} autoHideDuration={4000} onClose={handleCloseNewOutputIndicatorNotificationSuccess}>
        <Alert onClose={handleCloseNewOutputIndicatorNotificationSuccess} severity="success" sx={{ width: '100%' }}>
        Output Indicator created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutcomeindicatornotificationsuccess} autoHideDuration={4000} onClose={handleCloseNewOutcomeIndicatorNotificationSuccess}>
        <Alert onClose={handleCloseNewOutcomeIndicatorNotificationSuccess} severity="success" sx={{ width: '100%' }}>
        Outcome Indicator created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutcomeindicatornotificationfailure} autoHideDuration={4000} onClose={handleCloseNewOutcomeIndicatorNotificationFailure}>
        <Alert onClose={handleCloseNewOutcomeIndicatorNotificationFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={newoutputindicatornotificationfailure} autoHideDuration={4000} onClose={handleCloseNewOutputIndicatorNotificationFailure}>
        <Alert onClose={handleCloseNewOutputIndicatorNotificationFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Dialog
        open={open17}
        onClose={handleClose17}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Output Delete"}
        </DialogTitle>
        {allowDeleteOutput ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this output?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the output as Output cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteOutput && <DialogActions>
          <Button onClick={handleClose17}>Disagree</Button>
          <Button onClick={handleOutputDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>}
      </Dialog>
      <Dialog
        open={open15}
        onClose={handleClose15}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Output Indicator Delete"}
        </DialogTitle>
        {allowDeleteOutputIndicator ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this output indicator?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the indicator as Output Indicator cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteOutputIndicator && <DialogActions>
          <Button onClick={handleClose15}>Disagree</Button>
          <Button onClick={handleOutputIndicatorDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>}
      </Dialog>
      <Dialog
        open={open18}
        onClose={handleClose18}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Outcome Delete"}
        </DialogTitle>
        {allowDeleteOutcome ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this outcome?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the Outcome as Outcome cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteOutcome && <DialogActions>
          <Button onClick={handleClose18}>Disagree</Button>
          <Button onClick={handleOutcomeDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>}
      </Dialog>
      <Dialog
        open={open16}
        onClose={handleClose16}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Outcome Indicator Delete"}
        </DialogTitle>
        {allowDeleteOutcomeIndicator ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this outcome indicator?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the indicator as Outcome Indicator cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteOutcomeIndicator && <DialogActions>
          <Button onClick={handleClose16}>Disagree</Button>
          <Button onClick={handleOutcomeIndicatorDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>}
      </Dialog>
      
    <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">New Output Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2">Please Enter Output Name</label>
    <input id="name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" onChange={handleOutputNameChange} value={outputname} />
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Output Indicator Name </th>
                    <th className="text-center"> Target Value </th>
                    <th className="text-center"> Target Measurement Unit </th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                    <tr id="addr0" >
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={outputIndicatorName}
                          onChange={handleOutputIndicatorName}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="targetValue"
                          value={outputTargetValue}
                          onChange={handleOutputTargetValue}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="targetMeasurement"
                          value={outputTargetMeasurement}
                          onChange={handleOutputTargetMeasurement}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleAddOutputIndicatorRow(outputIndicatorRowCount)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Output Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Actions</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {(outputIndicatorRows.length !== 0) && outputIndicatorRows.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetValue}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetMeasurement}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleRemoveOutputIndicatorRow(indicator.id)}>Delete</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
        {(outputCreateMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outputCreateMessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleNewOutputSubmit}>Save</p>
        </div>
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">New Outcome Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2">Please Enter Outcome Name</label>
    <input id="name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" onChange={handleOutcomeNameChange} value={outcomename} />
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Outcome Indicator Name </th>
                    <th className="text-center"> Target Value </th>
                    <th className="text-center"> Target Measurement Unit </th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                    <tr id="addr0" >
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={outcomeIndicatorName}
                          onChange={handleOutcomeIndicatorName}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="targetValue"
                          value={outcomeTargetValue}
                          onChange={handleOutcomeTargetValue}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="targetMeasurement"
                          value={outcomeTargetMeasurement}
                          onChange={handleOutcomeTargetMeasurement}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleAddOutcomeIndicatorRow(outcomeIndicatorRowCount)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Outcome Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Actions</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {(outcomeIndicatorRows.length !== 0) && outcomeIndicatorRows.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetValue}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetMeasurement}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleRemoveOutcomeIndicatorRow(indicator.id)}>Delete</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
        {(outcomeCreateMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outcomeCreateMessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleNewOutcomeSubmit}>Save</p>
        </div>
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
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">SDG Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className='mw6'>
              <TextField
              fullWidth
            id="standard-size-normal"
            label="SDG"
            value={`Goal ${sdgEdit} - ${sdgEditName}`}
            variant="standard"
          />
          </div>
          <label htmlFor="exampleDataList" className="f5 b db mb2 mt2">Select SDG</label>
          <select id="department_name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1 mt2" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleSDGChange}>
          <option value='default'>Select the SDG Goal</option>
          {sdgsubscheme.map(sdgsubscheme => {return <option key={sdgsubscheme.id} value={`${sdgsubscheme.goal_number}-${sdgsubscheme.goal_name}`}>{`${sdgsubscheme.goal_number}-${sdgsubscheme.goal_name}`}</option>})}
          </select>
          <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleSDGEdit}>Update SDG</p>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open10}
        onClose={handleClose10}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Update Social Category</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <label htmlFor="exampleDataList" className="f5 b db mb2">Update Social Category</label>
    <FormGroup row>
      {editSocial && editSocial.map(social => {
        return <FormControlLabel control={<Checkbox checked={social.selected}
        onChange={() => handleChangeSocial(social.id)}
        />} label={`${social.name.toUpperCase()}`} />
      })
      }
    </FormGroup>
    {(editSocialMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{editSocialMessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleUpdateSocial}>Update Social</p>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open11}
        onClose={handleClose11}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Update Gender Category</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <label htmlFor="exampleDataList" className="f5 b db mb2">Update Gender Category</label>
    <FormGroup row>
      {editGender && editGender.map(gender => {
        return <FormControlLabel control={<Checkbox checked={gender.selected}
        onChange={() => handleChangeGender(gender.id)}
        />} label={`${gender.name.toUpperCase()}`} />
      })
      }
    </FormGroup>
    {(editGenderMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{editGenderMessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleUpdateGender}>Update Gender</p>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open12}
        onClose={handleClose12}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Outlay Details Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">{"Please Update State Share (Rs. in Laks)"}</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleStateShareChange} value={editStateShare}/>
    <label htmlFor="name" className="f6 b db mb2 nunito">{"Please Update Center Share (Rs. in Laks)"}</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleCenterShareChange} value={editCenterShare}/>
    
    {(editOutlayMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{editOutlayMessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleUpdateOutlay}>Save</p>
</div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open13}
        onClose={handleClose13}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Output Details Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Output Details Edit</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditOutputChange} value={editOutput}/>
    
    {(editOutputMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{editOutputMessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleUpdateOutput}>Save</p>
</div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open14}
        onClose={handleClose14}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Outcome Details Edit</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Outcome Details Edit</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditOutcomeChange} value={editOutcome}/>
    
    {(editOutcomeMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{editOutcomeMessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleUpdateOutcome}>Save</p>
</div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Output Details</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Output Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Actions</th>
          <th className="b--black-80 tc pb3 pr3 b">Delete</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {outputindicatorsearch && outputindicatorsearch.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{(outputindicatortarget.length !== 0) ?  parseFloat(outputindicatortarget.filter(value => value.outputindicator_id === indicator.id)[0].value) : null}</td>
          <td className="pv3 pr3  b--black-80">{(outputindicatortarget.length !== 0) ?  outputindicatortarget.filter(value => value.outputindicator_id === indicator.id)[0].measurement : null}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen8(indicator.id)}>Edit</p></td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-red w3 tc pointer" onClick={() => handleOpen15(indicator.id)}>Delete</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
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
          <span className="b nunito">Outcome Details</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Outcome Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Actions</th>
          <th className="b--black-80 tc pb3 pr3 b">Delete</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {outcomeindicatorsearch && outcomeindicatorsearch.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{(outcomeindicatortarget.length !== 0) ?  parseFloat(outcomeindicatortarget.filter(value => value.outcomeindicator_id === indicator.id)[0].value) : null}</td>
          <td className="pv3 pr3  b--black-80">{(outcomeindicatortarget.length !== 0) ?  outcomeindicatortarget.filter(value => value.outcomeindicator_id === indicator.id)[0].measurement : null}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen9(indicator.id)}>Edit</p></td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-red w3 tc pointer" onClick={() => handleOpen16(indicator.id)}>Delete</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
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
          <span className="b nunito">Edit Indicators Value</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
          <label htmlFor="name" className="f6 b db mb2">Edit Output Indicator</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutputIndicatorEdit} value={outputindicatoredit.name}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Edit Output Indicator Target Value</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="number" aria-describedby="name-desc" onChange={handleOutputTargetValueEdit} value={parseFloat(outputindicatortargetedit.value)}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Edit Output Indicator Target Measurement Unit</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutputTargetMeasurementEdit} value={outputindicatortargetedit.measurement}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
        {(outputeditmessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outputeditmessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleOutputIndicatorEditSubmit}>Save</p>
        </div>
</div>
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
          <span className="b nunito">Edit Indicators Value</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
          <label htmlFor="name" className="f6 b db mb2">Edit Outcome Indicator</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutcomeIndicatorEdit} value={outcomeindicatoredit.name}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Edit Outcome Indicator Target Value</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="number" aria-describedby="name-desc" onChange={handleOutcomeTargetValueEdit} value={parseFloat(outcomeindicatortargetedit.value)}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Edit Outcome Indicator Target Measurement Unit</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutcomeTargetMeasurementEdit} value={outcomeindicatortargetedit.measurement}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
        {(outcomeeditmessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outcomeeditmessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleOutcomeIndicatorEditSubmit}>Save</p>
        </div>
</div>
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
          <span className="b nunito">New Output Indicator Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Output Indicator Name </th>
                    <th className="text-center"> Target Value </th>
                    <th className="text-center"> Target Measurement Unit </th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                    <tr id="addr0" >
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={outputIndicatorName}
                          onChange={handleOutputIndicatorName}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="targetValue"
                          value={outputTargetValue}
                          onChange={handleOutputTargetValue}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="targetMeasurement"
                          value={outputTargetMeasurement}
                          onChange={handleOutputTargetMeasurement}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleAddOutputIndicatorRow(outputIndicatorRowCount)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Output Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Actions</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {(outputIndicatorRows.length !== 0) && outputIndicatorRows.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetValue}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetMeasurement}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleRemoveOutputIndicatorRow(indicator.id)}>Delete</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
        {(outputCreateMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outputCreateMessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleNewOutputIndicatorSubmit}>Save</p>
        </div>
</div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">New Outcome Indicator Entry</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Outcome Indicator Name </th>
                    <th className="text-center"> Target Value </th>
                    <th className="text-center"> Target Measurement Unit </th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                    <tr id="addr0" >
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={outcomeIndicatorName}
                          onChange={handleOutcomeIndicatorName}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="targetValue"
                          value={outcomeTargetValue}
                          onChange={handleOutcomeTargetValue}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="targetMeasurement"
                          value={outcomeTargetMeasurement}
                          onChange={handleOutcomeTargetMeasurement}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleAddOutcomeIndicatorRow(outcomeIndicatorRowCount)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='b'>
              <div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Outcome Indicator</th>
          <th className="b--black-80 tc pb3 pr3 b">Target Value</th>
          <th className="b--black-80 tc pb3 pr3 b">Measurement Unit</th>
          <th className="b--black-80 tc pb3 pr3 b">Actions</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {(outcomeIndicatorRows.length !== 0) && outcomeIndicatorRows.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetValue}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetMeasurement}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleRemoveOutcomeIndicatorRow(indicator.id)}>Delete</p></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>
              
            
          </div>
        </div>
        {(outcomeCreateMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outcomeCreateMessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleNewOutcomeIndicatorSubmit}>Save</p>
        </div>
</div>
          </Typography>
        </Box>
      </Modal>
    {/* <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"><span className='b black'>Search Scheme By:</span></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={schemeSearchType}
        onChange={handleSearchType}
      >
        <FormControlLabel value="statename" control={<Radio />} label="State Name" />
        <FormControlLabel value="centername" control={<Radio />} label="Center Name" />
        <FormControlLabel value="statecode" control={<Radio />} label="State Code" />
        <FormControlLabel value="centercode" control={<Radio />} label="Center Code" />
      </RadioGroup>
    </FormControl>
    {(schemeSearchType === 'statename')?(<div className="black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By State Name</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-50" placeholder="Type to search..." onChange={handleSearchSchemeStateName} value={schemeStateName}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeStateNameClick(scheme)}>{scheme.state_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'centername')?(<div className="black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Center Name</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-50" placeholder="Type to search..." onChange={handleSearchSchemeCenterName} value={schemeCenterName}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeCenterNameClick(scheme)}>{scheme.center_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'statecode')?(<div className="black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By State Code</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-50" placeholder="Type to search..." onChange={handleSearchSchemeStateCode} value={schemeStateCode}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchScheme && searchScheme.map(scheme => {return <p className='b mt1' onClick={() => handleSearchSchemeStateCodeClick(scheme)}>{scheme.state_name}</p>})}
</div>
</div>):null}
{(schemeSearchType === 'centercode')?(<div className="black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Center Code</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-50" placeholder="Type to search..." onChange={handleSearchSchemeCenterCode} value={schemeCenterCode}/>
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
<FormControl>
      <FormLabel id="subscheme"><span className='b black'>Search Sub Scheme By:</span></FormLabel>
      <RadioGroup
        row
        aria-labelledby="subscheme"
        name="row-radio-buttons-group"
        value={subschemeSearchType}
        onChange={handleSubSchemeSearchType}
      >
        <FormControlLabel value="name" control={<Radio />} label="Name" />
        <FormControlLabel value="code" control={<Radio />} label="Code" />
      </RadioGroup>
    </FormControl>
    {(subschemeSearchType === 'name')?(<div className="black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Sub-Scheme Name</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-50" placeholder="Type to search..." onChange={handleSearchSubSchemeName} value={subschemename}/>
<div className='overflow-visible pointer bg-white w-100'>
    {searchSubScheme && searchSubScheme.map(subscheme => {return <p className='b mt1' onClick={() => handleSearchSubSchemeNameClick(subscheme)}>{subscheme.name}</p>})}
</div>
</div>):null}
{(subschemeSearchType === 'code')?(<div className="black-80">
<label htmlFor="exampleDataList" className="f6 b db mb2">Search By Sub-Scheme Code</label>
<input type="text" className="ba b--black-20 pa2 mb2 db w-50" placeholder="Type to search..." onChange={handleSearchSubSchemeCode} value={subschemecode}/>
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
*/}
<div className='ml4'>
      <p className='f4'><span className='b'>State Scheme/Programme :</span> {`${schemeStateCode ? schemeStateCode : '0000'}-${schemeStateName ? schemeStateName : '0000' }`}</p>
      <p className='f4'><span className='b'>Center Scheme/Programme :</span> {`${schemeCenterCode ? schemeCenterCode : 'NAPL'}-${schemeCenterName ? schemeCenterName : 'NAPL'}`}</p>
      <p className='f4'><span className='b'>Sub-Scheme :</span> {`${subschemecode}-${subschemename}`}</p>
      </div>
      <div className='pa4'>
<label htmlFor="exampleDataList" className="f5 b db mb2">Social Category</label>
    <FormGroup row>
      {social && social.map(social => {
        return <FormControlLabel control={<Checkbox checked={social.selected}
        // onChange={() => handleChangeSocial(social.id)}
        />} label={`${social.name.toUpperCase()}`} />
      })
      }
    </FormGroup>
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleEditSocial}>Edit Social</p>  
    <label htmlFor="exampleDataList" className="f5 b db mb2">Gender Category</label>
    <FormGroup row>
      {gender && gender.map(gender => {
        return <FormControlLabel control={<Checkbox checked={gender.selected}
        // onChange={() => handleChangeGender(gender.id)}
         />} label={`${gender.name.toUpperCase()}`} />
      })
      }
    </FormGroup>
    <p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer" onClick={handleEditGender}>Edit Gender</p> 
    <label htmlFor="exampleDataList" className="f5 b db mb2 mt2">SDG Category</label>
    <div className='mw6'>
    <TextField
    fullWidth
  id="standard-size-normal"
  label="SDG"
  value={`Goal ${sdgId} - ${sdgName}`}
  variant="standard"
/>
</div>
<p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer" onClick={handleEditSDG}>Edit SDG</p> 
    {/* <div className="mt2 black-80">
  <div className="measure">
    <label htmlFor="department_name" className="f6 b db mb2">SDG Goal</label>
    <select id="department_name" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleSDGChange}>
    <option value='default'>Select the SDG Goal</option>
    {sdgsubscheme.map(sdgsubscheme => {return <option key={sdgsubscheme.id} value={sdgsubscheme.id}>{sdgsubscheme.goal_name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div> */}
<label htmlFor="exampleDataList" className="f5 b db mb2 mt2">Sub-Scheme Outlay</label>
      <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">{"State Share (Rs. in Lakh)"}</th>
          <th className="b--black-80 tc pb3 pr3 b">{"Center Share (Rs. in Lakh)"}</th>
          <th className="b--black-80 tc pb3 pr3 b">Update Details</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr>
          <td className="pv3 pr3  b--black-80">{stateShare}</td>
          <td className="pv3 pr3  b--black-80">{centerShare}</td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen12()}>Update</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div> 
<p className="f6 link dim br3 ph3 pv2 mb2 mt4 white bg-dark-green w5 tc pointer" onClick={handleNewOutput}>+ Create New Output</p>
<div>
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Output</th>
          <th className="b--black-80 tc pb3 pr3 b">Edit Output Name</th>
          <th className="b--black-80 tc pb3 pr3 b">Delete Output</th>
          <th className="b--black-80 tc pb3 pr3 b">View Details</th>
          <th className="b--black-80 tc pb3 pr3 b">Add Indicator</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {outputsearch && outputsearch.map(output => {
        return (<tr>
          <td className="pv3 pr3  b--black-80">{output.name}</td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen13(output.id,output.name)}>Edit</span></td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-red w3 tc pointer" onClick={()=> handleOpen17(output.id)}>Delete</span></td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen2(output.id)}>View</span></td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen3(output.id)}>Add</span></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div>    
<p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleNewOutcome}>+ Create New Outcome</p>  
              <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3 b">Outcome</th>
          <th className="b--black-80 tc pb3 pr3 b">Edit Outcome Name</th>
          <th className="b--black-80 tc pb3 pr3 b">Delete Outcome</th>
          <th className="b--black-80 tc pb3 pr3 b">View Details</th>
          <th className="b--black-80 tc pb3 pr3 b">Add Indicator</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {outcomesearch && outcomesearch.map(outcome => {
        return (<tr>
          <td className="pv3 pr3  b--black-80">{outcome.name}</td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen14(outcome.id,outcome.name)}>Edit</span></td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-red w3 tc pointer" onClick={()=> handleOpen18(outcome.id)}>Delete</span></td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen5(outcome.id)}>View</span></td>
          <td className="pv3 pr3  b--black-80"><span className="pv1 pr3  b--black-80 f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={()=> handleOpen6(outcome.id)}>Add</span></td>
        </tr>
        ) })}
      </tbody>
    </table>
  </div>
</div> 
          </div>
          </div>
    </>
  )
}

export default AdminEntryForm
