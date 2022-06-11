const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema ({
    username: {type: String, required: true, unique: true},
    password: {type :String, required: true},
    gamesPlayed: {type: Number, required: true},
    averageWPM: {type: Number, required: true},
    averageAccuracy: {type: Number, required: true},
    rankScore: {type: Number, required: true},
    profilePicture: {data: Buffer, contentType: String}
},
{collection: "users"}//might need to change this
)

const model = mongoose.model("UserSchema", UserSchema)

module.exports = model