import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getDepartmentData} from '../store/department-action';
import {departmentActions} from '../store/departmentSlice';
import { useSelector, useDispatch } from 'react-redux';
import DepartmentEntry from './DepartmentEntry'

function DepartmentDataEntry() {

    let params = useParams();
    const dispatch = useDispatch();
    const departmentName = useSelector((state) => state.department.name);
    const finYear = useSelector((state) => state.finYear.finYear);
    const departmentMessage = useSelector((state) => state.department.message);


    useEffect(() => {
        dispatch(getDepartmentData(params.id,finYear));
        dispatch(departmentActions.setDepartmentId({departmentId:params.id}))
        }, []);

  return (<>
    <DepartmentEntry id={params.id} name={departmentName} />
    </>
  )
}

export default DepartmentDataEntry