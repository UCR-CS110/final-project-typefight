const prompts = require('../models/Prompts');
//const User = require('../models/User);

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

function getResult(request, response){
    console.log(request.body); //This may be double pinged. Can just remove `<React.stringmode>` from index.js to see only one ping
}

module.exports = {
    getPrompt,
    getResult
};