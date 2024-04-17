import words from "./tools/words.mjs";
import pick from "./tools/pick.mjs";
import hide from "./tools/hide.mjs";

const {word, clues} = pick(words)

console.log({word}, hide(word, clues[2]))

export {word, clues}