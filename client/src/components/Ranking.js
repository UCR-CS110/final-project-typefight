import "./Ranking.css"
import ProfilePicture from './ProfilePicture.js'

export default function Ranking(props){
    let profileRef = '/profile/'+props.username
    return(
      <div className="ranking">
        <div className="ranking-rank">#{props.rank}</div>
        <a className='profile-ref' href={profileRef}>
            <div className="ranking-profile-picture-container">
				      <ProfilePicture username={props.username}/>
				    </div>
          <div className="ranking-username">{props.username}</div>
        </a>
        <div className="ranking-rank-score">{Math.trunc(props.rankScore)}</div>
        <div className="ranking-games-played">{props.gamesPlayed}</div>
        <div className="ranking-average-wpm">{Math.trunc(props.averageWPM)}</div>
        <div className="ranking-average-accuracy">{Math.trunc(props.averageAccuracy)}%</div>
      </div>
    )
  }