// hide the word if it appears in the clue
// only matches quoted words
export default (word, clue) => clue
    .split(`${word}'`).join("[...]'")
    .split(`'${word}`).join("'[...]");