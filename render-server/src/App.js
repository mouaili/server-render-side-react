import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact';

function App() {
  return (
    <Fragment>
      <div className='App-header'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <h1>App React.js</h1>
      <Link className='App-link' to='/home'>Go to home page</Link>
      </div>
    </Fragment>
  );
}

export default App;
