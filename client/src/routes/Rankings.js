import { Component } from "react";
import './Rankings.css'
import './Page.css'
import Navbar from '../components/Navbar.js'

class Home extends Component {
	/*
	constructor(props) {
		super(props)
	}
	*/

	render() {
		return(
			<body>
				<Navbar/>
				<div className="black-background content-wrapper">
					<div className="sort-by-container">
						<div className="sort-by-item">Sort by:</div>
						<button className="sort-by-item sort-by-button">Rank</button>
						<button className="sort-by-item sort-by-button">Games Played</button>
						<button className="sort-by-item sort-by-button">WPM</button>
						<button className="sort-by-item sort-by-button">Accuracy</button>
					</div>
					<div className="rankings-headings">
						<div>Rankings</div>
						<div>Games Played</div>
						<div>WPM</div>
						<div>Accuracy</div>
					</div>
					<div className="rankings-container">

					</div>
				</div>
			</body>
	)}
}

export default Home