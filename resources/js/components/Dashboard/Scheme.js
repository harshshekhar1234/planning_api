import React, {useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import SubSchemeCard from './Utilities/SubSchemeCard'
import {getSubSchemesData} from '../store/subschemes-actions';
import {subschemesActions} from '../store/subschemesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';


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

function Scheme() {

    let params = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const subschemes = useSelector((state) => state.subschemes.subschemes);

    const columns = React.useMemo(
      () => [
        { field: 'subscheme_code', hideable: false, headerName: 'Sub Scheme Code', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1},
      { field: 'name', headerName: 'Sub Scheme Name',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: renderCellExpand },
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
    ],
    [handleActionClick],
    );

    useEffect(() => {
        dispatch(getSubSchemesData(params.id));
        return () => {
          dispatch(subschemesActions.setSubSchemes({subschemes: []})) 
        }
        }, []);

    const handleActionClick = (id) => {
        
        const subscheme = subschemes.filter(subscheme => subscheme.id === id)
        return navigate(`/dashboard/currentsubscheme/${id}`);
    }

  return (<>
    <div style={{ display: 'flex', height: '100%' }}>
    <div style={{ flexGrow: 1 }}>
      <DataGrid 
      columns={columns}
      rows={subschemes} 
      components={{ Toolbar: GridToolbar }} />
    </div>
    </div>
    </>
  )
}

export default Scheme