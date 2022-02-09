import React from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import './SignUpForm.css';


const SignUpForm = () => {
  const INITIAL_STATE = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  const { user, handleSignUp } = useOutletContext();
  const [formData, handleChange, handleSubmit] = useFormData(INITIAL_STATE, handleSignUp);

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
            type='password'
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