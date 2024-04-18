import adjectives from "../words/adjectives.js";
import adverbs from "../words/adverbs.js";
import misc from "../words/misc.js";
import nouns from "../words/nouns.js";
import verbs from "../words/verbs.js";

const words = [
    ...adjectives.words,
    ...adverbs.words,
    ...misc.words,
    ...nouns.words,
    ...verbs.words
];

console.log(adjectives.description, adjectives.words.length)
console.log(adverbs.description, adverbs.words.length)
console.log(misc.description, misc.words.length)
console.log(nouns.description, nouns.words.length)
console.log(verbs.description, verbs.words.length)
console.log("Total", words.length)

// export the full word list
export default words