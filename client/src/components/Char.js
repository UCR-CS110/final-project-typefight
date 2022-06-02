import "./Char.css"

const Char = ({activeState, correct, letter}) => {
    let classes = "Char";
    if(correct === null) 
        classes += " NullChar"; 
    else if (correct === true)
        classes += " CorrectChar";
    else{
        classes += " WrongChar";
        if(letter === " ")
            letter = "_";
    }

    if(activeState){
        classes += " ActiveChar";
        if(letter === " ")
            classes += " ActiveChar-Space";
    }

    return (
        <div className={classes}>
            <p>{letter}</p>
        </div>
    );
};

export default Char;