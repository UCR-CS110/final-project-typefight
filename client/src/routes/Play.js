import { useState, useEffect } from 'react';
import "./Play.css"
import Game from '../components/Game.js'
import Results from '../components/Results.js'
import Navbar from '../components/Navbar.js';

const blank = {Total: 0, Correct: 0, Miss: 0, TimeMS: 0, Acc: 0.0, WPM: 0.0}; //USN: "" //add after game finishes

const Play = () => {
    const [done, setDone] = useState(false);
    const [prompt, setPrompt] = useState({prompt: "", id: "-2"});
    const [results, setResults] = useState(blank);

    useEffect( () => {
        fetch('http://localhost:8080/getPrompt')
        .then(res => res.json())
        .then(res => {
            setPrompt(res);})
        .catch(err => {
            setPrompt("Error"); // Change to proper default
            console.log(err);
        });
    }, []);

    const Retry = (bool) => {
        setDone(!bool);
        setResults(blank);
    }


    return(
        <div>
            <Navbar/>
            <div className="Play-Container">
            {!done? <Game Prompt={prompt.prompt.split("")} Finish={setDone} Report={setResults}/> : 
                    <Results Retry={Retry} Stats={results} PromptID={prompt.id}/>}
            </div>
        </div>
    )
}

export default Play;