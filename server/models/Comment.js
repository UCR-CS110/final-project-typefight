const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    profileOwner: {
        type: String,
        require: true
    },
    commenter:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('comments', CommentSchema);