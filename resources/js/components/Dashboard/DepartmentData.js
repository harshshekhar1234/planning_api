import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getDepartmentData} from '../store/department-action';
import { useSelector, useDispatch } from 'react-redux';
import Department from './Department'

function DepartmentData() {

    let params = useParams();
    const dispatch = useDispatch();
    const departmentName = useSelector((state) => state.department.name);
    const departmentMessage = useSelector((state) => state.department.message);


    useEffect(() => {
        dispatch(getDepartmentData(params.id));
        }, []);

  return (<>
    <Department id={params.id} name={departmentName} />
    </>
  )
}

export default DepartmentData