import React, {useEffect} from 'react'
import MigrationDivisionCard from './Utilities/MigrationDivisionCard'
import {miggetDivisionsData} from '../store/divisions-action';
import {divisionsActions} from '../store/divisionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function MigrationDepartment({id, name}) {

    const dispatch = useDispatch();
    const divisions = useSelector((state) => state.divisions.divisions);

   

    useEffect(() => {
        dispatch(miggetDivisionsData(id));
        return () => { 
          dispatch(divisionsActions.setDivisions({divisions: []})) 
        }
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
        {divisions.map(division => {return <MigrationDivisionCard key={division.id} division={division}/>})}
    </div>
    </>
  )
}

export default MigrationDepartment