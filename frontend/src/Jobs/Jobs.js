import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import JobCard from '../JobCard/JobCard';
import SearchBar from '../SearchBar/SearchBar';
import './Jobs.css';


const Jobs = () => {
  // state and API calls go here
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    async function jobs() {
      let res = await JoblyApi.getAllJobs(query);
      setJobs(res);
    }
    jobs();
  }, [query]);

  return (
    <section className='Jobs'>
      <SearchBar parent='jobs' setQuery={setQuery} />

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  )
}


export default Jobs;