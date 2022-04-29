import React from "react"
import "./Word.css"
import * as FaIcons from "react-icons/fa"
import PartOfSpeechButton from "../PartOfSpeechButton/PartOfSpeechButton"

function Word(props) {
    const { meaning, word, phonetics,synonyms, antonyms,handleClick} = props
    return (
        <div className="word-container">
            <h2>{word}</h2>
            <span>{phonetics}, </span><span>{phonetics} </span><FaIcons.FaVolumeUp/>
            <h3>Part of Speech: </h3>
            <PartOfSpeechButton
                handleClick={handleClick}
                partOfSpeechName={"noun"}
            />
            <PartOfSpeechButton
                handleClick={handleClick}
                partOfSpeechName={"verb"}
            />
            <PartOfSpeechButton
                handleClick={handleClick}
                partOfSpeechName={"interjection"}
            />
            <h3>Definitions</h3>
            <p>{meaning}</p>
            <p>Synonyms: {synonyms}</p>
            <p>Antonyms: {antonyms}</p>
            
        </div>
    )
}

export default Word