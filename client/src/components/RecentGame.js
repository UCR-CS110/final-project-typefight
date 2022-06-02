//import React, {useState} from 'react';
import "./RecentGame.css"
const moment = require('moment');

export default function RecentGame(props){
    return(
        <div className="recent-game">
            <div className="wpm">WPM: {props.WPM}</div>
            <div className="accuracy">ACC: {props.accuracy}%</div>
            <div className="date">{moment().format('MM/DD/YYYY')}</div>
        </div>
    )
}