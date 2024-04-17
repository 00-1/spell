import adjectives from "../words/adjectives.mjs";
import adverbs from "../words/adverbs.mjs";
import misc from "../words/misc.mjs";
import nouns from "../words/nouns.mjs";
import verbs from "../words/verbs.mjs";

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