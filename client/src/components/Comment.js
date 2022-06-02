//import React, {useState} from 'react';
import DefaultImage from '../images/default-profile-picture.png'
import "./Comment.css"


export default function Comment(props){
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