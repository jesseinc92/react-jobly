import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  const { user } = useOutletContext();

  return (
    <div className='LandingPage'>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>

      {user ?
        <h2>Welcome back, {user.firstName}!</h2>
        :
        <>
          <NavLink className='primary-btn' to='/login'>Login</NavLink>
          <NavLink className='primary-btn' to='/signup'>Sign Up</NavLink>
        </>
      }
    </div>
  );
}


export default LandingPage;