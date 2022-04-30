import React from "react";
import "./RandomWord.css"
import * as FaIcons from "react-icons/fa"

function RandomWord(props){
    const {phonetics,meaning,date, word, handleVolumeClick} = props
    return(
        <div className="random-word">
            <div className="random-word-container">
                <h1 >Word Of the day</h1>
                <h2 className="date">{date}</h2>
                <div className="word-body">
                <h2>{word}</h2>
                <span className="pronunciation"> /{phonetics}/</span>
                <h2 className="definition-heading">Definition:</h2>
                <p className="defininition-body">{meaning}</p>
                </div>
            </div>
        </div>
        
    )
}
export default RandomWord