import React, {useState} from 'react';
import "./Registration.css";
import "./Page.css"
import Navbar from '../components/Navbar.js'
import {useNavigate} from "react-router-dom";
const bcrypt = require("bcryptjs");



async function registerUser(username, password){
    console.log(username);
    const passwordHash = await bcrypt.hash(password, 10)
    if (!username || typeof username !== 'string'){
      return alert("Invalid username")
    }
    else if (!password || typeof password !== "string") {
      return alert("Invalid password")
    }
    else if (password.length < 4 ) {
      return alert("Password is too short")
    }
    return fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            passwordHash
        })
    }).then((res) =>res.json())
      .then((token) => {
        if(token.status==="ok"){
          console.log(token.data);
          localStorage.setItem('token', token.data, 1000*60*60);
          return true;
        }
        else{
          alert(token.error);
          return false;
        }
      })

}

export default function Register() {
    const [username, setUser] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await registerUser(
        username,
        password
    );
  
    console.log(token);
    if (token === true)
      Navigate("/");
    }
  
    return(
      <div>
        <Navbar />
        <div className='content-wrapper'>
          <div className="login-wrapper">
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit} className='center-wrapper'>
              <label>
                <p>Username</p>
                <input type="text" onChange={e => setUser(e.target.value)} />
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
              </label>
              <div>
                <button type="submit" className='button1 small-button1 pink-button1'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  