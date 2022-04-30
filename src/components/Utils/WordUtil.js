export const filterWordResult = (result) => {
    const newResult = {}
    let word = result.word
    let phonetics = result.phonetics
    let meanings = result.meanings
    newResult.word = word
    newResult.phonetics = phonetics
    newResult.meanings = meanings
    return newResult
}
    

