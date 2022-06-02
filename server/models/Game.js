const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema ({
    username: {
        type: String,
        require: true
    },
    total:{
        type: Number,
        required: true
    },
    correct:{
        type: Number,
        required: true
    },
    miss:{
        type: Number,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    accuracy:{
        type: Number,
        required: true
    },
    WPM:{
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model('games', GameSchema);