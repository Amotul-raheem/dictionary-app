import React from "react"
import "./SearchBar.css"
import * as FaIcons from "react-icons/fa"
import DropDown from "../DropDown/DropDown"

function SearchBar(props) {
    const {value, handleChange, suggestedWords, handleWordClick, isDropDownOpen, selectedWord, onClick, handleKeyPress} = props
    return (

        <div className="search-container">
            <h1 className="search-header">Search a word</h1>
            <div className="search-input-container">
               <i><FaIcons.FaSearch/> </i>
                <input
                    className="search-input"
                    placeholder="search a word"
                    value={value}
                    onChange={handleChange}
                    onClick={onClick}
                    onKeyDown={handleKeyPress}
                />
            </div>
            <div className={`dropdown-body ${isDropDownOpen && 'open'}`}>
                {suggestedWords.map(item => (
                    <div key={item.score} className="dropdown-item"
                         onClick={handleWordClick}
                         word={item.word}
                         // onClick={e => handleWordClick(e.target.id)}
                         id={item.score}>
                        {item.word}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SearchBar