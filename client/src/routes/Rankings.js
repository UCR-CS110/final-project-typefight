import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Rankings.css'
import './Page.css'
import Navbar from '../components/Navbar.js'
import Ranking from '../components/Ranking.js'

function Rankings() {
	const [rankings, setRankings] = useState([]);
	const [isSending, setIsSending] = useState(false);
	const isMounted = useRef(true);

	// set isMounted to false when we unmount the component
	useEffect(() => {
		return () => {
			isMounted.current = false;
		}
	}, [])

	const rankingsByRank = useCallback(async () => {
		// don't send again while we are sending
		if (isSending) return
		// update state
		setIsSending(true)
		// send the actual request
		await fetch('http://localhost:8080/rankingsByRank')
			.then((res) => res.json())
			.then((data) => setRankings([...data]))
		// once the request is sent, update state again
		if (isMounted.current) // only update if we are still mounted
			setIsSending(false)
	}, [isSending]) // update the callback if the state changes

	const rankingsByGamesPlayed = useCallback(async () => {
		// don't send again while we are sending
		if (isSending) return
		// update state
		setIsSending(true)
		// send the actual request
		await fetch('http://localhost:8080/rankingsByGamesPlayed')
			.then((res) => res.json())
			.then((data) => setRankings([...data]))
		// once the request is sent, update state again
		if (isMounted.current) // only update if we are still mounted
			setIsSending(false)
	}, [isSending]) // update the callback if the state changes

	const rankingsByAverageWPM = useCallback(async () => {
		// don't send again while we are sending
		if (isSending) return
		// update state
		setIsSending(true)
		// send the actual request
		await fetch('http://localhost:8080/rankingsByAverageWPM')
			.then((res) => res.json())
			.then((data) => setRankings([...data]))
		// once the request is sent, update state again
		if (isMounted.current) // only update if we are still mounted
			setIsSending(false)
	}, [isSending]) // update the callback if the state changes

	const rankingsByAverageAccuracy = useCallback(async () => {
		// don't send again while we are sending
		if (isSending) return
		// update state
		setIsSending(true)
		// send the actual request
		await fetch('http://localhost:8080/rankingsByAverageAccuracy')
			.then((res) => res.json())
			.then((data) => setRankings([...data]))
		// once the request is sent, update state again
		if (isMounted.current) // only update if we are still mounted
			setIsSending(false)
	}, [isSending]) // update the callback if the state changes
	  

	return(
		<body>
			<Navbar/>
			<div className="black-background content-wrapper">
				<div className="sort-by-container">
					<div className="sort-by-item">Sort by:</div>
					<button className="sort-by-item sort-by-button"
						disabled={isSending} onClick={rankingsByRank}>Rank</button>
					<button className="sort-by-item sort-by-button"
						disabled={isSending} onClick={rankingsByGamesPlayed}>Games Played</button>
					<button className="sort-by-item sort-by-button"
						disabled={isSending} onClick={rankingsByAverageWPM}>WPM</button>
					<button className="sort-by-item sort-by-button"
						disabled={isSending} onClick={rankingsByAverageAccuracy}>Accuracy</button>
				</div>
				<div className="rankings-headings">
					<u>Rankings</u>
					<div className="rank-score-heading">Rank</div>
					<div className="games-played-heading">Games Played</div>
					<div className="wpm-heading">WPM</div>
					<div className="accuracy-heading">Accuracy</div>
				</div>
				<div className="rankings-container">
					{rankings.map((ranking, index) => {
						return <Ranking rank={index + 1} username={ranking.username} rankScore = {ranking.rankScore}
						gamesPlayed={ranking.gamesPlayed} averageWPM={ranking.averageWPM} averageAccuracy={ranking.averageAccuracy}/>
					})}
				</div>
			</div>
		</body>
	)
}

export default Rankings