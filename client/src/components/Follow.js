import "./Follow.css"
import ProfilePicture from './ProfilePicture.js'

export default function Follow(props){
    return(
        <div className="follower">
            <a href={props.follower} className="follower-profile-picture-container">
				<ProfilePicture username={props.follower}/>
                <div className="follower-username">{props.follower}</div>
            </a>
        </div>
    )
  }