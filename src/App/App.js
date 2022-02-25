import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JoblyDash from '../JoblyDash/JoblyDash';
import LandingPage from '../LandingPage/LandingPage';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import Profile from '../Profile/Profile';
import Companies from '../Companies/Companies';
import Jobs from '../Jobs/Jobs';
import SearchBar from '../SearchBar/SearchBar';
import JobCard from '../JobCard/JobCard';
import CompanyPage from '../CompanyPage/CompanyPage';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<JoblyDash />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path='companies'>
            <Route index element={<Companies />} />
            <Route path=':handle' element={<CompanyPage />} />
          </Route>
          <Route path='jobs' element={<Jobs />}>
            <Route index element={[<SearchBar />, <JobCard />]} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App;