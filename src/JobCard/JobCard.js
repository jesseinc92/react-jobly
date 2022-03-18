import React, { useEffect, useState } from 'react';
import ApplyButton from '../ApplyButton/ApplyButton';
import JoblyApi from '../api';
import './JobCard.css';


const JobCard = ({ job }) => {
  const [applied, setApplied] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(user)

  // pre-loads the applied state upon mount and updates it with 
  useEffect(() => {
    function getApplicationStatus() {
      for (let appliedJob of user.applications) {
        if (appliedJob === job.id) setApplied(true);
      }
    }
    getApplicationStatus();
  }, [user.username, job.id, user.applications?.length]);

  // handles the click action on the Apply button
  const handleApply = async () => {
    const res = await JoblyApi.applyForJob(token, user.username, job.id);
    console.log(res);

    // TODO: find a way to re-render upon Apply
    const updatedUser = await JoblyApi.getUser(token, user.username);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    console.log(updatedUser);
    setUser(updatedUser);
  }

  return (
    <div className='JobCard card'>
      <h4>{job.title}</h4>
      <p>Salary: {job.salary ?? 'Unknown'}</p>
      <p>Equity: {job.equity ?? 'Unknown'}</p>
      <ApplyButton applied={applied} handleApply={handleApply} />
    </div>
  )
}


export default JobCard;