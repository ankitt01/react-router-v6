import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
<Router>
  <Routes>
    <Route path="/" element={Home}/>
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
