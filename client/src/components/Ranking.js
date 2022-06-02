import DefaultImage from '../images/default-profile-picture.png'
import "./Ranking.css"

export default function Ranking(props){
    let profileRef = '/profile/'+props.username
    return(
      <div className="ranking">
        <div className="ranking-rank">#{props.rank}</div>
        <a className='profile-ref' href={profileRef}>
          <img src={DefaultImage} className="ranking-picture" alt="user"/>
          <div className="ranking-username">{props.username}</div>
        </a>
        <div className="ranking-rank-score">{Math.trunc(props.rankScore)}</div>
        <div className="ranking-games-played">{props.gamesPlayed}</div>
        <div className="ranking-average-wpm">{Math.trunc(props.averageWPM)}</div>
        <div className="ranking-average-accuracy">{Math.trunc(props.averageAccuracy)}%</div>
      </div>
    )
  }