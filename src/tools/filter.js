import clueData from "../words/misc.js";

console.log({clueData})

// filter out repeat words
console.log(JSON.stringify(clueData.reduce(
    ({seen, filtered}, {word, clues}) => seen.includes(word) 
        ? {seen, filtered} 
        : {
            seen: [...seen, word],
            filtered: [...filtered, { word, clues }]
        }, 
    {seen: [], filtered: []}
).filtered, null, 2))