import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JoblyDash from './JoblyDash';
import LandingPage from './LandingPage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<JoblyDash />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;