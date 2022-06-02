//import React, {useState} from 'react';
import DefaultImage from '../images/default-profile-picture.png'
import "./Follow.css"


export default function Follow(props){
    return(
        <div className="follower">
            <a href={props.follower}>
                <img src={DefaultImage} className="follower-picture" alt="user"/>
                <div className="follower-username">{props.follower}</div>
            </a>
        </div>
    )
  }