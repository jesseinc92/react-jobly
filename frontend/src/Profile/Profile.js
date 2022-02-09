import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './Profile.css';


const Profile = () => {
  const { handleUpdate } = useOutletContext();
  const currUser = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState(currUser);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleUpdate(formData);
    setFormData(currUser);
  }

  return (
    <div className='Profile'>
      <h2>Profile</h2>
      <form className='profile-card' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label><b>Username</b></label>
          <p>{formData.username}</p>
        </div>

        <div className='input-group'>
          <label htmlFor='firstName'><b>First Name</b></label>
          <input 
            type='text' 
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className='input-group'>
          <label htmlFor='lastName'><b>Last Name</b></label>
          <input 
            type='text'
            id='lastName'
            name='lastName' 
            value={formData.lastName}
            onChange={handleChange} 
          />
        </div>

        <div className='input-group'>
          <label htmlFor='email'><b>Email</b></label>
          <input 
            type='text' 
            id='email'
            name='email'
            value={formData.email} 
            onChange={handleChange}
          />
        </div>

        <div className='input-group'>
          <label htmlFor='password'><b>Confirm password to make changes.</b></label>
          <input 
            type='password' 
            id='password'
            name='password'
            value='' 
            placeholder='TODO: enable authentication'
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}


export default Profile;