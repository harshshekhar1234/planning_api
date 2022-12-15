import * as React from 'react';
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {migrationActions} from '../../store/migrationSlice';
import { useSelector, useDispatch } from 'react-redux';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function OutcomeForm() {

  const dispatch = useDispatch();

  const outcomes = useSelector((state) => state.migration.outcomes);

  const [outputIndicatorRows, setOutputIndicatorRows] = useState([])
  const [outputIndicator, setOutputIndicator] = useState([])
  const [outputIndicatorRowCount, setOutputIndicatorRowCount] = useState(0)
  const [outputIndicatorName, setOutputIndicatorName] = useState('')
  const [outputname, setOutputName] = useState('')
  const [editOutputId, setEditOutputId] = useState('')
  const [outputeditmessage, setOutputEditMessage] = useState('')
  const [editOutputIndicator, setEditOutputIndicator] = useState({})
  const [outputTargetValue, setOutputTargetValue] = useState('')
  const [outputTargetMeasurement, setOutputTargetMeasurement] = useState('')
  const [outputTargetYear, setOutputTargetYear] = useState('2023')
  const [outputCreateMessage, setOutputCreateMessage] = useState('')
  const [newOutputId, setNewOutputId] = useState(0)
  const [newOutputCheck, setNewOutputCheck] = useState(false)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleOutputNameChange = (event) => {
    setOutputCreateMessage('')
    setOutputName(event.target.value)
  }

  const handleNewOutput = () => {
    dispatch(migrationActions.setMessage({message:''}))
    handleOpen1()
  }

  const [open1, setOpen1] = React.useState(false);

    const handleOpen1 = () => {
      setOpen1(true)
    };
    const handleClose1 = () => {
      setOpen1(false)
      setOutputName('')
      setOutputIndicatorRows([])
      setOutputIndicatorName('')
      setOutputTargetValue('')
      setOutputTargetMeasurement('')
      setOutputCreateMessage('')
    };

    const handleOutputIndicatorName = (event) => {
      setOutputCreateMessage('')
      setOutputIndicatorName(event.target.value)
    }

    const handleOutputTargetValue = (event) => {
      setOutputCreateMessage('')
      setOutputTargetValue(event.target.value)
    }

    const handleOutputTargetMeasurement = (event) => {
      setOutputCreateMessage('')
      setOutputTargetMeasurement(event.target.value)
    }

    const handleOutputTargetYear = (event) => {
      setOutputCreateMessage('')
      setOutputTargetYear(event.target.value)
    }

    const handleAddOutputIndicatorRow = (id) => {

      setOutputCreateMessage('')

      if((outputname === '') && (!newOutputCheck)) {
      return setOutputCreateMessage('No Outcome Entered')}

      if(outputIndicatorName === '') {
      return setOutputCreateMessage('No Outcome Indicator Entered')}

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

  const handleRemoveOutputIndicatorRow = (idx) => {
    const rows = outputIndicatorRows.filter((item) => item.id !== idx)
    setOutputIndicatorRows([...rows])
    
  }

  const handleNewOutputSubmit = () => {

    if(outputname === '') {
      return setOutputCreateMessage('No Output Entered')}

    if(outputIndicatorRows.length === 0) {
      return setOutputCreateMessage('No Output Indicator Details Entered')}

    const output = {
        id:newOutputId,
        name:outputname,
        outcomeIndicators:outputIndicatorRows
      };

    const newOutput = [...outcomes,output]

    setNewOutputId(prevCount => prevCount + 1)
    dispatch(migrationActions.setOutcomes({outcomes:newOutput}))
    handleClose1()

  }

  const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = (indicator,id) => {
      setOpen2(true)
      setEditOutputId(id)
      setOutputIndicator(indicator)
    };

    const handleClose2 = () => {
      setOpen2(false)
      setOutputIndicator([])
    };

    const [open8, setOpen8] = React.useState(false);

    const handleOpen8 = (indicator) => {
      
      setOpen8(true)
      handleClose2()
      setEditOutputIndicator(indicator)
    };
    const handleClose8 = () => {
      setOpen8(false)
      setEditOutputId('')
      setOutputEditMessage('')
      setEditOutputIndicator({})   
    };

    const handleOutputIndicatorEdit = (event) => {
      setOutputEditMessage('')
      const newIndicator = {...editOutputIndicator, name: event.target.value}
      setEditOutputIndicator(newIndicator)
      
    }

    const handleOutputTargetValueEdit = (event) => {
      setOutputEditMessage('')
      const newTarget = {...editOutputIndicator, targetValue: event.target.value}
      
      setEditOutputIndicator(newTarget)
    }

    const handleOutputTargetMeasurementEdit = (event) => {
      setOutputEditMessage('')
      const newTarget = {...editOutputIndicator, targetMeasurement: event.target.value}
      setEditOutputIndicator(newTarget)
    }

    const handleOutputTargetYearEdit = (event) => {
      setOutputEditMessage('')
      const newTarget = {...editOutputIndicator, targetYear: event.target.value}
      setEditOutputIndicator(newTarget)
    }

    const handleOutputIndicatorEditSubmit = () => {
      if(editOutputIndicator.name === ''){
        setOutputEditMessage('Please enter Outcome Indicator')
        return
      }
      if(!isNaN(editOutputIndicator.name)){
        setOutputEditMessage('Please enter valid Outcome Indicator')
        return
      }
      if(editOutputIndicator.targetValue === ''){
        setOutputEditMessage('Please enter Outcome Indicator Target Value')
        return
      }
      if(isNaN(editOutputIndicator.targetValue)){
        setOutputEditMessage('Please enter numeric value for Outcome Indicator Target Value')
        return
      }
      if(editOutputIndicator.targetMeasurement === ''){
        setOutputEditMessage('Please enter Outcome Indicator Target Measurement Unit')
        return
      }
      if(!isNaN(editOutputIndicator.targetMeasurement)){
        setOutputEditMessage('Please enter Outcome Indicator Target Measurement Unit')
        return
      }
      if(editOutputIndicator.targetYear === ''){
        setOutputEditMessage('Please enter Outcome Indicator Target Year')
        return
      }
      if(isNaN(editOutputIndicator.targetYear)){
        setOutputEditMessage('Please enter a valid Outcome Indicator Target Year')
        return
      }

      
      const newOutput = outcomes.filter(output => output.id === editOutputId)
      const b = newOutput[0].outcomeIndicators.filter(indicator => indicator.id !== editOutputIndicator.id)
      const c = [...b,editOutputIndicator]
      const d = {...newOutput[0],outcomeIndicators:c}
      const editOutput = outcomes.filter(output => output.id !== editOutputId)
      const h = [...editOutput,d]
      dispatch(migrationActions.setOutcomes({outcomes:h}))
      handleClose8()

    }

    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = (id) => {
      setOpen3(true)
      setEditOutputId(id)
      setNewOutputCheck(true)
    };
    const handleClose3 = () => {
      setOpen3(false)
      setNewOutputCheck(false)
      setEditOutputId('')
      setOutputIndicatorRows([])
      setOutputIndicatorName('')
      setOutputTargetValue('')
      setOutputTargetMeasurement('')
      setOutputCreateMessage('')
    };

    const handleNewOutputIndicatorSubmit = () => {

      if(outputIndicatorRows.length === 0) {
        return setOutputCreateMessage('No Outcome Indicator Details Entered')}

      const newOutput = outcomes.filter(output => output.id === editOutputId)
      const c = [...newOutput[0].outcomeIndicators,...outputIndicatorRows]
      const d = {...newOutput[0],outcomeIndicators:c}
      const editOutput = outcomes.filter(output => output.id !== editOutputId)
      const h = [...editOutput,d]
      dispatch(migrationActions.setOutcomes({outcomes:h}))
      handleClose3()
    }

    const [open15, setOpen15] = React.useState(false);
    const [allowDeleteOutputIndicator, setAllowDeleteOutputIndicator] = React.useState(false);
    const [indicatorDeleteId, setIndicatorDeleteId] = useState('')

    const handleOpen15 = (id) => {
      setOpen15(true)
      handleClose2()
      const newOutput = outcomes.filter(output => output.id === editOutputId)
      const count =  newOutput[0].outcomeIndicators.length
      if(count === 1){
        setAllowDeleteOutputIndicator(false)
        return
      }
      setAllowDeleteOutputIndicator(true)
      setIndicatorDeleteId(id)
    };

    const handleClose15 = () => {
      setOpen15(false)
      setIndicatorDeleteId('')
      setEditOutputId('')
      setAllowDeleteOutputIndicator(false)
    };

    const handleOutputIndicatorDelete = () => {
      const newOutput = outcomes.filter(output => output.id === editOutputId)
      const b = newOutput[0].outcomeIndicators.filter(indicator => indicator.id !== indicatorDeleteId)
      const d = {...newOutput[0],outcomeIndicators:b}
      const editOutput = outcomes.filter(output => output.id !== editOutputId)
      const h = [...editOutput,d]
      dispatch(migrationActions.setOutcomes({outcomes:h}))
      handleClose15()
    }

    const [open17, setOpen17] = React.useState(false);
    const [allowDeleteOutput, setAllowDeleteOutput] = React.useState(false);

    const handleOpen17 = (id) => {
      setOpen17(true)
      const count = outcomes.length 
      if(count === 1){
        setAllowDeleteOutput(false)
        return
      }
      setAllowDeleteOutput(true)
      setEditOutputId(id) 
    };
    const handleClose17 = () => {
      setOpen17(false)
      setEditOutputId('') 
      setAllowDeleteOutput(false)
    };

    const handleOutputDelete = () => {
      const newOutput = outcomes.filter(output => output.id !== editOutputId)
      dispatch(migrationActions.setOutcomes({outcomes:newOutput}))
      handleClose17()
    }

    const [open13, setOpen13] = React.useState(false);
    const [editOutputName, setEditOutputName] = useState('')
    const [updateOutputId, setUpdateOutputId] = useState('')
    const [updateOutputMessage, setUpdateOutputMessage] = useState('')

    const handleOpen13 = (id,name) => {
      setEditOutputName(name)
      setUpdateOutputId(id)
      setOpen13(true)
    };
    const handleClose13 = () => {
      setOpen13(false)
      setEditOutputName('')
      setUpdateOutputId('')
      setUpdateOutputMessage('')
    };

    const handleEditOutputChange = (event) => {
      setUpdateOutputMessage('')
      setEditOutputName(event.target.value)
    }

    const handleUpdateOutput = () => {
      if(editOutputName === ''){
        setUpdateOutputMessage('Please enter outcome')
        return
      }
      const newOutput = outcomes.filter(output => output.id === updateOutputId)
      const d = {...newOutput[0],name:editOutputName}
      const editOutput = outcomes.filter(output => output.id !== updateOutputId)
      const h = [...editOutput,d]
      dispatch(migrationActions.setOutcomes({outcomes:h}))
      handleClose13()
    }

  return (
    <React.Fragment>
      <Dialog
        open={open17}
        onClose={handleClose17}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Outcome Delete"}
        </DialogTitle>
        {allowDeleteOutput ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this outcome?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the outcome as Outcome cannot be empty!!
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
          {"Confirm Outcome Indicator Delete"}
        </DialogTitle>
        {allowDeleteOutputIndicator ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this outcome indicator?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the indicator as Outcome Indicator cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteOutputIndicator && <DialogActions>
          <Button onClick={handleClose15}>Disagree</Button>
          <Button onClick={handleOutputIndicatorDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>}
      </Dialog>
      <Modal
        open={open13}
        onClose={handleClose13}
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
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditOutputChange} value={editOutputName}/>
    
    {(updateOutputMessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{updateOutputMessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleUpdateOutput}>Save</p>
</div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
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
          <th className="b--black-80 tc pb3 pr3 b">Outcome Indicator</th>
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
        open={open2}
        onClose={handleClose2}
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
      {outputIndicator && outputIndicator.map((indicator) => {
              return (
        <tr>
          <td className="pv3 pr3  b--black-80">{indicator.name.toUpperCase()}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetValue}</td>
          <td className="pv3 pr3  b--black-80">{indicator.targetMeasurement}</td>
          <td className="pv3 pr3  b--black-80"><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen8(indicator)}>Edit</p></td>
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
        open={open3}
        onClose={handleClose3}
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
          <th className="b--black-80 tc pb3 pr3 b">Outcome Indicator</th>
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
          <label htmlFor="name" className="f6 b db mb2">Edit Outcome Indicator</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutputIndicatorEdit} value={editOutputIndicator.name}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Edit Outcome Indicator Target Value</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="number" aria-describedby="name-desc" onChange={handleOutputTargetValueEdit} value={parseFloat(editOutputIndicator.targetValue)}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    <label htmlFor="name" className="f6 b db mb2">Edit Outcome Indicator Target Measurement Unit</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleOutputTargetMeasurementEdit} value={editOutputIndicator.targetMeasurement}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
        {(outputeditmessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{outputeditmessage}</p>}
        <div className='flex justify-center'>
        <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleOutputIndicatorEditSubmit}>Save</p>
        </div>
</div>
          </Typography>
        </Box>
      </Modal>
      <Typography variant="h6" gutterBottom>
        Outcome Details
      </Typography>
      <Button size="large" onClick={handleNewOutput}>+ Create New Outcome</Button>
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 230 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {outcomes && outcomes.map((output,i) => {
        return <Tab label={`Outcome ${i + 1}`} {...a11yProps(i)} />
        })}
      </Tabs>
      {outcomes && outcomes.map((output,i) => {
      return <TabPanel value={value} index={i}>
        {output.name}
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" size="small" aria-label="text button group">
        <Button onClick={()=> handleOpen13(output.id,output.name)}>Edit Outcome</Button>
        <Button onClick={()=> handleOpen17(output.id)}>Delete Outcome</Button>
        <Button onClick={()=> handleOpen2(output.outcomeIndicators,output.id)}>View Indicator</Button>
        <Button onClick={()=> handleOpen3(output.id)}>Add Indicator</Button>
      </ButtonGroup>
    </Box>
      </TabPanel>
      })}
    </Box>
    </React.Fragment>
  );
}