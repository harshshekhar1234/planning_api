import React, {useEffect} from 'react'
import DivisionCardEntry from './Utilities/DivisionCardEntry'
import {getDivisionsData} from '../store/divisions-action';
import {divisionsActions} from '../store/divisionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function DepartmentEntry({id, name}) {

    const dispatch = useDispatch();
    const divisions = useSelector((state) => state.divisions.divisions);

   

    useEffect(() => {
        dispatch(getDivisionsData(id));
        }, []);

    if(divisions.length === 0){
      return <div>
      <Box sx={{ width: '100%' }}>
       <LinearProgress />
      </Box>
      <h2 className='tc mt2 b'>Loading...</h2>
      </div>
    }

  return (<>
    <h1>{name}</h1>
    <div className='flex flex-wrap mh1 mh4-m mh5-ns br3'>
        {divisions.map(division => {return <DivisionCardEntry key={division.id} division={division}/>})}
    </div>
    </>
  )
}

export default DepartmentEntry