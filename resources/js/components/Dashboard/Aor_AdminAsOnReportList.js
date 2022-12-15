import React, {useState, useEffect} from 'react'
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import {schemesActions} from '../store/schemesSlice';
import {quaterReportActions} from '../store/quaterReportSlice';
import {aorgetQuaterReportList} from '../store/quaterReport-actions';
import { useSelector, useDispatch } from 'react-redux';
import {getSchemesDeptData} from '../store/schemes-action';
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
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


const VISIBLE_FIELDS = ['State Code', 'State Name', 'Center Code', 'Center Name'];

function AsOnReportListAdmin() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();

  const schemes = useSelector((state) => state.schemes.schemes);
  const quaterreports = useSelector((state) => state.quaterreport.quaterreports);
  const departmentid = useSelector((state) => state.department.departmentId);
  const divisionid = params.divisionid

    const { data } = {
    dataSet: schemes,
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100
  };

  useEffect(() => {
      dispatch(aorgetQuaterReportList(divisionid))
      return () => {
        dispatch(quaterReportActions.setQuaterReports({quaterreports:[]}))
      }
  }, []);

  const handleActionClick = (params) => {
    dispatch(quaterReportActions.setFromDate({fromDate:params.row.from_date}))
      dispatch(quaterReportActions.setToDate({toDate:params.row.to_date}))
      return navigate(`/dashboard/aorreportid/${divisionid}/${params.id}`);
  }

  const handleQuaterDisplay = (params) => {
    if(params.row.name === 'quater1'){
      return "Quater 1"
    }
    if(params.row.name === 'quater2'){
      return "Quater 2"
    }
    if(params.row.name === 'quater3'){
      return "Quater 3"
    }
    if(params.row.name === 'quater4'){
      return "Quater 4"
    }
    return
  }

  const handleCreatedAtDisplay = (params) => {
    return params.row.created_at.slice(0,10)
  }

  const columns = React.useMemo(
    () => [
      { field: 'year', hideable: false, headerName: 'Financial Year', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1
    },
    { field: 'from_date', hideable: false, headerName: 'From Date', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1
  },
  { field: 'to_date', hideable: false, headerName: 'To Date', headerAlign: 'center',headerClassName: 'themeheader',cellClassName: 'themecell', flex: 1
  },
    { field: 'created_at', headerName: 'Created At',flex: 2, headerClassName: 'themeheader',headerAlign: 'center',cellClassName: 'themecell1',renderCell: handleCreatedAtDisplay },
    { field: 'verified_btn_flag', headerName: 'Verified Status',headerAlign: 'center', headerClassName: 'themeheader',cellClassName: 'themecell',type: 'boolean',flex: 1 },
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
          icon={<div className='f6'><PageviewIcon color="actions"/><span className='ml2 b'>Generate Report</span></div>}
          label="Generate Report"
          onClick={() => handleActionClick(params)}
        />,
      ],
    },
  ],
  [handleActionClick],
  );

  return (
    <div style={{ display: 'flex', height: '100%' }}>
    <div style={{ flexGrow: 1 }}>
      <DataGrid 
      columns={columns}
      rows={quaterreports} 
      components={{ Toolbar: GridToolbar }} />
    </div>
    </div>
  );
}

export default AsOnReportListAdmin

