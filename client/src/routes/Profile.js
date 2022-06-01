import { Component } from "react";
import './Profile.css'
import './Page.css'
import Navbar from '../components/Navbar.js'
import ReactRoundedImage from "react-rounded-image";
import DefaultImage from '../images/default-profile-picture.png'

class Home extends Component {
	/*
	constructor(props) {
		super(props)
	}
	*/

	render() {
		return(
			<body>
				<Navbar/>
				<div className="content-wrapper">
					<div className="container profile-owner-container">
						<ReactRoundedImage
							image={DefaultImage}
							imageWidth="100"
          					imageHeight="100"
							roundedColor="#222222"
						/>
						<div className="profile-owner-username">chatmansave</div>
					</div>
					<div className="row">
						<div className="container follower-container">
							<u className="header">Followers</u>
						</div>
						<div className="column">
							<div className="container player-stats-container">
								<u className="header">Player Stats</u>
							</div>
							<div className="container recent-games-container">
								<u className="header">Recent Games</u>
							</div>
						</div>
					</div>
					<div className="container comments-container">
						<u className="header">Comments</u>
						<textarea type="text" className="comment-input" placeholder="Write a new comment..."/>
						<a href="play" className="button post-button blue-button">Post Comment</a>
					</div>
				</div>
			</body>
	)}
}

export default Home