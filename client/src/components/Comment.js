//import React, {useState} from 'react';
import DefaultImage from '../images/default-profile-picture.png'
import "./Comment.css"


export default function Comment(props){

  // const [isSending, setIsSending] = useState(false);
  // const [deleteButton, setDeleteButton] = useState("delete-button");

  // const deleteComment = useCallback(async () => {
	// 	setDeleteButton("delete-button");
	// 	// don't send again while we are sending
	// 	if (isSending) return
	// 	// update state
	// 	setIsSending(true)
	// 	// send the actual request
	// 	await fetch(`http://localhost:8080/deleteComment/${commentId}`)
	// 		.catch((error) => console.log(error));
	// 	// once the request is sent, update state again
	// 	if (isMounted.current) // only update if we are still mounted
	// 		setIsSending(false)
	// }, [isSending]) // update the callback if the state changes

  // if(yourProfile || yourComment) {
  //   deleteButton = <button className="delete-button" onClick={deleteComment}>Rank</button>
  // }

  return(
    <div className="comment">
        <a href={props.commenter} className="commenter">
          <img src={DefaultImage} className="commenter-picture" alt="user"/>
          <div className="commenter-username">{props.commenter}</div>
        </a>
        <p className="text">{props.text}</p>
        <div className="date">{props.date}</div>
    </div>
  )
}