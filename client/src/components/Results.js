import { useState, useEffect } from "react";
import './Results.css'
import PromptRating from './PromptRating.js'

const Results = ({Retry, Stats, PromptID}) => {
    const [validToken, setValidToken] = useState(false);
	const [sessionUsername, setSessionUsername] = useState(null);
    let Send = Stats;
    const token = localStorage.getItem('token');

    useEffect(() => {
		fetch(`http://localhost:8080/validateToken/${token}`)
			.then(response => response.json())
			.then(data => {
				if(data.login) {
					setValidToken(data.login);
					setSessionUsername(data.decode.username);
				}
			})
			.catch(err => {
				console.log("Error when validating token:", err);
			})
	}, [token]);

    useEffect(() => {
        if (validToken){
            Send.username = sessionUsername;
            fetch("http://localhost:8080/postGameResults", {
                method: "POST",
                headers: {
                    'Accep': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(Send)
            })
            .then(fetch(`http://localhost:8080/${sessionUsername}/updateStats`))
            .catch( (err) => {console.log("Error when submitting game results:", err)});
        }
    },[Send, sessionUsername, validToken]);

    return (
        <>
            <PromptRating id={PromptID}/>
            <div className="Results">
                <h2>Results</h2>
                <div className="SpaceApart">
                    <h3>WPM: {Math.floor(Stats.WPM)}</h3>
                    <h3>ACC: {Math.floor(Stats.Acc*100)}%</h3>
                </div>
                <div>
                    <p>Total Characters: {Stats.Correct + Stats.Miss}</p>
                    <p>Characters Missed: {Stats.Miss}</p>
                    <p>Time Taken: {Stats.TimeMS / 1000} Seconds</p>
                </div>
                <button className="Btn-Blue"
                        onClick={() => Retry(true)}>Retry</button>
            </div>
        </>
    )
};

export default Results;