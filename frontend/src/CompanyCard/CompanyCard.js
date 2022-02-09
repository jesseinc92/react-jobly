import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';


const CompanyCard = ({ company }) => {
  return (
    <Link to={`/companies/${company.handle}`} className='CompanyCard card'>
      <h4>{company.name}</h4>
      <p>{company.description}</p>
      {company.logoUrl && <img src={company.logoUrl} alt={company.name} />}
    </Link>
  )
}


export default CompanyCard;