import React, {useState} from "react"
import "./HomePage.css"
import Search from "../Search/Search.js";
import Word from "../Word/Word";


function HomePage() {
    const [value, setValue] = useState("")
    
    const handleChange = (e) => {
         setValue(e.target.value)
    }

    const handleSearch = () => {
        console.log(value)
    }

    return (
        <div className="homepage">
            <div className="homepage-nav-bar">
                <h1 className="home-page-logo">Dictionary</h1>
            </div>
            <div>
                <Search
                    value={value}
                    handleChange={handleChange}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="lower-container">
                <div className="">
                    <Word
                        date={"12-04-2022"}
                        word={"Howdy"}
                        meaning={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
                            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
                            "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n" +
                            "optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n" +
                            "obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n" +
                            "nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n" +
                            "tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n" +
                            "!"}
                        phonetics={"/what'/"}
                        partOfSpeech={"verb"}
                        synonyms={"okay"}
                        antonyms={"what"}

                    />
                </div>
            </div>
        </div>

    )
}

export default HomePage;