import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signinActions } from './store/signinSlice';
import { sendSigninData } from './store/signin-action';
import { useNavigate } from "react-router-dom";
import Header from './Home/Component/Header';
import Footer from './Home/Component/Footer';
import {errorActions} from './store/errorSlice';


const Signin = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector((state) => state.signin.email);
    const password = useSelector((state) => state.signin.password);
    const message = useSelector((state) => state.signin.message);
    const role = useSelector((state) => state.user.role);
    const isSignedIn = useSelector((state) => state.user.isSignedIn);
    const error = useSelector((state) => state.error.error);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const onEmailChangeHandler = (event) => {
      dispatch(signinActions.setEmail({email:event.target.value}))
      
    }  

    const onPasswordChangeHandler = (event) => {
      dispatch(signinActions.setPassword({password:event.target.value}))
      
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
  <button type="submit" className="btn btn-primary mb4 mt3" onClick={onSubmitHandler}>Submit</button>
  {message && <p className='alert alert-primary'>{message}</p>}
</div>
<Footer />
</>
    );
}

export default Signin;