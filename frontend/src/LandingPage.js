import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      <NavLink className='primary-btn' to=''>Login</NavLink>
      <NavLink className='primary-btn' to=''>Sign Up</NavLink>
    </div>
  );
}


export default LandingPage;