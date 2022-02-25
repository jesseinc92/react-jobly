import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';
import JobCard from '../JobCard/JobCard';
import './CompanyPage.css';
import '../JobCard/JobCard.css';


const CompanyPage = () => {
  const { handle } = useParams();
  const [companyData, setCompanyData] = useState({ 
    name: '', 
    description: '', 
    jobs: [],
    numEmployees: null,
    logoUrl: ''
  });

  useEffect(() => {
    async function company() {
      const res = await JoblyApi.getCompany(handle);
      setCompanyData(res);
    }
    company();
  }, [handle]);

  return (
    <section className='CompanyPage'>
      {companyData.logoUrl && <img className='CompanyPage-logo' src={companyData.logoUrl} alt={companyData.name} />}
      <h2>{companyData.name}</h2>
      <p>{companyData.description}</p>
      {companyData.jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  )
}


export default CompanyPage;