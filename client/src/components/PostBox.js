import "./PostBox.css"
import { useState } from 'react';

export default function PostBox(props){
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/addComment", {
            method: "POST",
            headers: {
                'Accep': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ profileOwner: props.profileOwner, commenter: props.commenter, text: commentText})
        })
        .then(window.location.reload(false))
        .catch( (err) => {console.log("Error when posting comment:", err)});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="profileOwner" value={props.profileOwner}/>
            <input type="hidden" name="commenter" value={props.commenter}/>
            <textarea type="text" name="text" className="comment-input" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Write a new comment..."/>
            <input type="submit" className="button post-button blue-button" value="Post Comment"/>
        </form>
  )
}