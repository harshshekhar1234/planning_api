import React, {useState, useEffect} from 'react';
import {getClients,updateUserPassword} from '../store/client-actions';
import {clientActions} from '../store/clientSlice';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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

const Users = () => {

    const dispatch = useDispatch();

    const clients = useSelector((state) => state.client.clients);
    const entrymessage = useSelector((state) => state.client.entrymessage);
    const email = useSelector((state) => state.client.email);
    const division = useSelector((state) => state.client.division);
    const password = useSelector((state) => state.client.password);
    const updatesuccess = useSelector((state) => state.client.updatesuccess);
    const updatefailure = useSelector((state) => state.client.updatefailure);

    const [confirmpassword, setConfirmPassword] = useState('')

    useEffect(() => {
        dispatch(getClients());
      }, []);

      const [open1, setOpen1] = React.useState(false);
      const [id,setId] = useState('');
      const handleOpen1 = (userid) => {
        setOpen1(true)
        setId(userid)
      };
      const handleClose1 = () => {
        setOpen1(false)
        setId('')
        setConfirmPassword('')
        dispatch(clientActions.setEntryMessage({entrymessage:''}))
        dispatch(clientActions.setEmail({email: ''}))
        dispatch(clientActions.setDivision({division: ''}))
        dispatch(clientActions.setPassword({password: ''}))
      };

      const handlePasswordChange = (event) => {
        dispatch(clientActions.setEntryMessage({entrymessage:''}))
        dispatch(clientActions.setPassword({password: event.target.value}))
      }

      const handleConfirmPasswordChange = (event) => {
        dispatch(clientActions.setEntryMessage({entrymessage:''}))
        setConfirmPassword(event.target.value)
      }

      const onSubmitPassword = () => {
        if(password === ''){
            dispatch(clientActions.setEntryMessage({entrymessage:'Please enter a value'}))
            return
          }
          if(password.length < 6){
            dispatch(clientActions.setEntryMessage({entrymessage:'Password cannot be less than 6 characters'}))
            return
          }
          if(password !== confirmpassword){
            dispatch(clientActions.setEntryMessage({entrymessage:'Password does not match'}))
            return
          }

          dispatch(updateUserPassword(id,password,confirmpassword));
          handleClose1()
      }

      const handleCloseUpdateSuccess = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(clientActions.setUpdateSuccess({updatesuccess: false}))
      };
    
      const handleCloseUpdateFailure = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(clientActions.setUpdateFailure({updatefailure: false}))
      };

if(clients.length === 0){
    return <div>
    <Box sx={{ width: '100%' }}>
     <LinearProgress />
    </Box>
    <h2 className='tc mt2 b'>Loading...</h2>
    </div>
  }

  return (<>
  <Snackbar open={updatesuccess} autoHideDuration={4000} onClose={handleCloseUpdateSuccess}>
        <Alert onClose={handleCloseUpdateSuccess} severity="success" sx={{ width: '100%' }}>
          Password updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={updatefailure} autoHideDuration={4000} onClose={handleCloseUpdateFailure}>
        <Alert onClose={handleCloseUpdateFailure} severity="error" sx={{ width: '100%' }}>
          Something went wrong!
        </Alert>
      </Snackbar>
  <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Update Password</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="pa4 black-80">
    <label htmlFor="password" className="f6 b db mb2 nunito">Please Enter New Password</label>
    <input id="password" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="password" aria-describedby="name-desc" onChange={handlePasswordChange} value={password}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">Password must be greater than 6 characters</small>
    <label htmlFor="confirmpassword" className="f6 b db mb2 nunito">Please Enter Password Again</label>
    <input id="confirmpassword" className="ba b--black-80 pa2 mb2 db w-100 bg-transparent" type="password" aria-describedby="name-desc" onChange={handleConfirmPasswordChange} value={confirmpassword}/>
    <small id="name-desc" className="f6 black-60 db mb2 b">Password must match with above</small>
    {(entrymessage !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40 nunito">{entrymessage}</p>}
    <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={() => onSubmitPassword()}>Update</p>
</div>
          </Typography>
        </Box>
      </Modal>
      <h1 className="mt-4 b f1">User List</h1>
    <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center" cellSpacing="0">
      <thead>
        <tr className="stripe-dark">
        <th className="fw6 tc pa3 bg-white b">Id</th>
          <th className="fw6 tc pa3 bg-white b">Name</th>
          <th className="fw6 tc pa3 bg-white b">Email</th>
          <th className="fw6 tc pa3 bg-white b">Division</th>
          <th className="fw6 tc pa3 bg-white b">Role</th>
          <th className="fw6 tc pa3 bg-white b">Actions</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        {
            clients && clients.map((client,i) => {
          return (<tr key={i} className="stripe-dark">
            <td className="pa3">{i + 1}</td>
          <td className="pa3">{client.name}</td>
          <td className="pa3">{client.email}</td>
          <td className="pa3">{`${client.div_name} Division`}</td>
          <td className="pa3">{client.role.toUpperCase()}</td>
          <td><p className="f6 link dim br3 ph1 pv1 mb1 dib mt1 white bg-dark-green w3 tc pointer" onClick={() => handleOpen1(client.id)}>Update</p></td>
          </tr>)
            })
        }
      </tbody>
    </table>
  </div>
</div>
</>
  )
}

export default Users