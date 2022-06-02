import { Component } from "react";
import './Home.css'
import './Page.css'
import Navbar from '../components/Navbar.js'

class Home extends Component {
	/*
	constructor(props) {
		super(props)
	}
	*/


	render() {
		let token = localStorage.getItem('token');
		let commentUsername = localStorage.getItem('username');
		let prof;
		if(token!==undefined && token!==null){
			prof=<a href="profile/test"className="button small-button pink-button">Profile</a>
		}
		else{
			prof=<div className="button small-button gray-button">Profile</div>
		}

		return(
			<body>
				<Navbar/>
				<div className="content-wrapper">
					<div className="logo">TypeFight</div>
					<div className="button-container">
						<a href="play" className="button big-button blue-button">Play</a>
						<a href="rankings" className="button small-button pink-button">Rankings</a>
						{prof}
					</div>
				</div>
			</body>
	)}
}

export default Home