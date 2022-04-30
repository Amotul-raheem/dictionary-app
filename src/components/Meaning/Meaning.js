import React from "react";
import "./Meaning.css"


function Meaning(props) {
    const {synonyms, antonyms, example, definition} = props
    return (
        <div className="meaning">
            <ul>
                <li>
                    <h3>Meaning: </h3>
                    <span>{definition}</span>
                    <p>synonyms: {synonyms}</p>
                    <p>Antonyms: {antonyms} </p>
                    <p>Example: {example}</p>

                </li>
            </ul>
        </div>
    )
}

export default Meaning