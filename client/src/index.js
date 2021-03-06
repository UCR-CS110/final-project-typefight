import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Fonts/Urbanist.ttf'; 
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/Home.js';
import Play from './routes/Play.js';
import Register from './routes/Registration.js';
import Login from './routes/Login.js';
import Rankings from './routes/Rankings.js';
import Profile from './routes/Profile.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/play" element={<Play/>}/>
      <Route path = "/register" element={<Register/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/rankings" element={<Rankings/>}/>
      <Route path = "/profile/:username" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
