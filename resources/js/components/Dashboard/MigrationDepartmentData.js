import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getDepartmentData} from '../store/department-action';
import { useSelector, useDispatch } from 'react-redux';
import MigrationDepartment from './MigrationDepartment'

function MigrationDepartmentData() {

    let params = useParams();
    const dispatch = useDispatch();
    const departmentName = useSelector((state) => state.department.name);
    const departmentMessage = useSelector((state) => state.department.message);


    useEffect(() => {
        dispatch(getDepartmentData(params.id));
        }, []);

  return (<>
    <MigrationDepartment id={params.id} name={departmentName} />
    </>
  )
}

export default MigrationDepartmentData