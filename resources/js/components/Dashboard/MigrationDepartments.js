import React, {useState, useEffect} from 'react'
import {miggetDepartmentsData} from '../store/departments-action';
import { useSelector, useDispatch } from 'react-redux';
import MigrationDepartmentCard from './Utilities/MigrationDepartmentCard';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function MigrationDepartments() {

  const dispatch = useDispatch();

  const departments = useSelector((state) => state.departments.departments);
  const message = useSelector((state) => state.departments.message);    

    useEffect(() => {
      dispatch(miggetDepartmentsData());
    }, []);

  return (<>
    {(departments.length === 0) ? (
      <div>
      <Box sx={{ width: '100%' }}>
       <LinearProgress />
      </Box>
      <h2 className='tc mt2 b'>Loading...</h2>
      </div>
    ) : (
    <div className='flex flex-wrap mh1 mh4-m mh5-ns br3'>
        {departments.map(department => {return <MigrationDepartmentCard key={department.id} department={department}/>})}
    </div>)}
    </>
  )
}

export default MigrationDepartments