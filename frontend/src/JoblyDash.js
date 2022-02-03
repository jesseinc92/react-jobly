import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';


const JoblyDash = () => {
  return (
    <main className='JoblyDash'>
      <Nav />
      <Outlet />
    </main>
  );
}


export default JoblyDash;