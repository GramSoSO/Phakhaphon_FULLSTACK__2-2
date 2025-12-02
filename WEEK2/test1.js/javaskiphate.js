function censorWord(sentence, wordToCenter) {
    const regex = new RegExp(wordToCenter,'gi')
    const censorText = sentence.replace(regex,'****')
    return censorText;
}

const originalPost = ("Java Scrip is fun!, but sometime javescript is suck.")
const cleanPost = censorWord(originalPost, "javascript" )

console.log(cleanPost)