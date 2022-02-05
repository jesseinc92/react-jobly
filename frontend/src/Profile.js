import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './Profile.css';


const Profile = () => {
  const { user } = useOutletContext();

  return (
    <div className='Profile'>
      <h2>Profile</h2>
      <form className='profile-card'>
        <div className='input-group'>
          <label><b>Username</b></label>
          <p>{user.username}</p>
        </div>

        <div className='input-group'>
          <label><b>First Name</b></label>
          <input type='text' value={user.firstName}/>
        </div>

        <div className='input-group'>
          <label><b>Last Name</b></label>
          <input type='text' value={user.lastName} />
        </div>

        <div className='input-group'>
          <label><b>Email</b></label>
          <input type='text' value={user.email} />
        </div>
      </form>
    </div>
  );
}


export default Profile;