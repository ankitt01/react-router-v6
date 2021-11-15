import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/myapps' element={<Navigate replace to="/learn" />} />
      {/* without replace keyword the learn page comes on top  */}
      <Route path='/learn' element={<Learn />}>
        <Route path='bundles' element={<Bundles />} />
        <Route path='courses' element={<Courses />} />
      </Route>
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
      <Link to="/learn/courses">Courses</Link> |
      <Link to="/learn/bundles"> Bundle</Link>
      {/* Link is used over <a> tag because by using Link the page does not reloads */}

      <Outlet />
    </div>
  )
}


function Bundles() {
  return (
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>
    </div>
  )
}

function Courses() {
  return (
    <div>
      <h1>Course List</h1>
      <h4>Course Card</h4>
    </div>
  )
}