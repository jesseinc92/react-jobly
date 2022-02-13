import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import JoblyApi from '../api';
import loginWithToken from '../helpers/loginWithToken';


const JoblyDash = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(null);
  const history = useNavigate();

  useEffect(() => {    
    // grab user information/token from local storage
    // Dependency: token state, which only toggles
    //    when handleLogin or handleLogout are called
    setToken(JSON.parse(localStorage.getItem('token')));
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [token]);

  const handleSignUp = async ({ username, password, firstName, lastName, email }) => {
    try {
      const token = await JoblyApi.createUser(username, password, firstName, lastName, email);
      loginWithToken(token, username, setToken, setUser);
      history('/');
    } catch (err) {
      alert(err);
    }
  }

  const handleLogin = async ({ username, password }) => {
    try {
      const token = await JoblyApi.authUser(username, password);
      loginWithToken(token, username, setToken, setUser);
      history('/');
    } catch (err) {
      alert(err);
    }
  }

  const handleUpdate = async ({ username, firstName, lastName, email }) => {
    try {
      // update the user, and save the returned user information in local storage
      const updatedUser = await JoblyApi.updateUser(token, username, firstName, lastName, email);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      history('/');
    } catch (err) {
      alert(err);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    localStorage.removeItem('token');
    setToken(null);
    history('/');
  }

  return (
    <main className='JoblyDash'>
      <Nav user={user} handleLogout={handleLogout}/>
      <Outlet context={{token, user, setUser, handleSignUp, handleLogin, handleUpdate}} />
    </main>
  );
}


export default JoblyDash;