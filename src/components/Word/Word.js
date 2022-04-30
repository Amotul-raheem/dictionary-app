import React from "react"
import "./Word.css"
import * as FaIcons from "react-icons/fa"
import PartOfSpeechButton from "../PartOfSpeechButton/PartOfSpeechButton"

function Word(props) {
    const { meaning, word, phonetics,synonyms, antonyms,handleClick,partOfSpeeches, handleVolumeClick} = props
    return (
        <div className="word-container">
            <h1>{word}</h1>
            {phonetics.map( phonetic => (
                <span> {phonetic.text}, </span>
            ))}
            <i className="volume-icon">
                <FaIcons.FaVolumeUp
                    onClick={handleVolumeClick}
                />
            </i>
            <h3>Part of Speech: </h3>
            {partOfSpeeches.map(partOfSpeech => (
                <PartOfSpeechButton
                    handleClick={handleClick}
                    partOfSpeechName={partOfSpeech.name}
                />
            ))}

            <h3>Definitions</h3>
            <p>{meaning}</p>
            <p>Synonyms: {synonyms}</p>
            <p>Antonyms: {antonyms}</p>
            
        </div>
    )
}

export default Word