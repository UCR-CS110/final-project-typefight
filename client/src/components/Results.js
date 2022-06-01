const Results = ({Retry, Stats}) => {
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