import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./ChangePassword.css";


async function ChangePassword(oldPassword, password, tokenCookie){
    return fetch('http://localhost:8080/changePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newpassword: password,
            token: localStorage.getItem('token')
        })
    }).then((res) =>res.json())
    .then((token) => {
      // console.log(token.data);
      localStorage.setItem('token', token.data, 1000*60*60);
    })
}

export default function ChangePassword({setToken}){
    const [oldPassword, setOldPassword] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await ChangePassword(
        oldPassword,
        password,
        localStorage.getItem('token')
    );
      // setToken(token);
    }
  
    return(
      <div>
      <div className="login-wrapper">
        <h1>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Old Password</p>
            <input type="text" onChange={e => setOldPassword(e.target.value)} />
          </label>
          <label>
            <p>New Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Change Password</button>
          </div>
 
        </form>
      </div>
      </div>
    )
  }