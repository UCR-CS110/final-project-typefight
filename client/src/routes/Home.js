import React, { useState, useEffect } from 'react';
import './Home.css'
import './Page.css'
import Navbar from '../components/Navbar.js'

function Home() {
	const [validToken, setValidToken] = useState(false);
	const [sessionUsername, setSessionUsername] = useState(null);

	let token = localStorage.getItem('token');
	let profileButton;

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
		let profileUrl = "profile/" + sessionUsername;
		profileButton=<a href={profileUrl} className="button small-button pink-button">Profile</a>
	}
	else{
		profileButton=<div className="button small-button gray-button">Profile</div>
	}

	return(
		<body>
			<Navbar/>
			<div className="content-wrapper">
				<div className="logo">TypeFight</div>
				<div className="button-container">
					<a href="play" className="button big-button blue-button">Play</a>
					<a href="rankings" className="button small-button pink-button">Rankings</a>
					{profileButton}
				</div>
			</div>
		</body>
	)
}

export default Home