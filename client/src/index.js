import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Fonts/Urbanist.ttf'; 
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/Home.js';
import Profile from './routes/Profile.js'
import Register from './routes/Registration';
import Login from './routes/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/profile/:username" element={<Profile/>}/>
        <Route path = "/Register" element={<Register/>}/>
        <Route path = "/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
