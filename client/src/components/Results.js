import { useEffect } from "react";

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
        <div>
            Results
            <button onClick={() => Retry(false)}>Click</button>
            <br/>
            <p>{console.log(Stats)}{JSON.stringify(Stats)}</p>
        </div>
    )
};

export default Results;