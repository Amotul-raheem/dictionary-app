import React from "react"
import "./HomePage.css"
import Search from "../Search/Search.js";


function HomePage() {
    const handleChange = () => {
        console.log("okay")
    }
    const handleSearch = () => {
        console.log("okay")
    }

    return (
        <div className="homepage">
            <div className="homepage-nav-bar">
                <h1>Home Page</h1>
            </div>
            <div>
                <Search
                    // value={"what"}
                    handleChange={handleChange}
                    handleSearch={handleSearch}
                />
            </div>
        </div>

    )
}

export default HomePage;