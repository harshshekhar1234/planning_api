import React, {useState, useEffect} from 'react'
import {aorgetSubschemeData,aorsubmitVerification,aorgetComment,aorsubmitCorrection,sendSubmitMail,getLatestQuater} from '../store/departmentMaker-actions';
import {departmentMakerActions} from '../store/departmentMakerSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import {subschemesActions} from '../store/subschemesSlice';
import {divisionsActions} from '../store/divisionsSlice';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import PageviewIcon from '@mui/icons-material/Pageview';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CommentButton from './Utilities/CommentButtonAor'

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


const AorSubmitVerification = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const divisionid = useSelector((state) => state.divisions.divisionId);
  const subschemes = useSelector((state) => state.maker.subschemes);
  const update = useSelector((state) => state.maker.update);
  const comment = useSelector((state) => state.maker.comment);
  const sendEmail = useSelector((state) => state.maker.sendEmail);
  const mailDetail = useSelector((state) => state.maker.mailDetail);
  const submitNotificationSuccess = useSelector((state) => state.maker.submitNotificationSuccess);
  const submitNotificationFailure = useSelector((state) => state.maker.submitNotificationFailure);
  const correctNotificationSuccess = useSelector((state) => state.maker.correctNotificationSuccess);
  const correctNotificationFailure = useSelector((state) => state.maker.correctNotificationFailure);
  const finYear = useSelector((state) => state.finYear.finYear);

  const [filteredSubscheme,setFilteredSubschemes] = useState([]);
  const [submitButton, setSubmitButton] = useState(false)
  const [approvedcount, setApprovedCount] = useState(0)
    const [pendingcount, setPendingCount] = useState(0)
    const [reviewcount, setReviewCount] = useState(0)
    const [correctedcount, setCorrectededCount] = useState(0)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [fromDatemessage, setFromDateMessage] = useState('')
  const [toDatemessage, setToDateMessage] = useState('')
  const [reportSubmiteMessage, setReportSubmitMessage] = useState('')

  useEffect(() => {
    dispatch(aorgetSubschemeData(divisionid));
    
    return () => {
      setApprovedCount(0)
        setPendingCount(0)
        setReviewCount(0)
        setCorrectededCount(0)
        setFromDate('')
        setToDate('')
        dispatch(departmentMakerActions.setSubschemes({subschemes: []}))
      dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
      dispatch(departmentMakerActions.setSubmitNotificationSuccess({submitNotificationSuccess:false}))
      dispatch(departmentMakerActions.setSubmitNotificationFailure({submitNotificationFailure:false}))
      dispatch(departmentMakerActions.setCorrectNotificationSuccess({correctNotificationSuccess:false}))
      dispatch(departmentMakerActions.setCorrectNotificationFailure({correctNotificationFailure:false}))
    }
    }, []);

    useEffect(() => {
      if(subschemes){
        setSubmitButton(false)
        setFilteredSubschemes(subschemes)
        const a = subschemes.filter(subscheme => subscheme.aor_verified_status === 'A').length
        const p = subschemes.filter(subscheme => subscheme.aor_verified_status === 'N').length
        const c = subschemes.filter(subscheme => subscheme.aor_verified_status === 'T').length
        const r = subschemes.filter(subscheme => subscheme.aor_verified_status === 'R').length
        setApprovedCount(a)
        setPendingCount(p)
        setReviewCount(r)
        setCorrectededCount(c)
        const f = subschemes.map(subscheme => {
          if(subscheme.aor_verified_status === "R"){
            return 'a'
          }
          return 'b'
        })
        const y = f.indexOf('a')
        if(y !== -1){
          setSubmitButton(true)
        }

      }
      }, [subschemes]);

  useEffect(() => {
      if(update){
        dispatch(aorgetSubschemeData(divisionid));
      }
      }, [update]);

   useEffect(() => {
      if(mailDetail){
        dispatch(sendSubmitMail(mailDetail));
      }
      }, [mailDetail]);

  const [subschemeStatus, setSubschemeStatus] = React.useState('Z');

  const handleSubschemeChange = (event) => {
    setSubschemeStatus(event.target.value);
  };

  const handleActionClick = (id) => {
    const subschemeselected = subschemes.filter(subscheme => subscheme.id === id)
    dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: subschemeselected[0]})) 
    return navigate(`/dashboarddeptuser/aorachievemententry/${id}`);
}

const handleFilledStatus = (params) => {
  if((params.row.aor_fin_add_btn_flag === false) && (parseFloat(params.row.pending_output_indicator) === 0) && (parseFloat(params.row.pending_outcome_indicator) === 0)){
    return true
  }
  return false
}

const handleSubmittedStatus = (params) => {
  if(params.row.aor_submitted_status === 'N'){
    return false
  }
  return true
}

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setFromDateMessage('')
    setToDateMessage('')
    setReportSubmitMessage('')
    setOpen3(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = (id) => {
    dispatch(aorgetComment(id));
    setOpen1(true);
  };

  const handleClose1 = () => {
    dispatch(departmentMakerActions.setComment({comment:''}))
    setOpen1(false);
  };

useEffect(() => {
  let filtered = [...subschemes]
  if(subschemeStatus === 'Z'){
    setFilteredSubschemes(filtered)
    return
  }

  filtered = filtered.filter(subscheme => subscheme.aor_verified_status === subschemeStatus)
  setFilteredSubschemes(filtered)
  // if(divisionId !== 'default'){
  //   filtered = filtered.filter(subscheme => subscheme.division_id === parseFloat(divisionId))
  // }
  // if(statescheme){
  //   const center = filtered.filter(subscheme => `${subscheme.stateCode}-${subscheme.stateName}` === statescheme)
  //   const optionCenter = center.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
  //   setOptionsCenter([...new Set(optionCenter),''])
  // }
  // if(!statescheme){
  //   const optionCenter = filtered.map(subscheme => `${subscheme.Centercode}-${subscheme.CenterName}`)
  //   setOptionsCenter([...new Set(optionCenter),''])
  // }
    
}, [subschemeStatus]);

const onSubmitCorrection = () => {
  dispatch(aorsubmitCorrection(divisionid));
}

const onSubmitReview = () => {
  const s = subschemes.map(subscheme => {
    if((subscheme.aor_fin_add_btn_flag === false) && (parseFloat(subscheme.pending_output_indicator) === 0) && (parseFloat(subscheme.pending_outcome_indicator) === 0)){
      return 'a'
    }
    return 'b'
  })
  const t = s.indexOf('b')
  if(t !== -1){
    handleClickOpen()
    return
  }
  const f = subschemes.map(subscheme => {
    if(subscheme.aor_submitted_status === "S"){
      return 'a'
    }
    return 'b'
  })
  const y = f.indexOf('b')
  if(y === -1){
    handleClickOpen2()
    return
  }
  handleClickOpen3()
}

const handleFromDateChange = (event) => {
    setFromDateMessage('')
    setReportSubmitMessage('')
    setFromDate(event.target.value);
}

const handleToDateChange = (event) => {
  setToDateMessage('')
  setReportSubmitMessage('')
  setToDate(event.target.value);
}

const handleFinalSubmit = () => {
  
  if(fromDate === ''){
    setFromDateMessage('Please select from date')
    return
  }
  if(toDate === ''){
    setToDateMessage('Please select to date')
    return
  }
  if(toDate < fromDate){
    setReportSubmitMessage('Please select a valid date range')
    return
  }
  const fromDateConv = new Date(fromDate)
  const toDateConv = new Date(toDate)
  const fromChech = new Date("1 april 2022");
  const toChech = new Date();
  if(toDateConv.getTime() > toChech.getTime()){
    setReportSubmitMessage('Please select a valid date range')
    return
  }
  if(fromDateConv.getTime() < fromChech.getTime()){
    setReportSubmitMessage('Please select a valid date range')
    return
  }
  
  dispatch(aorsubmitVerification(divisionid,fromDate,toDate,finYear));
  handleClose3()
}

const handleVerificationStatus = (params) => {
  if(params.row.aor_verified_status === 'N'){
    return <Chip label="Pending" color="primary" variant="outlined" />
  }
  if(params.row.aor_verified_status === 'A'){
    return <Chip label="Approved" color="success" variant="outlined" />
  }
  if(params.row.aor_verified_status === 'R'){
    return <Chip label="Review" color="error" variant="outlined" />
  }
  if(params.row.aor_verified_status === 'T'){
    return <Chip label="Corrected" color="warning" variant="outlined" />
  }
  return
}

const handleViewComment = (id) => {
  handleClickOpen1(id)
}

const columns = React.useMemo(
  () => [
    { field: 'subscheme_code', hideable: false, headerName: 'Sub Scheme Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', width: 125,},
  { field: 'name', headerName: 'Sub Scheme Name',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: renderCellExpand },
  {
    field: 'aor_filledStatus',
    headerName: 'Filled Status',
    width: 160,
    type: 'boolean',
    headerClassName: 'themeheader',
    cellClassName: 'themecell1',
    valueGetter: handleFilledStatus,
  },
  {
    field: 'aor_submittedStatus',
    headerName: 'Submitted Status',
    width: 160,
    type: 'boolean',
    headerClassName: 'themeheader',
    cellClassName: 'themecell1',
    valueGetter: handleSubmittedStatus,
  },
  {
    field: 'aor_verificationStatus',
    headerName: 'Verification Status',
    width: 160,
    headerClassName: 'themeheader',
    // cellClassName: (params) => {
    //   console.log(params)
    //   return clsx({
        
    //     pending: params.row.verified_status  === "N",
    //     approvedMUI: params.row.verified_status === "A",
    //     review: params.row.verified_status === "R",
    //     corrected: params.row.verified_status === "T",
    //   });
    // },
    // valueGetter: handleVerificationStatus,
    renderCell: handleVerificationStatus
  },
  {
    field: 'actions',
    type: 'actions',
    width: 150,
    headerName: 'Actions',
    headerAlign: 'center', 
    headerClassName: 'themeheader',
    cellClassName: 'themecell',
    getActions: (params) => [
      <GridActionsCellItem
        icon={<div className='f6'><PageviewIcon color="actions"/><span className='ml2 b'>Fill Details</span></div>}
        label="Delete"
        onClick={() => handleActionClick(params.id)}
      />,
    ],
  },
  {
    field: 'viewcomment',
    headerName: 'Comments',
    width: 150,
    headerClassName: 'themeheader',
    cellClassName: 'themecell1',
    renderCell: (params) => <CommentButton status={params} handleViewComment={handleViewComment}/>
  },
],
[handleActionClick],
);

const handleCloseSubmitSuccess = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  dispatch(departmentMakerActions.setSubmitNotificationSuccess({submitNotificationSuccess:false}))
};

const handleCloseSubmitFailure = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  dispatch(departmentMakerActions.setSubmitNotificationFailure({submitNotificationFailure:false}))
};

const handleCloseCorrectSuccess = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  dispatch(departmentMakerActions.setCorrectNotificationSuccess({correctNotificationSuccess:false}))
};

const handleCloseCorrectFailure = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  dispatch(departmentMakerActions.setCorrectNotificationFailure({correctNotificationFailure:false}))
};

  return (
  <>
  <Snackbar open={submitNotificationSuccess} autoHideDuration={4000} onClose={handleCloseSubmitSuccess}>
        <Alert onClose={handleCloseSubmitSuccess} severity="success" sx={{ width: '100%' }}>
          Schemes submitted for verification!
        </Alert>
      </Snackbar>
      <Snackbar open={submitNotificationFailure} autoHideDuration={4000} onClose={handleCloseSubmitFailure}>
        <Alert onClose={handleCloseSubmitFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={correctNotificationSuccess} autoHideDuration={4000} onClose={handleCloseCorrectSuccess}>
        <Alert onClose={handleCloseCorrectSuccess} severity="success" sx={{ width: '100%' }}>
          Schemes submitted for verification!
        </Alert>
      </Snackbar>
      <Snackbar open={correctNotificationFailure} autoHideDuration={4000} onClose={handleCloseCorrectFailure}>
        <Alert onClose={handleCloseCorrectFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Alert!!"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        You cannot submit for verification as you have not filled every achievement of output, outcome or financial entry.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
  <Dialog
    open={open2}
    onClose={handleClose2}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Alert!!"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        You have already submitted for verification.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose2} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
  <Dialog
    open={open1}
    onClose={handleClose1}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Remarks"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {comment}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose1} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
  <Dialog
    open={open3}
    onClose={handleClose3}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Select Report Duration"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      <Box sx={{ minWidth: 200 }}>
      <div className="pa4 black-80">
    <label htmlFor="fromDate" className="f6 b db mb2">Please select from date</label>
    <input id="fromDate" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="date" aria-describedby="name-desc" onChange={handleFromDateChange} value={fromDate}/>
    </div>
    <div className="pa4 black-80">
    <label htmlFor="toDate" className="f6 b db mb2">Please select to date</label>
    <input id="toDate" className="ba b--black-60 pa2 mb2 db w-100 bg-transparent br2 shadow-1" type="date" aria-describedby="name-desc" onChange={handleToDateChange} value={toDate}/>
    </div>
    </Box>
    {fromDatemessage && <h3 className='f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito'>Please select from date!!</h3>}
    {toDatemessage && <h3 className='f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito'>Please select to date!!</h3>}
    {reportSubmiteMessage && <h3 className='f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito'>{reportSubmiteMessage}</h3>}
    
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleFinalSubmit} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
  <div className="container-fluid px-4 mt3">
    <h1 className='b'>Dashboard for submission of sub-schemes for verification of On Demand Report</h1>
        <div className="row">
        <div className="col-xl-3 col-md-6 center">
              <div className="card budgetColor text-white mb-4">
                  <div className="card-body f3 h4">Approved Sub-Schemes
                  <p className='f2'>{approvedcount}</p>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-md-6 center">
              <div className="card outcomeColor text-white mb-4">
                  <div className="card-body f3 h4">Pending Sub-Schemes
                  <p className='f2'>{pendingcount}</p>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-md-6 center">
              <div className="card schemeColor text-white mb-4">
                  <div className="card-body f3 h4">
                  <p>In-review Sub-Schemes
                  <p className='f2'>{reviewcount}</p></p>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-md-6 center">
              <div className="card outputColor text-white mb-4">
                  <div className="card-body f3 h4">
                  <p>Corrected Sub-Schemes
                  <p className='f2'>{correctedcount}</p></p>
                  </div>
              </div>
          </div>
        </div>
        <div className='mw5 center mt3'>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sub-Scheme Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subschemeStatus}
          label="Sub-Scheme Status"
          onChange={handleSubschemeChange}
        >
          <MenuItem value={'Z'}>All</MenuItem>
          <MenuItem value={'N'}>Pending</MenuItem>
          <MenuItem value={'A'}>Approved</MenuItem>
          <MenuItem value={'R'}>Review</MenuItem>
          <MenuItem value={'T'}>Corrected</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    {submitButton ? <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitCorrection}>Submit correction</p> : <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitReview}>Submit for review</p>}
    <div style={{ display: 'flex', height: '900px' }} className='mt3'>
    {/* <div style={{ flexGrow: 1 }}> */}
      <DataGrid 
      columns={columns}
      rows={filteredSubscheme} 
      // components={{ Toolbar: GridToolbar }}
       />
    </div>
    </div>
    </>
  )
}

export default AorSubmitVerification