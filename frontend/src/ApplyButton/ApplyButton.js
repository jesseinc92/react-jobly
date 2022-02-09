import React from 'react';
import './ApplyButton.css';


const ApplyButton = ({ application }) => {
  const { applied, setApplied } = application;
  const handleApply = () => {
    setApplied(app => !app);
  }

  return (
    <button className='ApplyButton primary-btn' onClick={handleApply}>
      {applied ? 'Applied' : 'Apply'}
    </button>
  )
}


export default ApplyButton;