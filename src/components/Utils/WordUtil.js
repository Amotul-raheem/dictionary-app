export const filterWordResult = (result) => {
    const newResult = {}
    let word = result.word
    let phonetics = result.phonetics
    let meanings = result.meanings
    newResult.word = word
    newResult.phonetics = transformPhonetics(phonetics)
    newResult.meanings = meanings
    return newResult
}
export function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};


function isEmpty(str) {
    return (!str || str.length === 0);
}

const transformPhonetics = (phonetics) => {
    const initialAccum = {phoneticTexts: "", phoneticSound: ""}

    return phonetics.reduce((accum, phonetic) => {
        if (!isEmpty(phonetic.text)) {
            accum.phoneticTexts = accum.phoneticTexts + ", "  + phonetic.text
        }
        if (isValidURL(phonetic.audio)) {
            accum.phoneticSound = phonetic.audio
        }
        return accum

    }, initialAccum)

}



    

