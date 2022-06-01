import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./Registration.css";
import Navbar from '../components/Navbar.js'
import {
  useNavigate
} from "react-router-dom";



async function registerUser(username, password){
    console.log(username);
    return fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then((res) =>res.json()).then((token1) => {
        console.log(token1);
        localStorage.setItem('token', token1.data, 1000*60*60);
        if(token1.status==="ok"){
            return true;
        }
      })

}

export default function Register({setToken}){
    const [username, setUser] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await registerUser(
        username,
        password
    );
    if (token ===true)
    Navigate("/");
    //   setToken(token);
    }
  
    return(
      <div>
      <Navbar />
      <div className="login-wrapper">
        <h1>Please Register</h1>
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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
  
//   Register.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };