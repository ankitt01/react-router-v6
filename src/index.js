import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/myapps' element={<Learn />} />
      <Route path='/learn' element={<Navigate replace to="/myapps" />} /> 
      {/* without replace keyword the learn page comes on top  */}
    </Routes>
  </Router>,
  document.getElementById('root')
);


function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  )
}
function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
    </div>
  )
}