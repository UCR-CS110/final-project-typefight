const User = require("../models/User.js");
const fs = require('fs');
const path = require('path');

async function getProfilePicture(req, res) {
	username = req.params.username;
	User.findOne({username: username})
	.then( user => {
		let profilePicture = user.profilePicture;
        return res.json({profilePicture: profilePicture});
	}).catch(error => {
		console.log("Error when retrieving profile picture:", error);
	});
}

async function updateProfilePicture(req, res) {
	let username = req.params.username;
	
	let profilePicture = {
		data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
		contentType: 'image/png'
	}
	
	User.updateOne({username: username},
	{
		$set: {
			profilePicture: profilePicture
		}
	})
	.then(fs.unlink(path.join(__dirname + '/uploads/' + req.file.filename), err => {
		if (err) throw err;
	}))
	.catch(err => {
		console.log("Error when updating profile picture:", err);
	})
}

module.exports = {
    getProfilePicture,
	updateProfilePicture
};