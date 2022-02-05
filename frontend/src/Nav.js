import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';


const Nav = ({ user, handleLogout }) => {
  return (
    <nav className='Nav'>
      <NavLink className='Nav-link Nav-link-hero' to='/'>Jobly</NavLink>

      {user ?
        <>
          <NavLink className='Nav-link' to='/'>Companies</NavLink>
          <NavLink className='Nav-link' to='/'>Jobs</NavLink>
          <NavLink className='Nav-link' to='/profile'>Profile</NavLink>
          <Link className='Nav-link' to='' onClick={handleLogout}>Log out {user.username}</Link>
        </>
        :
        <>
          <NavLink className='Nav-link' to='/login'>Login</NavLink>
          <NavLink className='Nav-link' to='/signup'>Sign Up</NavLink>
        </>
      }
      
    </nav>
  );
}


export default Nav;