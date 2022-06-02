import DefaultImage from '../images/default-profile-picture.png'
import "./Ranking.css"


export default function Ranking(props){
    return(
      <div className="ranking">
        <div className="rank">#{props.rank}</div>
        <img src={DefaultImage} className="picture" alt="user"/>
        <div className="username">{props.username}</div>
        <div className="games-played">{props.gamesPlayed}</div>
        <div className="average-wpm">{Math.trunc(props.averageWPM)}</div>
        <div className="average-accuracy">{Math.trunc(props.averageAccuracy)}%</div>
      </div>
    )
  }