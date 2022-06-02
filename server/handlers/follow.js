const Follow = require("../models/Follow.js");

async function follow(req, res) {
	
	const follow = new Follow({
		profileOwner: req.body.profileOwner,
        follower: req.body.follower
	})
	follow.save().then(console.log("Follow has been added"))
		.catch(err => console.log("Error when creating follow: ", err))
}

async function getFollows(req,res) {
	// fetch all of the follows for this profile
	let follower = req.params.profileOwner;
	follower = follower.replace('$', '')
	Follow.find({follower: follower}).lean().then(follows => {
		res.json(follows)
	});
}

module.exports = {
    follow,
	getFollows
};