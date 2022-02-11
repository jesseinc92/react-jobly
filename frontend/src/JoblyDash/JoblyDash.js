import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import JoblyApi from '../api';


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

  const handleSignUp = () => {
    // TODO: create sign up function
  }

  const handleLogin = async ({ username, password }) => {
    try {
      const token = await JoblyApi.authUser(username, password);
      setToken(token);

      const authedUser = (await JoblyApi.getUser(token, username)).user;
      setUser(authedUser);

      // save authorized user details in local storage for persistence
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(authedUser));
      history('/');
    } catch (err) {
      alert(err);
    }
  }

  const handleUpdate = () => {
    // TODO: create update function
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