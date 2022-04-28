import React from "react"
import "./HomePage.css"
import Search from "../Search/Search.js";
import Word from "../Word/Word";


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
                <h1 className="home-page-logo">Home Page</h1>
            </div>
            <div>
                <Search
                    // value={"what"}
                    handleChange={handleChange}
                    handleSearch={handleSearch}
                />
            </div>
            <div>
                <div>
                    <Word
                        date={"12-04-2022"}
                        meaning={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
                            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
                            "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n" +
                            "optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n" +
                            "obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n" +
                            "nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n" +
                            "tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n" +
                            "!"}
                    />
                    <div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomePage;