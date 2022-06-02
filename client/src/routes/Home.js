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
		var profile = "profile/" + localStorage.getItem('username');

		return(
			<body>
				<Navbar/>
				<div className="content-wrapper">
					<div className="logo">TypeFight</div>
					<div className="button-container">
						<a href="play" className="button big-button blue-button">Play</a>
						<a href="rankings" className="button small-button pink-button">Rankings</a>
						<a href={profile} className="button small-button pink-button">Profile</a>
					</div>
				</div>
			</body>
	)}
}

export default Home