import "./Comment.css"
import ProfilePicture from './ProfilePicture.js'

export default function Comment(props){
    return(
      <div className="comment">
          <a href={props.commenter} className="commenter">
            <div className="commenter-profile-picture-container">
				      <ProfilePicture username={props.commenter}/>
				    </div>
            <div className="commenter-username">{props.commenter}</div>
          </a>
          <p className="text">{props.text}</p>
          <div className="date">{props.date}</div>
      </div>
    )
  }