// Find differences between two strings, `guess` and `word`.
// Returns an array of letters in `guess`, plus whether it 
// matches (yes/no/near)
export default ({guess, word}) => 
    Array.from(guess).map((letter, index) => ({
        letter,
        match: (wordIndex => {
            if (wordIndex === -1) return 'no'
            if (index === wordIndex) return 'yes'
            return 'near'
        })(word.indexOf(letter))
    }))