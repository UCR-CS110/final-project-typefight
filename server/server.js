const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const multer = require('multer');

const upload = multer({dest: 'handlers/uploads/'}).single('file');
const gameHandler = require('./handlers/game.js');
const loginHandler = require('./handlers/login.js');
const commentHandler = require('./handlers/comment.js');
const followHandler = require('./handlers/follow.js');
const rankingsHandler = require('./handlers/rankings.js');
const imageHandler = require('./handlers/image.js');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // is this even needed?
app.use(cors());

const db = config.get('mongoURI');

mongoose.connect(db,//connect to db
    err =>{
        if(err)throw err;
        console.log("Connected to MongoDB");
    });

app.get('/getPrompt', gameHandler.getPrompt); // Would change url
app.post('/postGameResults', gameHandler.postResult);
app.get('/:username/updateStats', gameHandler.updateStats);
app.get('/:username/getStats', gameHandler.getStats);
app.get('/:username/getRecentGames', gameHandler.getRecentGames);

app.post('/changePassword', loginHandler.changePassword);
app.post('/validateLogin', loginHandler.validateLogin);
app.post('/register', loginHandler.register);
app.get('/validateToken/:token', loginHandler.validateToken);

app.post('/addComment', commentHandler.addComment);
app.get('/:profileOwner/comments', commentHandler.loadComments);

app.post('/follow', followHandler.follow);
app.get('/:profileOwner/getFollows', followHandler.getFollows);

app.get('/rankingsByRank', rankingsHandler.rankingsByRank);
app.get('/rankingsByGamesPlayed', rankingsHandler.rankingsByGamesPlayed);
app.get('/rankingsByAverageWPM', rankingsHandler.rankingsByAverageWPM);
app.get('/rankingsByAverageAccuracy', rankingsHandler.rankingsByAverageAccuracy);

app.post('/:username/updateProfilePicture/', upload, imageHandler.updateProfilePicture);
app.get('/:username/getProfileImage', imageHandler.getProfilePicture);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));