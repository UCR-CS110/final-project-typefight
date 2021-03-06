const User = require("../models/User.js");

// Get users by rank score = AVG WPM * Average Accuracy 
function rankingsByRank(req, res){
	User.find().sort( {rankScore: -1 } ).lean().then(users => {
		users.forEach(user => {
			delete user["password"];
		});
		res.json(users)
	});
}

// Get users by total number of games played
function rankingsByGamesPlayed(req, res){
    User.find().sort( {gamesPlayed: -1 } ).lean().then(users => {
		users.forEach(user => {
			delete user["password"];
		});
		res.json(users)
	});
}

// Get users by Average WPM over the past 50 games
function rankingsByAverageWPM(req, res){
    User.find().sort( {averageWPM: -1 } ).lean().then(users => {
		users.forEach(user => {
			delete user["password"];
		});
		res.json(users)
	});
}

// Get users by Average Accuracy over the past 50 games
function rankingsByAverageAccuracy(req, res){
    User.find().sort( {averageAccuracy: -1 } ).lean().then(users => {
		users.forEach(user => {
			delete user["password"];
		});
		res.json(users)
	});
}

module.exports = {
    rankingsByRank,
	rankingsByGamesPlayed,
	rankingsByAverageWPM,
	rankingsByAverageAccuracy
};