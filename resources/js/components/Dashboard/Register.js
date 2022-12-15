import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerActions } from '../store/registerSlice';
import { sendRegisterData } from '../store/register-action';
import { useNavigate } from "react-router-dom";
import {divisionsActions} from '../store/divisionsSlice';
import {getDepartmentsData} from '../store/departments-action';
import {getDivisionsData} from '../store/divisions-action';


const Register = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector((state) => state.register.name);
    const email = useSelector((state) => state.register.email);
    const password = useSelector((state) => state.register.password);
    const message = useSelector((state) => state.register.message);
    const departmentId = useSelector((state) => state.register.departmentId);
    const divisionId = useSelector((state) => state.register.divisionId);
    const role = useSelector((state) => state.register.role);

    const departments = useSelector((state) => state.departments.departments);
    const divisions = useSelector((state) => state.divisions.divisions);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    useEffect(() => {
      dispatch(getDepartmentsData());
      return () => {
          dispatch(registerActions.setName({name:''}))
          dispatch(registerActions.setEmail({email:''}))
          dispatch(registerActions.setPassword({password:''}))
          dispatch(registerActions.setDepartmentId({departmentId:''}))
          dispatch(registerActions.setDivisionId({divisionId:''}))
          dispatch(registerActions.setRole({role:'user'}))
          dispatch(registerActions.setMessage({message:''}))
          dispatch(divisionsActions.setDivisions({divisions:[]}))
      }
    }, []);

    useEffect(() => {
      if(departmentId !== ''){
      dispatch(getDivisionsData(departmentId))}
    }, [departmentId]);

    const handleDepartmentChange = (event) => {
      dispatch(registerActions.setDepartmentId({departmentId:event.target.value}))
      dispatch(registerActions.setMessage({message:''}))
    }

    const handleRoleChange = (event) => {
      dispatch(registerActions.setRole({role:event.target.value}))
      dispatch(registerActions.setMessage({message:''}))
    }

    const handleDivisionChange = (event) => {
      dispatch(registerActions.setDivisionId({divisionId:event.target.value}))
      dispatch(registerActions.setMessage({message:''}))
    }

    const onEmailChangeHandler = (event) => {
      dispatch(registerActions.setEmail({email:event.target.value}))
      dispatch(registerActions.setMessage({message:''}))
      
    } 

    const onNameChangeHandler = (event) => {
      dispatch(registerActions.setName({name:event.target.value}))
      dispatch(registerActions.setMessage({message:''}))
      
    } 

    const onPasswordChangeHandler = (event) => {
      dispatch(registerActions.setPassword({password:event.target.value}))
      dispatch(registerActions.setMessage({message:''}))
      
    } 

    const onSubmitHandler = () => {

      if(email === '') {
        return dispatch(registerActions.setMessage({message:'Please enter Email'}))}
      
      if(name === '') {
        return dispatch(registerActions.setMessage({message:'Please Enter Name'}))}

      if(password === '') {
        return dispatch(registerActions.setMessage({message:'Please Enter Password'}))}

      if(password.length < 6) {
        return dispatch(registerActions.setMessage({message:'Password must be greater than 6 characters'}))}

      if(divisionId === '') {
        return dispatch(registerActions.setMessage({message:'No Division Selected'}))}

      if(departmentId === '') {
        return dispatch(registerActions.setMessage({message:'No Department Selected'}))}
                
      if(role === '') {
        return dispatch(registerActions.setMessage({message:'No Role Selected'}))}

     dispatch(sendRegisterData(email,password,name,departmentId,divisionId,role))
     }  
  
    return (
        <div className="center">
        <h1 className='b'>Create New User</h1>
  <div className="pa4 black-80">
    <label htmlFor="name" className="f6 b db mb2">Name</label>
    <input id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={onNameChangeHandler} value={name}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
</div>
  <div className="pa4 black-80">
    <label htmlFor="email" className="f6 b db mb2">Email address</label>
    <input id="email" className="ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="name-desc" onChange={onEmailChangeHandler} value={email}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
</div>
  <div className="pa4 black-80">
    <label htmlFor="password" className="f6 b db mb2">Password</label>
    <input id="password" className="ba b--black-20 pa2 mb2 db w-100" type="password" aria-describedby="name-desc" onChange={onPasswordChangeHandler} value={password}/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
</div>
  <div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="department_name" className="f6 b db mb2">Select Department Name</label>
    <select id="department_name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDepartmentChange}>
    <option value='default'>Select the department</option>
    {departments && departments.map(department => {return <option key={department.id} value={department.id}>{department.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
<div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="name" className="f6 b db mb2">Select Division Name</label>
    <select id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleDivisionChange}>
    <option value='default'>Select the division</option>
    {divisions && divisions.map(division => {return <option key={division.id} value={division.id}>{division.name}</option>})}
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
<div className="pa4 black-80">
  <div className="measure">
    <label htmlFor="name" className="f6 b db mb2">Select Role</label>
    <select id="name" className="ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" defaultValue={'default'} onChange={handleRoleChange}>
    <option value='user'>User</option>
    <option value='verifier'>Verifier</option>
    </select>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
</div>
  {(message !== '') && <p className="f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40">{message}</p>}
  <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={onSubmitHandler}>Create New User</p>
</div>
    );
}

export default Register;