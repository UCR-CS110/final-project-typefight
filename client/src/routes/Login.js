import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./Login.css";
import Navbar from '../components/Navbar.js'
import {
  useNavigate
} from "react-router-dom";



async function loginUser(username, password){

    return fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then((res) =>res.json())
    .then((token) => {
      // console.log(token.data);
      localStorage.setItem('token', token.data, 1000*60*60);
      if(token.status==="ok"){
          return true;
      }
    })
}
      // 
export default function Login({setToken}){
    const [username, setUser] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser(
        username,
        password
    );
    if(token===true)
    Navigate("/");
      // setToken(token);
    }
  
    return(
      <div>
      <Navbar />
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUser(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
 
        </form>
      </div>
      </div>
    )
  }
  
  // Login.propTypes = {
  //   setToken: PropTypes.func.isRequired
  // };