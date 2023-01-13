import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Landling from './pages/Landling';

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path='/' element={<Landling/>}></Route>
    <Route exact path='/shop' element={<Shop/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/services' element={<Services/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
  </Routes>
</Router>
)
}

export default App;
