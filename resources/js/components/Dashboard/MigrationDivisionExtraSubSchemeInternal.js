import React, {useState, useEffect} from 'react'
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import {subschemesActions} from '../store/subschemesSlice';
import {schemesActions} from '../store/schemesSlice';
import {migrationActions} from '../store/migrationSlice';
import {miggetExtraSubSchemesDeptData,migupdateSubSchemeData,migdeleteSubSchemeData} from '../store/subschemes-actions';
import SubSchemeEditButton from './Utilities/SubSchemeEditButton';
import SubSchemeDeleteButton from './Utilities/SubSchemeDeleteButton'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
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

function MigrationDivisionExtraSubSchemeInternal() {

  const dispatch = useDispatch();
  let params = useParams();
  let navigate = useNavigate();

  const subschemes = useSelector((state) => state.subschemes.pendingSubSchemes);
  const editSubSchemeId = useSelector((state) => state.subschemes.editSubSchemeId);
    const editSubSchemeName = useSelector((state) => state.subschemes.editSubSchemeName);
    const editSubSchemeCode = useSelector((state) => state.subschemes.editSubSchemeCode);
    const editmessage = useSelector((state) => state.subschemes.editmessage);
    const editNotificationSuccess = useSelector((state) => state.subschemes.editNotificationSuccess);
    const deleteNotificationSuccess = useSelector((state) => state.subschemes.deleteNotificationSuccess);
    const updateSubScheme = useSelector((state) => state.subschemes.updateSubScheme);
    const deleteSubSchemeId = useSelector((state) => state.subschemes.deleteSubSchemeId);

  useEffect(() => {
    dispatch(miggetExtraSubSchemesDeptData(params.id))
    return () => {
      dispatch(subschemesActions.setPendingSubSchemes({pendingSubSchemes: []})) 
      dispatch(subschemesActions.setEditNotificationSuccess({editNotificationSuccess:false}))  
      dispatch(subschemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:false}))  
    }
  }, []);

  useEffect(() => {
    if(updateSubScheme){
      dispatch(miggetExtraSubSchemesDeptData(params.id));  
    }
    }, [updateSubScheme]);

  const handleCreateSubScheme = () => {
    return navigate(`/dashboarddeptuser/createsubscheme`);
  }

  const handleActionClick = (params) => {
    const subscheme = []
    subscheme.push({...params.row})
    if(params.row.isScheme === "Y"){
        const scheme = {id: params.row.scheme_id}
        dispatch(schemesActions.setSchemeSearch({schemeSearch: scheme})) 
        dispatch(migrationActions.setSubSchemeName({subSchemeName:params.row.name}))
        dispatch(migrationActions.setSubSchemeCode({subSchemeCode:params.row.subscheme_code}))
        dispatch(migrationActions.setSubSchemeStateShare({subSchemeStateShare:params.row.state_share}))
        dispatch(migrationActions.setSubSchemeCenterShare({subSchemeCenterShare:params.row.center_share}))
        dispatch(migrationActions.setSubSchemes({subschemes:subscheme}))
        return navigate(`/dashboarddeptuser/createsubscheme`);
    }
    dispatch(migrationActions.setSchemeStateName({schemeStateName:params.row.state_name}))
    dispatch(migrationActions.setSchemeCenterName({schemeCenterName:params.row.center_name}))
    dispatch(migrationActions.setSchemeStateCode({schemeStateCode:params.row.state_code}))
    dispatch(migrationActions.setSchemeCenterCode({schemeCenterCode:params.row.center_code}))
    dispatch(migrationActions.setSubSchemes({subschemes:subscheme}))
    dispatch(migrationActions.setSubSchemeName({subSchemeName:params.row.name}))
    dispatch(migrationActions.setSubSchemeCode({subSchemeCode:params.row.subscheme_code}))
    dispatch(migrationActions.setSubSchemeStateShare({subSchemeStateShare:params.row.state_share}))
    dispatch(migrationActions.setSubSchemeCenterShare({subSchemeCenterShare:params.row.center_share}))
    return navigate(`/dashboarddeptuser/createscheme`);
    
  }

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = (subscheme) => {
    setOpen1(true);
    dispatch(subschemesActions.setEditSubSchemeId({editSubSchemeId: subscheme.id})) 
    dispatch(subschemesActions.setEditSubSchemeName({editSubSchemeName: subscheme.name})) 
    dispatch(subschemesActions.setEditSubSchemeCode({editSubSchemeCode: subscheme.subscheme_code})) 
  };

  const handleClose1 = () => {
    setOpen1(false);
    dispatch(subschemesActions.setEditSubSchemeId({editSubSchemeId: ''})) 
    dispatch(subschemesActions.setEditSubSchemeName({editSubSchemeName: ''})) 
    dispatch(subschemesActions.setEditSubSchemeCode({editSubSchemeCode: ''}))  
    dispatch(subschemesActions.setEditMessage({editmessage: ''}))
  };

  const handleEditSubScheme = (subscheme) => {
    handleOpen1(subscheme)
  }

  const handleDeleteSubScheme = (id) => {
    handleOpen18(id)
  }

  const [open18, setOpen18] = React.useState(false);
    const [allowDeleteSubScheme, setAllowDeleteSubScheme] = React.useState(false);

    const handleOpen18 = (id) => {
      setOpen18(true)
      const count = subschemes.length 
      if(count === 1){
        setAllowDeleteSubScheme(false)
        return
      }
      setAllowDeleteSubScheme(true)
      dispatch(subschemesActions.setDeleteSubSchemeId({deleteSubSchemeId:id})) 
    };
    const handleClose18 = () => {
      setOpen18(false)
      dispatch(subschemesActions.setDeleteSubSchemeId({deleteSubSchemeId:''})) 
      setAllowDeleteSubScheme(false)
    };

    const handleSubSchemeDelete = () => {
      dispatch(migdeleteSubSchemeData(deleteSubSchemeId))
      handleClose18()
    }

  const handleEditSubSchemeNameChange = (event) => {
    dispatch(subschemesActions.setEditMessage({editmessage: ''}))
    dispatch(subschemesActions.setEditSubSchemeName({editSubSchemeName:event.target.value}))
  }

  const handleEditSubSchemeCodeChange = (event) => {
    dispatch(subschemesActions.setEditMessage({editmessage: ''}))
    dispatch(subschemesActions.setEditSubSchemeCode({editSubSchemeCode:event.target.value}))
  }


  const onSubmitUpdateSubScheme = () => {

    if(editSubSchemeName === ''){
      dispatch(subschemesActions.setEditMessage({editmessage:'Please enter a Sub-Scheme Name'}))
      return
    }

    if(editSubSchemeCode === ''){
      dispatch(subschemesActions.setEditMessage({editmessage:'Please enter a Sub-Scheme Code'}))
      return
    }

    if (isNaN(editSubSchemeCode)){
      dispatch(subschemesActions.setEditMessage({editmessage:'Please enter a numeric value for sub-scheme code'}))
      return
    }

    if ((editSubSchemeCode.length !== 8) || (editSubSchemeCode.includes("."))){
      dispatch(subschemesActions.setEditMessage({editmessage:'Sub-scheme code should be of 8 characters'}))
      return
    }

    dispatch(migupdateSubSchemeData(editSubSchemeId,editSubSchemeName,editSubSchemeCode));
    handleClose1()

  }

  const columns = React.useMemo(
    () => [
      { field: 'subscheme_code', hideable: false, headerName: 'Sub Scheme Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1},
    { field: 'name', headerName: 'Sub Scheme Name',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: renderCellExpand },
    { field: 'state_code', hideable: false, headerName: 'State Scheme Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1},
    { field: 'center_code', hideable: false, headerName: 'Center Scheme Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1},
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 150,
    //   headerClassName: 'themeheader',
    //   cellClassName: 'themecell1',
    //   renderCell: (params) => <SubSchemeEditButton status={params} handleEditSubScheme={handleEditSubScheme}/>
    // },
    // {
    //   field: 'delete',
    //   headerName: 'Exclude from migration',
    //   width: 150,
    //   headerClassName: 'themeheader',
    //   cellClassName: 'themecell1',
    //   renderCell: (params) => <SubSchemeDeleteButton status={params} handleDeleteSubScheme={handleDeleteSubScheme}/>
    // },
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   width: 150,
    //   headerName: 'Actions',
    //   headerAlign: 'center', 
    //   headerClassName: 'themeheader',
    //   cellClassName: 'themecell',
    //   getActions: (params) => [
    //     <GridActionsCellItem
    //       icon={<div className='f6'><PageviewIcon color="actions"/><span className='ml2 b'>Migrate</span></div>}
    //       label="Delete"
    //       onClick={() => handleActionClick(params)}
    //     />,
    //   ],
    // },
  ],
//   [handleActionClick],
  );

  const handleEditSubSchemeNotificationSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(subschemesActions.setEditNotificationSuccess({editNotificationSuccess:false}))  
  };

  const handleDeleteSubSchemeNotificationSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(subschemesActions.setDeleteNotificationSuccess({deleteNotificationSuccess:false}))  
  };

  return (
    <>
    <Snackbar open={deleteNotificationSuccess} autoHideDuration={4000} onClose={handleDeleteSubSchemeNotificationSuccess}>
        <Alert onClose={handleDeleteSubSchemeNotificationSuccess} severity="success" sx={{ width: '100%' }}>
          Sub-Scheme deleted successfully!
        </Alert>
      </Snackbar>
  <Snackbar open={editNotificationSuccess} autoHideDuration={4000} onClose={handleEditSubSchemeNotificationSuccess}>
        <Alert onClose={handleEditSubSchemeNotificationSuccess} severity="success" sx={{ width: '100%' }}>
          Sub-Scheme updated successfully!
        </Alert>
      </Snackbar>
      <Dialog
        open={open18}
        onClose={handleClose18}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Sub-Scheme Delete"}
        </DialogTitle>
        {allowDeleteSubScheme ? <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this sub-scheme?
          </DialogContentText>
        </DialogContent> : <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please edit the Sub-Scheme as Sub-Schemes cannot be empty!!
          </DialogContentText>
        </DialogContent>}
        {allowDeleteSubScheme && <DialogActions>
          <Button onClick={handleClose18}>Disagree</Button>
          <Button onClick={handleSubSchemeDelete} autoFocus>
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
          <span className="b nunito">Edit Sub-Scheme</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2 nunito">Edit Sub-Scheme Code</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="number" aria-describedby="name-desc" onChange={handleEditSubSchemeCodeChange} value={editSubSchemeCode}/>
    <label htmlFor="name" className="f6 b db mb2 nunito">Edit Sub-Scheme Name</label>
    <input id="name" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="text" aria-describedby="name-desc" onChange={handleEditSubSchemeNameChange} value={editSubSchemeName}/>
    {(editmessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{editmessage}</p>}
    <div className='flex justify-center'>
    <p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitUpdateSubScheme}>Update</p>
    </div>
    </div>
          </Typography>
        </Box>
      </Modal>
    <div style={{ display: 'flex', height: '100%' }}>
    <div style={{ flexGrow: 1 }}>
      <DataGrid 
      columns={columns}
      rows={subschemes} 
      getRowId={row => row.subscheme_code}
      components={{ Toolbar: GridToolbar }} />
    </div>
    </div>
    </>
  );
}

export default MigrationDivisionExtraSubSchemeInternal

