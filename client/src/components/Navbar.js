import React, { useState, useEffect, useCallback } from 'react';
import "./Navbar.css";


function Navbar() {
	const [validToken, setValidToken] = useState(false);
	const [sessionUsername, setSessionUsername] = useState(null);

	let token = localStorage.getItem('token');
	let signin;
	let register;
	let signout;
	let profile;

	const logout = useCallback(async () => {
		localStorage.removeItem('token');
		window.location.reload();
	}, []);

	useEffect(() => {
		fetch(`http://localhost:8080/validateToken/${token}`)
			.then(response => response.json())
			.then(data => {
				if(data.login) {
					setValidToken(data.login);
					setSessionUsername(data.decode.username);
				}
			})
			.catch(err => {
				console.log("Error when validating token:", err);
			})
	}, [token]);
	
	if(validToken){
		signout=<li>
					<button className="navbar-link navbar-link-blue" onClick={logout}>
					Signout
					</button>
				</li>;
		profile=<li>
			<a href={`/profile/${sessionUsername}`} className="navbar-link navbar-link-blue">
					{sessionUsername}
					</a>
		</li>
		signin=<div/>;
		register=<div/>;
	}
	else {
		profile=<div />;
		signout=<div />;
		signin=<li>
					<a href="/login" className="navbar-link navbar-link-blue">
					Log In
					</a>
				</li>;
		register=<li>
					<a href="/register" className="navbar-link navbar-link-blue">
					Sign Up
					</a>
				</li>;
	}
	
	return (
		<nav className="navbar">
			<ul className="navbar-items-left">
				<li>
					<a href="/" className="navbar-link navbar-link-blue">
					Home
					</a>
				</li>
				<li>
					<a href="/rankings" className="navbar-link navbar-link-blue">
					Rankings
					</a>
				</li>
				<li>
					<a href="/admin" className="navbar-link navbar-link-pink">
					{/* TODO: Display Admin button conditional based on if logged in account is admin.*/}
					Admin
					</a>
				</li>
			</ul>
			<ul className="navbar-items-right">
				{/* TODO: Display login/signup or profile image conditionally based on if user is signed in.*/}
				{signin}
				{register}
				{profile}
				{signout}
			</ul>
		</nav>
	)
}

export default Navbar;