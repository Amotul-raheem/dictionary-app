import React, {useEffect, useState} from "react"
import "./HomePage.css"
import SearchBar from "../SearchBar/SearchBar"
import RandomWord from "../RandomWord/RandomWord"
// import Word from "../Word/Word";
import axios from "axios";
import moment from "moment";


function HomePage() {
    const today = moment(new Date()).format("MMM Do YYYY")
    const wordUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    const randomWordUrl = "https://random-words-api.vercel.app/word"
    const suggestedWordsUrl = "https://api.datamuse.com/sug?s="

    const [searchWord, setSearchWord] = useState("")
    const [isRandom, setIsRandom] = useState(true)
    const [suggestedWords, setSuggestedWords] = useState([])
    // const [success, setSuccess] = useState(true)
    const [wordOfTheDayResult, setWordOfTheDAyResult] = useState({})


    useEffect( () => {
        try{
            getRandomWord()
            setIsRandom(true)
        }catch(e){
            console.log(e.response)
        }
    }, [])


    const getRandomWord = async () => {
        const response = await axios.get(randomWordUrl)
        const result = response.data[0]
        setWordOfTheDAyResult(result)
    }

    const getResult = async () => {
        const response = await axios.get(wordUrl + searchWord)
    }

    const getSuggestedWords = async () => {
        const response = await axios.get(suggestedWordsUrl + searchWord)
        const result = (response.data)
        setSuggestedWords(result)
    }

    const handleChange = async (e) => {
        setSearchWord(e.target.value)
        await getSuggestedWords()
    }

    const handleSearch = () => {
        console.log(searchWord)
    }

    return (
        <div className="homepage">
            <div className="homepage-nav-bar">
                <h1 className="home-page-logo">Dictionary</h1>
            </div>
            <div className="search-bar">
                <SearchBar
                    value={searchWord}
                    handleChange={handleChange}
                    suggestedWords={suggestedWords}
                    isDropDownOpen={true}
                />
            </div>
            {/*<div className="">*/}
            {/*    <RandomWord*/}
            {/*        date={today}*/}
            {/*        word={wordOfTheDayResult.word}*/}
            {/*        meaning={wordOfTheDayResult.definition}*/}
            {/*        phonetics={wordOfTheDayResult.pronunciation}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>


    )
}

export default HomePage;