import React from "react"
import "./Search.css"
import * as FaIcons from "react-icons/fa"

function Search(props) {
    const {value, handleSearch, handleChange} = props

    return (
        <div className="search-container">
            <h1 className="search-header">Search a word</h1>
                <FaIcons.FaSearch/>
                <input
                    className="search-input"
                    placeholder="search a word"
                    value={value}
                    onChange={handleChange}
                />

            <button className="search-button" onClick={handleSearch}> Search</button>
        </div>
    )
}

export default Search