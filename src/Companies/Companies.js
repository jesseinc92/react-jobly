import React, { useState, useEffect } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';
import SearchBar from '../SearchBar/SearchBar';
import JoblyApi from '../api';
import './Companies.css';


const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    async function companies() {
      const res = await JoblyApi.getAllCompanies(query);
      setCompanies(res);
    }
    companies();
  }, [query]);

  return (
    <section className='Companies'>
      <SearchBar parent='companies' setQuery={setQuery} />
      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </section>
  )
}


export default Companies;