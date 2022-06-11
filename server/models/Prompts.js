const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PromptSchema = new Schema ({
    Prompt:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: false
    },
    rating:{
        type: Number,
        required: false
    }
});

module.exports = Item = mongoose.model('prompts', PromptSchema);