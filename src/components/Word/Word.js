import React from "react"
import "./Word.css"
import * as FaIcons from "react-icons/fa"
import Meaning from "../Meaning/Meaning"

function Word(props) {
    const {meanings, word, phonetics,} = props
    const handleVolumeClick = () => {
        const audio = new Audio(phonetics.phoneticSound);
        audio.play()
    }
    return (
        <div className="word">
            <div className="word-container">
                <h1 className="word-heading">{word}</h1>
                <span className="phonetic"> {phonetics.phoneticTexts}    <i className="volume-icon"
                   onClick={handleVolumeClick}>
                    <FaIcons.FaVolumeUp/>
                </i>
                </span> 
                {meanings.map(meaning => (<div>
                        <h2 className="part-of-speech-heading">Part of speech: {meaning.partOfSpeech}</h2>
                        {meaning.definitions.map(definition => 
                            (<Meaning
                            definition={definition.definition}
                            synonym={definition.synonym}
                            antonym={definition.antonym}
                            example={definition.example}
                        />))}
                        <h4>Antonyms: {meaning.antonyms.map(antonym => (<span>{antonym}, </span>))}</h4>
                        <h4>Synonyms: {meaning.synonyms.map(synonym => (<span>{synonym}, </span>))}</h4>
                    </div>
                ))}
            </div>
        </div>
   )
}

export default Word