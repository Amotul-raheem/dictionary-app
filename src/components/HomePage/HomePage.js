import React, {useEffect, useState} from "react"
import "./HomePage.css"
import SearchBar from "../SearchBar/SearchBar"
import RandomWord from "../RandomWord/RandomWord"
import {filterWordResult} from "../Utils/WordUtil"
import Word from "../Word/Word";
import axios from "axios";
import moment from "moment";


function HomePage() {
    const today = moment(new Date()).format("MMM Do YYYY")
    const wordUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    const randomWordUrl = "https://random-words-api.vercel.app/word"
    const suggestedWordsUrl = "https://api.datamuse.com/sug?s="
    const [searchWord, setSearchWord] = useState("")
    const [suggestedWords, setSuggestedWords] = useState([])
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [isRandom, setIsRandom] = useState(true)
    const [wordOfTheDayResult, setWordOfTheDAyResult] = useState({})
    const [searchedWordResult, setSearchedWordResult] = useState({})



    useEffect(() => {
        try {
            getRandomWord()

        } catch (e) {
            console.log(e.response)
        }
    }, [])

    const getRandomWord = async () => {
        const response = await axios.get(randomWordUrl)
        const result = response.data[0]
        setWordOfTheDAyResult(result)
    }
    const getSuggestedWords = async (searchValue) => {
        const response = await axios.get(suggestedWordsUrl + searchValue)
        const result = (response.data)
        setSuggestedWords(result)
    }

    const getSearchedWordResult = async (searchValue) => {
        const response = await axios.get(wordUrl + searchValue)
        const WordResult = response.data[0]
        const filteredResult = filterWordResult(WordResult)
        setSearchedWordResult(filteredResult)
    }


    const handleEnterKeyPress = async (e) => {
        if (e.keyCode === 13) {
            const searchWord = e.target.value
            setSearchWord(searchWord)
            closeDropDown()
            await getSearchedWordResult(searchWord)
            setIsRandom(false)
        }
    }
    const handleSuggestedWordClick = async (e) => {
        const id = (e.target.id)
        let selectedWord = suggestedWords.find(word => word.score == id)
        setSearchWord(selectedWord.word)
        await getSearchedWordResult(selectedWord.word)
        setIsRandom(false)
    }

    const handleChange = async (e) => {
        const searchWord = e.target.value
        setSearchWord(searchWord)
        await getSuggestedWords(searchWord)

    }
    const handleSearchClick = () => {
        if (searchWord === "" ){
            setSuggestedWords([])
            closeDropDown()
        }
        toggleDropDown()

    }
    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }
    const closeDropDown = () => {
        if (isDropDownOpen) {
            toggleDropDown()
        }
    }

    return (
        <div onClick={closeDropDown} className="homepage">
            <div className="homepage-nav-bar">
                <h1 className="home-page-logo">Dictionary</h1>
            </div>
            <div className="search-bar">
                <SearchBar
                    value={searchWord}
                    handleChange={handleChange}
                    suggestedWords={suggestedWords}
                    isDropDownOpen={isDropDownOpen}
                    onClick={handleSearchClick}
                    handleWordClick={handleSuggestedWordClick}
                    handleKeyPress={handleEnterKeyPress}
                />
            </div>
            <div className="">
                {isRandom ? <RandomWord
                    date={today}
                    word={wordOfTheDayResult.word}
                    meaning={wordOfTheDayResult.definition}
                    phonetics={wordOfTheDayResult.pronunciation}
                /> : <Word
                    word={searchedWordResult.word}
                    phonetics={searchedWordResult.phonetics}
                    meanings={searchedWordResult.meanings}
                />}


            </div>
        </div>


    )
}

export default HomePage;