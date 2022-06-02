//import React, {useState} from 'react';
import "./Stat.css"

export default function Follow(props){
    return(
        <div className="stats">
            <div className="row">
                <u className="header">Stats</u>
                <div className="games-played">Games played: {props.gamesPlayed}</div>
            </div>
            <div className="row">
                <div className="rank-score">Score: {props.rankScore}</div>
                <div className="wpm">WPM: {props.averageWPM}</div>
                <div className="accuracy">ACC: {props.averageAccuracy}</div>
            </div>
        </div>
    )
  }