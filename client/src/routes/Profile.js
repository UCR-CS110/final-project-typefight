import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Profile.css'
import './Page.css'
import Navbar from '../components/Navbar.js'
import DefaultImage from '../images/default-profile-picture.png'
import Comment from '../components/Comment.js'

function Profile() {

	const [comments, setComments] = useState([]);

	let params = useParams();
	
	let token = localStorage.getItem('token');
	let sessionUsername = localStorage.getItem('username');
	// TODO: react v6 deprecated this notation to get route params. I will have to change this to a functional component.
	let profileUsername = params.username;
	let commentBox;
	let followButton;
	
	// Load all of the comments for the current profile
	useEffect(() => {
		fetch(`http://localhost:8080/${profileUsername}/comments`)
			.then(response => response.json())
			.then(data => setComments([...data]))
			.catch(err => {
				console.log("Error when rendering comments", err);
			})
	}, []);

	if (token !== undefined && token !== null) {
		// validate the login token
		//console.log(token);
		//console.log(sessionUsername);
		commentBox = <form action="http://localhost:8080/addComment" method="POST">
						<input type="hidden" name="profileOwner" value={profileUsername}/>
						<input type="hidden" name="commenter" value={sessionUsername}/>
						<textarea type="text" name="text" className="comment-input" placeholder="Write a new comment..."/>
						<input type="submit" className="button post-button blue-button" value="Post Comment"/>
					</form>

		followButton = <form action="http://localhost:8080/follow" method="POST">
							<input type="hidden" name="profileOwner" value={profileUsername}/>
							<input type="hidden" name="follower" value={sessionUsername}/>
							<input type="submit" className="button follow-button blue-button" value="+Follower"/>
						</form>
	}
	else {
		console.log("no login token");
		commentBox = <div/>;
		followButton = <div/>;
	}
		
	return(
		<body>
			<Navbar/>
			<div className="content-wrapper">
				<div className="container profile-owner-container">
					<img src={DefaultImage} className="profile-picture" alt="user"/>
					<div className="profile-owner-username">{profileUsername}</div>
				</div>
				<div className="row">
					<div className="container follower-container">
						<u className="header">Followers</u>
						{followButton}
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
					{commentBox}
					{comments.map(comment => {
						return <Comment commenter={comment.commenter} text={comment.text} date={comment.date}/>
					})}
				</div>
			</div>
		</body>
	)
}

export default Profile