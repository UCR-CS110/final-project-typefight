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
	Comment.find({profileOwner: profileOwner}).sort({$natural:-1}).lean().then(comments => {
		res.json(comments)
	});
}

async function deleteComment(req, res) {
	let commentId = req.params.commentId;
	Comment.find({_id: commentId}).deleteOne()
	.catch(err => console.log("Error when deleting comment: ", err))
}

module.exports = {
    addComment,
	loadComments,
	deleteComment
};