//import { useState } from 'react'
import "./Char.css"

const Char = ({activeState, correct, letter}) => {
    //const [correct, isCorrect] = useState(correctState);
    //let color;
    let classes = "Char";
    if(correct === null) 
        classes += " NullChar";//color = {color: 'white'}; 
    else if (correct === true)
        classes += " CorrectChar";//color = {color: 'skyblue'};
    else{
        classes += " WrongChar";//color = {color: 'red'};
        if(letter === " ")
            letter = "_";
    }

    if(activeState)
        classes += " ActiveChar";

    return (
        <div className={classes}>
            <p>{letter}</p>
        </div>
    );
};

export default Char;