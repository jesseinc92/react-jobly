import React from 'react';
import './ApplyButton.css';


const ApplyButton = ({ applied, handleApply }) => {
  return (
    <button className='ApplyButton primary-btn' onClick={handleApply} style={ applied? { backgroundColor: 'hsl(165, 83%, 47%)'} : null }>
      {applied ? 'Applied' : 'Apply'}
    </button>
  )
}


export default ApplyButton;