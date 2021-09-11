import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GistList from './components/gistList';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/*
Parent component for Navbar and GistList Components
*/ 

function App() {
  
  return (
    <React.Fragment>
      <Navbar/>
      <GistList />
    </React.Fragment>
    
  );
}

export default App;
