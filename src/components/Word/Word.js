import React from "react"
import "./Word.css"

function Word(props) {
    const {date, meaning} = props
    return (
        <div className="word-container">
            <h1 className="word-heading">
                Word of the day
            </h1>
            <p>{date}</p>
            <p>{meaning}</p>
        </div>
    )
}

export default Word