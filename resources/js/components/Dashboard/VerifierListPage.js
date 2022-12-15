import React, {useState, useEffect} from 'react'
import {getSubschemeData,getComment,approveDivisionSubschemes,sendApprovalMail,getLatestQuater} from '../store/departmentVerifier-actions';
import {departmentVerifierActions} from '../store/departmentVerifierSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import {subschemesActions} from '../store/subschemesSlice';
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
import Chip from '@mui/material/Chip';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
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
import CommentButton from './Utilities/CommentButton'

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

const VerifierListPage = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
  
    const divisionid = useSelector((state) => state.divisions.divisionId);
    const subschemes = useSelector((state) => state.verifier.subschemes);
    const update = useSelector((state) => state.verifier.update);
    const quaterTs = useSelector((state) => state.verifier.quaterTs);
    const commentDisplay = useSelector((state) => state.verifier.commentDisplay);
    const sendemailapprovaldetail = useSelector((state) => state.verifier.sendemailapprovaldetail);
    const sendemailreviewdetail = useSelector((state) => state.verifier.sendemailreviewdetail);
    const reviewNotificationSuccess = useSelector((state) => state.verifier.reviewNotificationSuccess);
    const reviewNotificationFailure = useSelector((state) => state.verifier.reviewNotificationFailure);
    const approveNotificationSuccess = useSelector((state) => state.verifier.approveNotificationSuccess);
    const approveNotificationFailure = useSelector((state) => state.verifier.approveNotificationFailure);
    const finalApproveNotificationSuccess = useSelector((state) => state.verifier.finalApproveNotificationSuccess);
    const finalApproveNotificationFailure = useSelector((state) => state.verifier.finalApproveNotificationFailure);
  
    const [filteredSubscheme,setFilteredSubschemes] = useState([]);
    const [approvedcount, setApprovedCount] = useState(0)
    const [pendingcount, setPendingCount] = useState(0)
    const [reviewcount, setReviewCount] = useState(0)
    const [correctedcount, setCorrectededCount] = useState(0)
    const [quaterTD, setquaterTD] = useState('')
    const [yearTD, setyearTD] = useState('2022-23')


    useEffect(() => {
        dispatch(getSubschemeData(divisionid));
        dispatch(getLatestQuater(divisionid));
        return () => {
          dispatch(departmentVerifierActions.setSubschemes({subschemes:[]}))
          dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: []})) 
          dispatch(departmentVerifierActions.setApproveNotificationSuccess({approveNotificationSuccess: false})) 
          dispatch(departmentVerifierActions.setApproveNotificationFailure({approveNotificationFailure: false})) 
          dispatch(departmentVerifierActions.setReviewNotificationSuccess({reviewNotificationSuccess: false})) 
          dispatch(departmentVerifierActions.setReviewNotificationFailure({reviewNotificationFailure: false})) 
          dispatch(departmentVerifierActions.setFinalApproveNotificationSuccess({finalApproveNotificationSuccess: false})) 
          dispatch(departmentVerifierActions.setFinalApproveNotificationFailure({finalApproveNotificationFailure: false})) 
          dispatch(departmentVerifierActions.setQuaterTs({quaterTs:''}))
          setApprovedCount(0)
        setPendingCount(0)
        setReviewCount(0)
        setCorrectededCount(0)
        setquaterTD('')
        setyearTD('2022-23')
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
      if(subschemes){
        setFilteredSubschemes(subschemes)
        const a = subschemes.filter(subscheme => subscheme.verified_status === 'A').length
        const p = subschemes.filter(subscheme => subscheme.verified_status === 'N').length
        const c = subschemes.filter(subscheme => subscheme.verified_status === 'T').length
        const r = subschemes.filter(subscheme => subscheme.verified_status === 'R').length
        setApprovedCount(a)
        setPendingCount(p)
        setReviewCount(r)
        setCorrectededCount(c)
      }
      }, [subschemes]);

  useEffect(() => {
      if(update){
        dispatch(getSubschemeData(divisionid));
      }
      }, [update]);

      useEffect(() => {
        if(sendemailapprovaldetail){
          dispatch(sendApprovalMail(sendemailapprovaldetail));
        }
        }, [sendemailapprovaldetail]);

        useEffect(() => {
          if(sendemailreviewdetail){
            dispatch(sendApprovalMail(sendemailreviewdetail));
          }
          }, [sendemailreviewdetail]);

  const [subschemeStatus, setSubschemeStatus] = React.useState('Z');

  const handleSubschemeChange = (event) => {
    setSubschemeStatus(event.target.value);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const onSubmitApprove = () => {
    if(subschemes.length === 0){
      handleClickOpen3()
      return
    }
    const f = subschemes.map(subscheme => {
      if((subscheme.verified_status === "N") || (subscheme.verified_status === "R") || (subscheme.verified_status === "T")){
        return 'a'
      }
      return 'b'
    })
    const y = f.indexOf('a')
    if(y !== -1){
      handleClickOpen2()
      return
    }
    
    dispatch(approveDivisionSubschemes(divisionid));
    
  }

  const handleActionClick = (id) => {
    const subschemeselected = subschemes.filter(subscheme => subscheme.id === id)
    dispatch(subschemesActions.setSubSchemeSearch({subschemeSearch: subschemeselected[0]})) 
    return navigate(`/dashboardverifier/detailreport/${id}`);
}

useEffect(() => {
    let filtered = [...subschemes]
    if(subschemeStatus === 'Z'){
      setFilteredSubschemes(filtered)
      return
    }
  
    filtered = filtered.filter(subscheme => subscheme.verified_status === subschemeStatus)
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

  const handleVerificationStatus = (params) => {
    if(params.row.verified_status === 'N'){
      return <Chip label="Pending" color="primary" variant="outlined" />
    }
    if(params.row.verified_status === 'A'){
      return <Chip label="Approved" color="success" variant="outlined" />
    }
    if(params.row.verified_status === 'R'){
      return <Chip label="Review" color="error" variant="outlined" />
    }
    if(params.row.verified_status === 'T'){
      return <Chip label="Corrected" color="warning" variant="outlined" />
    }
    return
  }

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = (id) => {
    dispatch(getComment(id));
    setOpen1(true);
  };

  const handleClose1 = () => {
    dispatch(departmentVerifierActions.setCommentDisplay({commentDisplay:''}))
    setOpen1(false);
  };

  const handleViewComment = (id) => {
    handleClickOpen1(id)
  }

  const columns = React.useMemo(
    () => [
      { field: 'subscheme_code', hideable: false, headerName: 'Sub Scheme Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', width: 125,},
    { field: 'name', headerName: 'Sub Scheme Name',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: renderCellExpand },
    {
      field: 'verificationStatus',
      headerName: 'Verification Status',
      width: 160,
      headerClassName: 'themeheader',
      cellClassName: 'themecell1',
      renderCell: handleVerificationStatus,
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
          icon={<div className='f6'><PageviewIcon color="actions"/><span className='ml2 b'>View Details</span></div>}
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

  const handleCloseReviewSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(departmentVerifierActions.setReviewNotificationSuccess({reviewNotificationSuccess:false}))
  };

  const handleCloseReviewFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(departmentVerifierActions.setReviewNotificationFailure({reviewNotificationFailure:false}))
  };

  const handleCloseApproveSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(departmentVerifierActions.setApproveNotificationSuccess({approveNotificationSuccess:false}))
  };

  const handleCloseApproveFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(departmentVerifierActions.setApproveNotificationFailure({approveNotificationFailure:false}))
  };

  const handleCloseFinalApproveSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(departmentVerifierActions.setFinalApproveNotificationSuccess({finalApproveNotificationSuccess:false}))
  };

  const handleCloseFinalApproveFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(departmentVerifierActions.setFinalApproveNotificationFailure({finalApproveNotificationFailure:false}))
  };

  return (<>
  <Snackbar open={reviewNotificationSuccess} autoHideDuration={4000} onClose={handleCloseReviewSuccess}>
        <Alert onClose={handleCloseReviewSuccess} severity="success" sx={{ width: '100%' }}>
          Scheme submitted for review!
        </Alert>
      </Snackbar>
      <Snackbar open={reviewNotificationFailure} autoHideDuration={4000} onClose={handleCloseReviewFailure}>
        <Alert onClose={handleCloseReviewFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={approveNotificationSuccess} autoHideDuration={4000} onClose={handleCloseApproveSuccess}>
        <Alert onClose={handleCloseApproveSuccess} severity="success" sx={{ width: '100%' }}>
        Scheme approved!
        </Alert>
      </Snackbar>
      <Snackbar open={approveNotificationFailure} autoHideDuration={4000} onClose={handleCloseApproveFailure}>
        <Alert onClose={handleCloseApproveFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
      <Snackbar open={finalApproveNotificationSuccess} autoHideDuration={4000} onClose={handleCloseFinalApproveSuccess}>
        <Alert onClose={handleCloseFinalApproveSuccess} severity="success" sx={{ width: '100%' }}>
        All Scheme verified and approved for publishing! 
        </Alert>
      </Snackbar>
      <Snackbar open={finalApproveNotificationFailure} autoHideDuration={4000} onClose={handleCloseFinalApproveFailure}>
        <Alert onClose={handleCloseFinalApproveFailure} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
        </Alert>
      </Snackbar>
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
        {commentDisplay}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose1} autoFocus>
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
        All the Schemes need to be approved before final approval.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose2} autoFocus>
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
      {"Alert!!"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        No schemes found!!.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose3} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
    <div className="container-fluid px-4 mt3">
    <h1 className='b'>{`Dashboard for verification of sub-schemes for ${quaterTD} (${yearTD})`}</h1>
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
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitApprove}>Approve Entry</p>
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

export default VerifierListPage