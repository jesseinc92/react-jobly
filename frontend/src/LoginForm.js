import React, { useState } from 'react';
import './LoginForm.css';


const LoginForm = () => {
  const INITIAL_STATE = { username: '', password: ''}
  const [formData, setFormData] = useState(INITIAL_STATE);



  return (
    <div className='LoginForm'>
      <h2>Login</h2>
      <form className='login-signup-form'>
        <div className='input-group'>
          <label>Username</label>
          <input type='text' />
        </div>

        <div className='input-group'>
          <label>Password</label>
          <input type='text' />
        </div>

        <div className='form-btn'>
          <button className='primary-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}


export default LoginForm;