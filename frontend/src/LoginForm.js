import React, { useState } from 'react';
import { Navigate, useOutletContext } from 'react-router-dom';
import './LoginForm.css';


const LoginForm = () => {
  const INITIAL_STATE = { username: '', password: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { user, handleLogin } = useOutletContext();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(formData);
    setFormData(INITIAL_STATE);
  }

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
            type='text'
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