//import React, {useState} from 'react';
import DefaultImage from '../images/default-profile-picture.png'
import "./Comment.css"


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
          <img src={DefaultImage} className="commenter-picture" alt="user"/>
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