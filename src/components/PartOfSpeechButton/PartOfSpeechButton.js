import React from "react";
import "./PartOfSpeechButton.css"

function PartOfSpeechButton(props){
    const {handleClick,partOfSpeechName} = props
    return(
        <button
            className="part-of-speech-button"
            onClick={handleClick}>
            {partOfSpeechName}
        </button>
    )
}
export default PartOfSpeechButton