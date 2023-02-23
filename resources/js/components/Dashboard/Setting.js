import * as React from 'react';
import {useEffect} from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {getDivisionAll} from '../store/divisions-action';
import { useSelector, useDispatch } from 'react-redux';
import { settingActions } from '../store/settingSlice';
import {divisionOutcomeEntry} from '../store/setting-action';

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

export default function NestedList() {

  const dispatch = useDispatch();
  const divisions = useSelector((state) => state.divisions.divisionAll);
  const blockSetting = useSelector((state) => state.setting.blockSetting);
  const divisionId = useSelector((state) => state.setting.divisionId);

  const [open, setOpen] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = blockSetting.indexOf(value);
    const newChecked = [...blockSetting];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    dispatch(settingActions.setBlockSetting({blockSetting: newChecked}))
  };

    const handleSettingSave = () => {
      const entry = (blockSetting.indexOf('entry') === -1) ? 0 : 1
      const pending = (blockSetting.indexOf('pending') === -1) ? 0 : 1
      dispatch(divisionOutcomeEntry(divisionId,entry,pending))
      handleClose12()
    }

    const handleOpen12 = () => {
      // dispatch(outlayActions.setEditStateShare({editStateShare: stateShare}))
      // dispatch(outlayActions.setEditCenterShare({editCenterShare: centerShare}))
      setOpen12(true)
    };
    const handleClose12 = () => {
      setOpen12(false)
      dispatch(settingActions.setDivisionId({divisionId:''}))
      dispatch(settingActions.setBlockSetting({blockSetting: []}))
    };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = (id) => {
    dispatch(settingActions.setDivisionId({divisionId:id}))
    handleOpen12()
  };

  useEffect(() => {
    dispatch(getDivisionAll());
    return () => { 
      dispatch(divisionsActions.setDivisionAll({divisionAll: []})) 
    }
    }, []);

  return (<>
  <Modal
        open={open12}
        onClose={handleClose12}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Settings</ListSubheader>}
    >
      <ListItem>
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Outcome Budget Entry" />
        <Switch
          edge="end"
          onChange={handleToggle('entry')}
          checked={blockSetting.indexOf('entry') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Pending Migration" />
        <Switch
          edge="end"
          onChange={handleToggle('pending')}
          checked={blockSetting.indexOf('pending') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
    </List>
    <Box textAlign='center'>
  <Button variant='contained' onClick={handleSettingSave}>
    Save
  </Button>
</Box>
        </Box>
      </Modal>
  
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
//   justifyContent="center"
  style={{ minHeight: '100vh' }}
>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Portal Settings
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Department Outcome Budget preparation block/unblock" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {divisions && divisions.map(d => <List key={d.id} onClick={() => handleClick1(d.id)} component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={d.name} />
          </ListItemButton>
        </List>)}
      </Collapse>
    </List>
    </Grid> 
    </>
  );
}