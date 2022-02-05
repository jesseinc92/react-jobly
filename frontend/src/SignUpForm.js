import React, { useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
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
  const { user } = useOutletContext();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: handle adding user to db
    setFormData(INITIAL_STATE);
  }

  // redirects a user back to the Landing Page if
  // they are logged in
  if (user) {
    return <Navigate to='/'/>
  }

  return (
    <div className='SignUpForm'>
      <h2>Sign Up</h2>
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

        <div className='input-group'>
          <label><b>First Name</b></label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleChange}
           />
        </div>

        <div className='input-group'>
          <label><b>Last Name</b></label>
          <input 
            type='text'
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleChange}
           />
        </div>

        <div className='input-group'>
          <label><b>Email</b></label>
          <input 
            type='text'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
           />
        </div>

        <div className='form-btn'>
          <button className='primary-btn'>Sign Up</button>
        </div>
      </form>
    </div>
  );
}


export default SignUpForm;