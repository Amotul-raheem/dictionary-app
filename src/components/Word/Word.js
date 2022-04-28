import React from "react"
import "./Word.css"
import * as FaIcons from "react-icons/fa"

function Word(props) {
    const {date, meaning, word, phonetics, partOfSpeech,synonyms, antonyms} = props
    return (
        <div className="word-container">
            <h1 className="word-heading">
                Word of the day
            </h1>
            <p>{date}</p>
            <h2>{word}</h2>
            <FaIcons.FaVolumeUp/> <span>{phonetics}</span>
            <p>Part of Speech: {partOfSpeech}</p>
            <p>{meaning}</p>
            <p>Synonyms: {synonyms}</p>
            <p>Antonyms: {antonyms}</p>
            
        </div>
    )
}

export default Word