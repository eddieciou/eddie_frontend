import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage';
import Game from './game/Game';
import PracticePage from './practice/PracticePage';

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
        <NavLink
          to='/game'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Game
        </NavLink>
        <NavLink
          to='/practice'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Practice
        </NavLink>
      </header>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/practice' element={<PracticePage />} />
          <Route path='/game' element={<Game />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
