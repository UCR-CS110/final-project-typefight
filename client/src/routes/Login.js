import React, {useState} from 'react';
import "./Login.css";
import "./Page.css";
import Navbar from '../components/Navbar.js'
import {useNavigate} from "react-router-dom";


async function loginUser(username, password){

    return fetch('http://localhost:8080/validateLogin', {
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
      if(token.status==="ok"){
        localStorage.setItem('token', token.data, 1000*60*60);
        return true;
      }
      else{
        alert(token.error);
        return false;
      }
    })
}

export default function Login() {
    const [username, setUser] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser(
        username,
        password
    );

    if(token === true)
      Navigate("/");
    }
  
    return(
      <div>
        <Navbar />
        <div className='content-wrapper2'>
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
                <button type="submit" className='button2 small-button2 pink-button2'>Login</button>
              </div>
    
            </form>
          </div>
        </div>
      </div>
    )
  }