const prompts = require('../models/Prompts');
const User = require('../models/User');

const Game = require("../models/Game.js");

// Temporary Default. Text from Pg.43 of 'To Mock A Mockingbird ...' By Raymond Smullyan. Neat Book.
// Maybe replace this with a string of valid characters for testing
const defaultPrompt = "On the next day I came across a native who said: \"My father once said that he and I are different types, one a knight and one a knave.\" Is it possible that his father really said that?";

// Num of Prompts on the database. Used by getPrompt in selecting random prompt
let numPrmpt;

prompts.countDocuments({}, (err, count) => {
    if (err) {console.log(err);}
    else {
        numPrmpt = count;
        console.log(`NumDocs Prompts: ${count}`);
    }
}); 

// -- Handlers --

function getPrompt(request, response){
    const index = Math.floor(Math.random()*numPrmpt);

    prompts.find({ id: index }).then(item => {
        //console.log(`Prompt Requested. Sent P.${index}`);
        response.send({prompt: item[0].Prompt});
    }).catch( () => {
        console.error("! An error has occurred with getPrompt. Sending default Text.");
        response.send({prompt: defaultPrompt});
    });
}

function postResult(req, response){
    const game = new Game({
		username: req.body.username,
        total: req.body.Total,
        correct: req.body.Correct,
        miss: req.body.Miss,
        time: req.body.TimeMS,
        accuracy: req.body.Acc,
        WPM: req.body.WPM
	})
	game.save().then(console.log("Game has been added"))
		.catch(err => console.log("Error when adding game ", err))
}

function updateStats(req, res) {
    let username = req.params.username
    username = username.replace('$', '')
    let numGames = 0;
    let averageAccuracy = 0;
    let averageWPM = 0;
    let rankScore = 0;
    // Query the 50 most recent games for a given user
    Game.find({username: username}).sort({$natural:-1}).limit(50).lean().then(games => {
        games.forEach(game => {
            numGames++;
			averageAccuracy += game.accuracy;
            averageWPM += game.WPM;
		});
        averageAccuracy = averageAccuracy/numGames;
        averageWPM = averageWPM/numGames;
        rankScore = averageWPM * averageAccuracy

        //Update the user's game data based on the 50 most recent games
        User.updateOne({username: username},
        {
            $set: {
                averageAccuracy: averageAccuracy,
                averageWPM: averageWPM,
                gamesPlayed: numGames,
                rankScore: rankScore
            }
        }).then(console.log("Stats have been updated"))
            .catch(err => console.log("Error when updating stats ", err))
    });
}

async function getStats(req,res) {
	// fetch all of the follows for this profile
	let username = req.params.username;
	username = username.replace('$', '')
	User.find({username: username}).lean().then(user => {
		res.json(user)
	});
}

module.exports = {
    getPrompt,
    postResult,
    updateStats,
    getStats
};