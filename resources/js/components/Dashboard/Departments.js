import React, {useState, useEffect} from 'react'
import {getDepartmentsData} from '../store/departments-action';
import { useSelector, useDispatch } from 'react-redux';
import DepartmentCard from './Utilities/DepartmentCard';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Departments() {

  const dispatch = useDispatch();

  const departments = useSelector((state) => state.departments.departments);
  const message = useSelector((state) => state.departments.message);    

    useEffect(() => {
      dispatch(getDepartmentsData());
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
        {departments.map(department => {return <DepartmentCard key={department.id} department={department}/>})}
    </div>)}
    </>
  )
}

export default Departments