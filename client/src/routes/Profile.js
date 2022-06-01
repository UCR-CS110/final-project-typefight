import { Component } from "react";
import './Profile.css'
import './Page.css'
import Navbar from '../components/Navbar.js'
//import ReactRoundedImage from "react-rounded-image";
import DefaultImage from '../images/default-profile-picture.png'

class Home extends Component {
	/*
	constructor(props) {
		super(props)
	}
	*/

	render() {
		let token = localStorage.getItem('token');
		let username = localStorage.getItem('username');
		if (token !== undefined) {
			// validate the login token
			console.log(token);
			console.log(username);
		}
		else
			console.log("no login token");
		return(
			<body>
				<Navbar/>
				<div className="content-wrapper">
					<div className="container profile-owner-container">
						<img src={DefaultImage} className="profile-picture" alt="user"/>
						<div className="profile-owner-username">chatmansave</div>
					</div>
					<div className="row">
						<div className="container follower-container">
							<u className="header">Followers</u>
						</div>
						<div className="column">
							<div className="container stats-container">
								<u className="header">Stats</u>
							</div>
							<div className="container recent-games-container">
								<u className="header">Recent Games</u>
							</div>
						</div>
					</div>
					<div className="container comments-container">
						<u className="header">Comments</u>
						<form action="/message" method="POST">
							<input type="hidden" name="username" id="nickname" value=""/>
							<textarea type="text" className="comment-input" placeholder="Write a new comment..."/>
							<input type="submit" className="button post-button blue-button" value="Post Comment"/>
						</form>
					</div>
				</div>
			</body>
	)}
}

export default Home