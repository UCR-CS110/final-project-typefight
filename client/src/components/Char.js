//import { useState } from 'react'
import "./Char.css"

const Char = ({activeState, correct, letter}) => {
    //const [correct, isCorrect] = useState(correctState);
    let color;
    if(correct === null) 
        color = {color: 'white'}; 
    else if (correct === true)
        color = {color: 'skyblue'};
    else{
        color = {color: 'red'};
        if(letter === " ")
            letter = "_";
    }

    return (
        <div className={activeState? "Char ActiveChar" : "Char"}
            style={color}>
            <p>{letter}</p>
        </div>
    );
};

export default Char;