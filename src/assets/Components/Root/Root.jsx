import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className='bg-base-300'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;