import React,{useState,useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Pages/MainHome';
import { useSelector, useDispatch } from 'react-redux';
import {errorActions} from '../store/errorSlice';

function Home2() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const error = useSelector((state) => state.error.error);

  useEffect(() => {
    if(error){
        return navigate(`/errorpage`);
    }  
    return () => {
        dispatch(errorActions.setError({error:false}))
    }
}, [error]);

  return <div className=''>
      <Header/>
      <Main/>
      <Footer />
  </div>;
}

export default Home2;