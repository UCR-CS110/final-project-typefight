import { Component } from "react";
import './Home.css'
import Navbar from '../components/Navbar.js'

class Home extends Component {
	/*
	constructor(props) {
		super(props)
	}
	*/

	render() {
		return(
			<div>
				<Navbar/>
				<div className="content-wrapper">
					<div className="main-content">
						<h1>TypeFight</h1>
						<div className="button-container">
							<a href="play" className="button big-button blue-button">Play</a>
							<a href="rankings" className="button small-button pink-button">Rankings</a>
							<a href="profile"className="button small-button pink-button">Profile</a>
						</div>
					</div>
				</div>
			</div>
	)}
}

export default Home