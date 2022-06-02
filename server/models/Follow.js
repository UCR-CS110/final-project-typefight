const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FollowSchema = new Schema ({
    profileOwner: {
        type: String,
        require: true
    },
    follower:{
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('follows', FollowSchema);