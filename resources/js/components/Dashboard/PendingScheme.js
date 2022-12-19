import React, {useState, useEffect} from 'react'
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import {schemesActions} from '../store/schemesSlice';
import {migrationActions} from '../store/migrationSlice';
import { useSelector, useDispatch } from 'react-redux';
import {miggetPendingSchemesData,migupdateSchemeData,migdeleteSchemeData} from '../store/schemes-action';
import { useNavigate } from "react-router-dom";
import SchemeEditButton from './Utilities/SchemeEditButton';
import SchemeDeleteButton from './Utilities/SchemeDeleteButton';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Modal from '@mui/material/Modal';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#fff',
  border: '0px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

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


const VISIBLE_FIELDS = ['State Code', 'State Name', 'Center Code', 'Center Name'];

function PendingScheme() {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const schemes = useSelector((state) => state.schemes.pendingSchemes);
  const departmentid = useSelector((state) => state.department.departmentId);
    const divisionid = useSelector((state) => state.divisions.divisionId);
    const editSchemeId = useSelector((state) => state.schemes.editSchemeId);
    const deleteSchemeId = useSelector((state) => state.schemes.deleteSchemeId);
    const editSchemeStateName = useSelector((state) => state.schemes.editSchemeStateName);
    const editSchemeCenterName = useSelector((state) => state.schemes.editSchemeCenterName);
    const editSchemeCenterCode = useSelector((state) => state.schemes.editSchemeCenterCode);
    const editSchemeStateCode = useSelector((state) => state.schemes.editSchemeStateCode);
    const editmessage = useSelector((state) => state.schemes.editmessage);
    const editNotificationSuccess = useSelector((state) => state.schemes.editNotificationSuccess);
    const deleteNotificationSuccess = useSelector((state) => state.schemes.deleteNotificationSuccess);
    const updateScheme = useSelector((state) => state.schemes.updateScheme);

    const { data } = {
    dataSet: schemes,
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100
  };

  useEffect(() => {
      dispatch(miggetPendingSchemesData(divisionid))
      return () => { 
        dispatch(schemesActions.setPendingScheme({pendingSchemes:[]})) 
        dispatch(schemesActions.setEditNotificationSuccess({editNotificationSuccess:false}))  
        dispatch(schemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:false}))
      }
  }, []);

  useEffect(() => {
    if(updateScheme){
      dispatch(miggetPendingSchemesData(divisionid)) 
    }
    }, [updateScheme]);

  const handleCreateScheme = () => {
    return navigate(`/dashboarddeptuser/createscheme`);
  }

  const handleActionClick = (params) => {
    //   const selectedScheme = schemes.filter(scheme => scheme.id === id)
    //   dispatch(schemesActions.setSchemeSearch({schemeSearch: selectedScheme[0]})) 
    //   return navigate(`/dashboarddeptuser/entryformdeptusersubscheme/${id}`);
    dispatch(migrationActions.setSchemeStateName({schemeStateName:params.row.state_name}))
    dispatch(migrationActions.setSchemeCenterName({schemeCenterName:params.row.center_name}))
    dispatch(migrationActions.setSchemeStateCode({schemeStateCode:params.row.state_code}))
    dispatch(migrationActions.setSchemeCenterCode({schemeCenterCode:params.row.center_code}))
    dispatch(migrationActions.setSubSchemes({subschemes:params.row.subschemes}))
    return navigate(`/dashboarddeptuser/createscheme`);
  }

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = (scheme) => {
    setOpen1(true);
    dispatch(schemesActions.setEditSchemeId({editSchemeId: scheme.id})) 
    dispatch(schemesActions.setEditSchemeStateName({editSchemeStateName: scheme.state_name})) 
    dispatch(schemesActions.setEditSchemeCenterName({editSchemeCenterName: scheme.center_name})) 
    dispatch(schemesActions.setEditSchemeCenterCode({editSchemeCenterCode: scheme.center_code})) 
    dispatch(schemesActions.setEditSchemeStateCode({editSchemeStateCode: scheme.state_code})) 
  };

  const handleClose1 = () => {
    setOpen1(false);
    dispatch(schemesActions.setEditSchemeId({editSchemeId: ''}))
    dispatch(schemesActions.setEditSchemeStateName({editSchemeStateName: ''})) 
    dispatch(schemesActions.setEditSchemeCenterName({editSchemeCenterName: ''})) 
    dispatch(schemesActions.setEditSchemeCenterCode({editSchemeCenterCode: ''})) 
    dispatch(schemesActions.setEditSchemeStateCode({editSchemeStateCode: ''}))
    dispatch(schemesActions.setEditMessage({editmessage: ''}))
  };

  const handleEditScheme = (scheme) => {
    handleOpen1(scheme)
  }

  const handleEditSchemeStateNameChange = (event) => {
    dispatch(schemesActions.setEditMessage({editmessage: ''}))
    dispatch(schemesActions.setEditSchemeStateName({editSchemeStateName:event.target.value}))
  }

  const handleEditSchemeCenterNameChange = (event) => {
   
    dispatch(schemesActions.setEditMessage({editmessage: ''}))
    dispatch(schemesActions.setEditSchemeCenterName({editSchemeCenterName:event.target.value}))
  }

  const handleEditSchemeStateCodeChange = (event) => {
    
    dispatch(schemesActions.setEditMessage({editmessage: ''}))
    dispatch(schemesActions.setEditSchemeStateCode({editSchemeStateCode:event.target.value}))
  }

  const handleEditSchemeCenterCodeChange = (event) => {
    dispatch(schemesActions.setEditMessage({editmessage: ''}))
    dispatch(schemesActions.setEditSchemeCenterCode({editSchemeCenterCode:event.target.value}))
  }

  const onSubmitUpdateScheme = () => {

    if((editSchemeStateName === '') && (editSchemeCenterName === '')){
      dispatch(schemesActions.setEditMessage({editmessage:'Please enter a Scheme Name'}))
      return
    }

    if ((editSchemeStateCode !== '') && (isNaN(editSchemeStateCode))){
      dispatch(schemesActions.setEditMessage({editmessage:'Scheme State Code should be numeric'}))
      return
    }

    if ((editSchemeCenterCode !== '') && (isNaN(editSchemeCenterCode))){
      dispatch(schemesActions.setEditMessage({editmessage:'Scheme Center Code should be numeric'}))
      return
    }

    if((editSchemeCenterCode === '') && (editSchemeStateCode === '')){
      dispatch(schemesActions.setEditMessage({editmessage:'Please enter a Scheme Code'}))
      return
    }

    if (((editSchemeStateCode !== '') && (editSchemeStateName === ''))){
      dispatch(schemesActions.setEditMessage({editmessage:'Please check Scheme State Details entry'}))
      return
    }

    if (((editSchemeStateCode !== '') && (editSchemeStateCode.length !== 4))){
      dispatch(schemesActions.setEditMessage({editmessage:'Scheme State Code should be of 4 digits'}))
      return
    }

    if (((editSchemeStateCode !== '') && (editSchemeStateCode.includes(".")))){
      dispatch(schemesActions.setEditMessage({editmessage:'Scheme State Code should be of 4 digits'}))
      return
    }

    if (((editSchemeCenterCode !== '') && (editSchemeCenterName === ''))){
      dispatch(schemesActions.setEditMessage({editmessage:'Please check Scheme Center Details entry'}))
      return
    }

    if (((editSchemeCenterCode !== '') && (editSchemeCenterCode.length !== 4))){
      dispatch(schemesActions.setEditMessage({editmessage:'Scheme Center Code should be of 4 digits'}))
      return
    }

    if (((editSchemeCenterCode !== '') && (editSchemeCenterCode.includes(".")))){
      dispatch(schemesActions.setEditMessage({editmessage:'Scheme Center Code should be of 4 digits'}))
      return
    }

    if (((editSchemeStateCode === '') && (editSchemeStateName !== ''))){
      dispatch(schemesActions.setEditMessage({editmessage:'Please check Scheme State Details entry'}))
      return
    }

    if (((editSchemeCenterCode === '') && (editSchemeCenterName !== ''))){
      dispatch(schemesActions.setEditMessage({editmessage:'Please check Scheme Center Details entry'}))
      return
    }

    dispatch(migupdateSchemeData(editSchemeId,editSchemeStateName,editSchemeCenterName,editSchemeStateCode,editSchemeCenterCode));
    handleClose1()

  }

  const handleDeleteScheme = (id) => {
    handleOpen18(id)
  }

  const [open18, setOpen18] = React.useState(false);
    const [allowDeleteScheme, setAllowDeleteScheme] = React.useState(false);

    const handleOpen18 = (id) => {
      setOpen18(true)
      const count = schemes.length 
      if(count === 1){
        setAllowDeleteScheme(false)
        return
      }
      setAllowDeleteScheme(true)
      dispatch(schemesActions.setDeleteSchemeId({deleteSchemeId:id})) 
    };
    const handleClose18 = () => {
      setOpen18(false)
      dispatch(schemesActions.setDeleteSchemeId({deleteSchemeId:''})) 
      setAllowDeleteScheme(false)
    };

    const handleSchemeDelete = () => {
      dispatch(migdeleteSchemeData(deleteSchemeId))
      handleClose18()
    }

  const columns = React.useMemo(
    () => [
      { field: 'state_code', hideable: false, headerName: 'State Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1},
    { field: 'state_name', headerName: 'State Name',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: renderCellExpand },
    { field: 'center_code', headerName: 'Center Code',headerAlign: 'center', headerClassName: 'themeheader',cellClassName: 'themecell',flex: 1 },
    { field: 'center_name', headerName: 'Center Name',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: renderCellExpand },
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
          icon={<div className='f6'><PageviewIcon color="actions"/><span className='ml2 b'>Migrate</span></div>}
          label="Delete"
          onClick={() => handleActionClick(params)}
        />,
      ],
    },
  ],
  [handleActionClick],
  );

  const handleEditSchemeNotificationSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(schemesActions.setEditNotificationSuccess({editNotificationSuccess:false}))  
  };

  const handleDeleteSchemeNotificationSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(schemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:false}))  
  };

  return (
    <>
    <Snackbar open={editNotificationSuccess} autoHideDuration={4000} onClose={handleEditSchemeNotificationSuccess}>
        <Alert onClose={handleEditSchemeNotificationSuccess} severity="success" sx={{ width: '100%' }}>
          Scheme updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={deleteNotificationSuccess} autoHideDuration={4000} onClose={handleDeleteSchemeNotificationSuccess}>
        <Alert onClose={handleDeleteSchemeNotificationSuccess} severity="success" sx={{ width: '100%' }}>
          Scheme deleted successfully!
        </Alert>
      </Snackbar>
      <Dialog
        open={open18}
        onClose={handleClose18}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Scheme Delete"}
        </DialogTitle>
        {allowDeleteScheme ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this scheme?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the Scheme as Schemes cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteScheme && <DialogActions>
          <Button onClick={handleClose18}>Disagree</Button>
          <Button onClick={handleSchemeDelete} autoFocus>
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
          <span className="b nunito">Edit Scheme</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Edit Scheme State Code</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditSchemeStateCodeChange} value={editSchemeStateCode}/>
    <label htmlFor="name" className="f6 b db mb2 nunito">Edit Scheme State Name</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditSchemeStateNameChange} value={editSchemeStateName}/>
    <label htmlFor="name" className="f6 b db mb2 nunito">Edit Scheme Center Code</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditSchemeCenterCodeChange} value={editSchemeCenterCode}/>
    <label htmlFor="name" className="f6 b db mb2 nunito">Edit Scheme Center Name</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditSchemeCenterNameChange} value={editSchemeCenterName}/>
    {(editmessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{editmessage}</p>}
    <div className='flex justify-center'>
    <p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitUpdateScheme}>Update</p>
    </div>
    </div>
          </Typography>
        </Box>
      </Modal>
    <div style={{ display: 'flex', height: '100%' }}>
    <div style={{ flexGrow: 1 }}>
      <DataGrid 
      columns={columns}
      rows={schemes} 
      components={{ Toolbar: GridToolbar }} />
    </div>
    </div>
    </>
  );
}

export default PendingScheme

