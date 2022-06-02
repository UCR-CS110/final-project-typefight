import { useEffect } from "react";
import './Results.css'

const Results = ({Retry, Stats}) => {

    useEffect(() => {
        let Send = Stats;
        let token = localStorage.getItem('token');
        let sessionUsername = localStorage.getItem('username');
	    Send.username = localStorage.getItem('username');

        if (token !== undefined && token !== null){
            fetch("http://localhost:8080/postGameResults", {
                method: "POST",
                headers: {
                    'Accep': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(Send)
            })
            .then(fetch(`http://localhost:8080/${sessionUsername}/updateStats`))
            .catch( (err) => {console.log("An error occured with submitting game results.", err)});
        }
    },[]);

    return (
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
    )
};

export default Results;