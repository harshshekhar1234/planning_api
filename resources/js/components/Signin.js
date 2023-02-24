import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signinActions } from './store/signinSlice';
import { sendSigninData } from './store/signin-action';
import { useNavigate } from "react-router-dom";
import Header from './Home/Component/Header';
import Footer from './Home/Component/Footer';
import {errorActions} from './store/errorSlice';
import {finYearActions} from './store/finYearSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Signin = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector((state) => state.signin.email);
    const password = useSelector((state) => state.signin.password);
    const message = useSelector((state) => state.signin.message);
    const role = useSelector((state) => state.user.role);
    const isSignedIn = useSelector((state) => state.user.isSignedIn);
    const finYear = useSelector((state) => state.finYear.finYear);
    const error = useSelector((state) => state.error.error);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const onEmailChangeHandler = (event) => {
      dispatch(signinActions.setEmail({email:event.target.value}))
      
    }  

    const onPasswordChangeHandler = (event) => {
      dispatch(signinActions.setPassword({password:event.target.value}))
      
    } 

    const handleChangeFinYear = (event) => {
      dispatch(finYearActions.setFinYear({finYear:event.target.value}))
    }

    const onSubmitHandler = () => {
      
     dispatch(sendSigninData(email,password))
     }  

     useEffect(() => {
      return () => {
        dispatch(signinActions.setEmail({email:''}))
        dispatch(signinActions.setPassword({password:''}))
        dispatch(signinActions.setMessage({message:''}))
      }
    }, []);

     useEffect(() => {
       if(isSignedIn === true){
        if(role === 'admin'){
           return navigate(`/dashboard/main`);
       } 
       if(role === 'user'){
        return navigate(`/dashboarddeptuser/main`);
       }  
       if(role === 'verifier'){
        return navigate(`/dashboardverifier/main`);
       } 

      }
  }, [isSignedIn]);

  useEffect(() => {
    if(error){
        return navigate(`/errorpage`);
    }  
    return () => {
        dispatch(errorActions.setError({error:false}))
    }
}, [error]);
    

    return (
        <>
        <Header/>
        
        <div className="pa3 mt4 mb7 measure center shadow-2">
        <legend className="mh2"><h2 className='b'>Log In</h2></legend>
  <div className="form-group mb3">
    <label htmlFor="exampleInputEmail1" className='b'>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={onEmailChangeHandler}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" className='b'>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={password} onChange={onPasswordChangeHandler}/>
  </div>
  <div className="form-group mt3">
  <FormControl sx={{mt: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Financial Year</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={finYear}
        label="Financial Year"
        onChange={handleChangeFinYear}
      >
        <MenuItem value={2324}>2023-24</MenuItem>
        <MenuItem value={2223}>2022-23</MenuItem>
      </Select>
    </FormControl>
    </div>
  <button type="submit" className="btn btn-primary mb4 mt3" onClick={onSubmitHandler}>Submit</button>
  {message && <p className='alert alert-primary'>{message}</p>}
</div>
<Footer />
</>
    );
}

export default Signin;