const Comment = require("../models/Comment.js");
const moment = require('moment');

async function addComment(req, res) {
    //TODO: Verify the comment data
	console.log(req.body);

	const comment = new Comment({
		profileOwner: req.body.profileOwner,
        commenter: req.body.commenter,
		text: req.body.text,
		date: moment().format('MM/DD/YYYY, h:mm:ss a'),
	})
	comment.save().then(console.log("Comment has been added"))
		.catch(err => console.log("Error when creating comment: ", err))
}

async function loadComments(req,res) {
	// fetch all of the comments for this profile
	let profileOwner = req.params.profileOwner;
	profileOwner = profileOwner.replace('$', '')
	Comment.find({profileOwner: profileOwner}).lean().then(comments => {
		res.json(comments)
	});
}

module.exports = {
    addComment,
	loadComments
};