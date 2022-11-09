import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage';

function App() {
  return (
    <Router>
      <header className='sticky flex'>
        <span>
          <img src='/assets/logo-3.svg' alt='logo' width='49' height='99' />
        </span>
        <NavLink
          to='/'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          <span></span>
          Home
        </NavLink>
        <NavLink
          to='/projects'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Projects
        </NavLink>
      </header>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
