import React, { useState } from 'react';
import ApplyButton from '../ApplyButton/ApplyButton';
import './JobCard.css';


const JobCard = ({ job }) => {
  const [applied, setApplied] = useState();

  // TODO: create an apply function for user.applications

  return (
    <div className='JobCard card'>
      <h4>{job.title}</h4>
      <p>Salary: {job.salary || 'Unknown'}</p>
      <p>Equity: {job.equity || 'Unknown'}</p>
      <ApplyButton application={{ applied, setApplied }} />
    </div>
  )
}


export default JobCard;