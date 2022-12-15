import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Outlet, Link } from 'react-router-dom';

function HomeLayout() {
  return (
    <div className=''>
      <Header/>
      <Outlet/>
      <Footer />
  </div>
  )
}

export default HomeLayout