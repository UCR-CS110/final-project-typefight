const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const gameHandlers = require('./handlers/game.js');
const loginHandlers = require('./handlers/login.js')

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

app.get('/getPrompt', gameHandlers.getPrompt); // Would change url

app.post('/changePassword', loginHandlers.changePassword);

app.post('/validateLogin', loginHandlers.validateLogin);

app.post('/register', loginHandlers.register)

//app.post('/addToken', loginHandlers.addToken);

//app.get('/validateToken/:token', loginHandlers.validateToken);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));