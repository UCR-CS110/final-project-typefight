const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TokenSchema = new Schema ({
    token:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('token', TokenSchema);