import React from 'react';
import { Navigate, useOutletContext } from 'react-router-dom';
import useFormData from '../hooks/useFormData';
import './LoginForm.css';


const LoginForm = () => {
  const INITIAL_STATE = { username: '', password: '' };
  const { user, handleLogin } = useOutletContext();
  const [formData, handleChange, handleSubmit] = useFormData(INITIAL_STATE, handleLogin);

  // redirects a user back to the Landing Page if
  // they are logged in
  if (user) {
    return <Navigate to='/'/>
  }

  return (
    <div className='LoginForm'>
      <h2>Login</h2>
      <form className='login-signup-form' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label><b>Username</b></label>
          <input 
            type='text'
            name='username'
            id='username'
            value={formData.username}
            onChange={handleChange} 
          />
        </div>

        <div className='input-group'>
          <label><b>Password</b></label>
          <input 
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
           />
        </div>

        <div className='form-btn'>
          <button className='primary-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}


export default LoginForm;