import React from "react"
import "./Word.css"
import * as FaIcons from "react-icons/fa"
import PartOfSpeechButton from "../PartOfSpeechButton/PartOfSpeechButton"

function Word(props) {
    const {meanings, word, phonetics, } = props
    console.log(phonetics)
    const handleVolumeClick = () => {
        const audio = new Audio(phonetics.phoneticSound);
        audio.play()
    }
    return (
        <div className="word-container">
            <h1>{word}</h1>
                <span> {phonetics.phoneticTexts},  <i className="volume-icon"
                   onClick={handleVolumeClick}>
                <FaIcons.FaVolumeUp/>
                </i>
                </span>

            <h3>Part of Speech: </h3>
            {meanings.map(meaning => (
                <div>
                    <h2>Part of speech: {meaning.partOfSpeech}</h2>
                    <h3>Definitions:</h3>
                    {meaning.definitions.map(definition => (
                        <div>
                            <p>{definition.definition}</p>
                            <p>synonyms:{definition.synonyms}</p>
                            <p>Antonyms: {definition.antonyms} </p>
                        </div>

                    ))}
                    <p>Synonyms: {meaning.synonyms}</p>
                    <p>Antonyms: {meaning.antonyms}</p>
                </div>

            ))}


        </div>
    )
}

export default Word