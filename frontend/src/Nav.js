import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
  return (
    <nav className='Nav'>
      <NavLink className='Nav-link Nav-link-hero' to='/'>Jobly</NavLink>
      <NavLink className='Nav-link' to='/login'>Login</NavLink>
      <NavLink className='Nav-link' to='/signup'>Sign Up</NavLink>
    </nav>
  );
}


export default Nav;