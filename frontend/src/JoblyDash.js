import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import JoblyApi from './api';


const JoblyDash = () => {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {    
    // grab user information/token from local storage
    // Dependency: loggedIn state, which only toggles
    //    when handleLogin or handleLogout are called
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [loggedIn]);

  const handleLogin = async ({ username, password }) => {
    try {
      const token = await JoblyApi.authUser(username, password);
      console.log(token);

      const authedUser = (await JoblyApi.getUser(token, username)).user;
      setUser(authedUser);
      setLoggedIn(true);

      // save authorized user details in local storage for persistence
      localStorage.setItem('user', JSON.stringify(authedUser));
      history('/');
    } catch (err) {
      alert(err);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
    history('/');
  }

  return (
    <main className='JoblyDash'>
      <Nav user={user} handleLogout={handleLogout}/>
      <Outlet context={{user, setUser, handleLogin}} />
    </main>
  );
}


export default JoblyDash;