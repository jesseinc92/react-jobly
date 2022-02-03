import React, { useState } from "react";
import './SignUpForm.css';


const SignUpForm = () => {
  const INITIAL_STATE = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  return (
    <div className='SignUpForm'>
      <h2>Sign Up</h2>
      <form className='login-signup-form'>
      <div className='input-group'>
          <label>Username</label>
          <input type='text' />
        </div>

        <div className='input-group'>
          <label>Password</label>
          <input type='text' />
        </div>

        <div className='input-group'>
          <label>First Name</label>
          <input type='text' />
        </div>

        <div className='input-group'>
          <label>Last Name</label>
          <input type='text' />
        </div>

        <div className='input-group'>
          <label>Email</label>
          <input type='text' />
        </div>

        <div className='form-btn'>
          <button className='primary-btn'>Sign Up</button>
        </div>
      </form>
    </div>
  );
}


export default SignUpForm;