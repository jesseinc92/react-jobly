import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = ({ parent, setQuery }) => {
  const [formData, setFormData] = useState({ title: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  }

  const handleFilterSubmit = e => {
    e.preventDefault();
    if (formData) setQuery(formData);
  }

  return (
    <form className='SearchBar' onSubmit={handleFilterSubmit}>
      <div className='input-group SearchBar-input'>
        <input 
          type='text'
          name={parent === 'jobs' ? 'title' : 'name'}
          value={formData.query}
          placeholder='Enter search filter...'
          onChange={handleChange}
        />
        <button>Search</button>
      </div>
    </form>
  )
}


export default SearchBar;