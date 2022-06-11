import "./Comment.css"
import ProfilePicture from './ProfilePicture.js'

export default function Comment(props){

  const deleteComment = () => {
    //event.preventDefault();
    fetch(`http://localhost:8080/deleteComment/${props.commentId}`, {
      method: 'DELETE',
    })
    .then(console.log("Comment has been deleted"))
    .then(window.location.reload(false))
    .catch( (err) => {console.log("Error when deleting comment:", err)});
}

  let deleteButton;
  if (props.profileOwner === props.sessionUsername || props.commenter === props.sessionUsername) {
    deleteButton = <button className="delete-button" onClick={deleteComment}>Delete</button>
  }
  else {
    deleteButton = <div/>
  }

  return(
    <div className="comment">
        <a href={props.commenter} className="commenter">
          <div className="commenter-profile-picture-container">
				    <ProfilePicture username={props.commenter}/>
				  </div>
          <div className="commenter-username">{props.commenter}</div>
        </a>
        <p className="text">{props.text}</p>
        <div className="comment-right">
          <div className="date">{props.date}</div>
          {deleteButton}
        </div>
    </div>
  )
}