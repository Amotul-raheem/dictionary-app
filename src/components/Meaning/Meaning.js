import React from "react";
import "./Meaning.css"
import {isEmpty} from "../Utils/WordUtil"


function Meaning(props) {
    const {synonyms, antonyms, example, definition} = props

    return (
        <div className="meaning">
            <ul>
                <li>
                    <h3>Meaning: </h3>
                    <span>{definition}</span>
                    {!isEmpty(synonyms) && <p><span>Synonyms:</span> {synonyms}</p>}
                    {!isEmpty(antonyms) && <p><span>Antonyms: </span>{antonyms}</p>}
                    {!isEmpty(example) && <p><span>Example: </span>{example}</p>}

                </li>
            </ul>
        </div>
    )
}

export default Meaning