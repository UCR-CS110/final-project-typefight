import { useState, useRef } from 'react'
import Char from './Char.js'

const validLetters = " abcdefghijklmnopqrstuvwxyz.,:!$%&()<>=?\"'-;0123456789";
const control = "Enter Shift Tab Control";
const startingTime = 30000; //30s

const validateState = (k) => {
    let type;
    if (validLetters.includes(k.toLowerCase()))     type = 0;
    else if (k === "Backspace")                     type = 1;
    else if (control.includes(k))                   type = 2;
    else                                            type = -1;
    return type;
};

const buildResults = (TotalTyped, Prompt, UserInput, CountDown) => {
    let Result = {Total: TotalTyped};
    console.log("Test ", TotalTyped, Prompt, UserInput, CountDown);
    Result.Correct = Prompt.reduce((numCrrt, c, index) => {
        if (index > UserInput.length)
            return numCrrt;
        return numCrrt + (c.letter === UserInput[index]);
        }, 0);
    Result.Miss = UserInput.length - Result.Correct;
    Result.TimeMS = startingTime - CountDown;
    Result.Acc = !UserInput.length? 0 : (Result.Correct / UserInput.length) ;
    Result.WPM = (Result.Correct / 4.7) / (Result.TimeMS/60000);
    return Result;
};

const Game = ({Prompt, Finish, Report}) => {
    const [TOTAL, setTotal] = useState(0);
    const [activeIndex, setAI] = useState(0);
    const [userInput, setUI] = useState("");
    const [prompt_array, setPA] = useState(Prompt.split("").map((char) => {return { letter: char }})); // This updates a little too late
    // Timer
    const [renderCount, setRC] = useState(startingTime);
    const countDown = useRef(startingTime);
    const timer = useRef(0);

    // Builds a results json and finishes the game; rendering the results component
    const closeGame = () => {
        if(timer.current)
            clearInterval(timer.current);
        let results = buildResults(TOTAL, prompt_array, userInput, countDown.current);
        Report(results);
        Finish(true);
    };

    // Called upon keypress. Responds differently depending on key type
    const assess = (key) => {
        switch(validateState(key)){
            case(0):
                if(!timer.current){ // move somewhere else
                    timer.current = setInterval(() => {
                        countDown.current = countDown.current - 100;
                        setRC(countDown.current);
                        if(countDown.current === 0){
                            clearInterval(timer.current);
                            timer.current = 0;
                            countDown.current = startingTime;
                            //console.log("Killed Timer");
                            //closeGame(); //userInput and TOTAL aren't being updated here
                        }
                    }, 100);
                }
                console.log("valid");
                setUI(userInput + key);
                setAI(activeIndex + 1);
                setTotal(TOTAL + 1);
                if(userInput.length+1 === prompt_array.length) // not quite the same?
                    closeGame();
                break;
            case(1): 
                console.log("backspace");
                if(activeIndex !== 0){
                    setUI(userInput.slice(0,-1));
                    setAI(activeIndex - 1);
                }
                break;
            case(2): 
                console.log("control");
                break;
            default: 
                console.log("invalid");
                break;
        };
    }

    return (
        <div
        className="Game-Space"
        onKeyDown={(k) => assess(k.key)}
        tabIndex={0}
        >
            {Prompt}
            <button onClick={() => Finish(true)}>Click</button>
            {timer.current? <div className="Timer"><p>{renderCount/1000}s</p></div>: <></>}
            <div className="Play-BG">
                {prompt_array.map((C, index) => 
                    <Char
                    key={index}
                    activeState={activeIndex === index}
                    correct={userInput.length > index? userInput[index] === C.letter  : null }
                    letter={C.letter}
                    />
                )}
            </div>
        </div>
    )
};

export default Game;