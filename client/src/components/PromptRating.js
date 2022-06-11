import { useState, useEffect } from "react";
import './PromptRating.css'

const PromptRating = ({ id }) => {
    const [PR, isRated] = useState({rated: false, inc: 0});

    const Upvote = () => isRated({rated: true, inc: 1});
    const Downvote = () => isRated({rated: true, inc: -1});

    useEffect(() => {
        if(PR.rated){
            console.log(PR, id);
            fetch(`http://localhost:8080/ratePrompt`, {
                method: "POST",
                headers: {
                    'Accep': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({PromptID: id, inc: PR.inc})
            })
            .catch( (err) => console.log("Error when submitting rating: ", err));
        }
    }, [id, PR]);

    return(
        <div className={!PR.rated? "PromptRating-Prompt Appear" : "PromptRating-Prompt Disappear"}>
            { !PR.rated?
            <>
                <p>Psst, How was the prompt? </p>
                <button className="PR-Vote-Btn Upvote"  onClick={Upvote}> Liked it! </button>
                <button className="PR-Vote-Btn Downvote" onClick={Downvote}>Did not like it!</button>
            </>
            :
            <>
                <p>Thank you!</p>
            </>
            }
        </div>
    )
};

export default PromptRating;