import { useEffect } from "react";

const Results = ({Retry, Stats}) => {

    useEffect(() => {
        let Send = Stats;
        Send.username = "TestUserName";
        fetch("http://localhost:8080/api/postGameResults", {
            method: "POST",
            headers: {
                'Accep': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(Send)
        })
        .then( (res) => {console.log(res)})
        .catch( (err) => {console.log("An error occured with submitting game results.", err)});
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