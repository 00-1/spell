import { p, _ } from "./base.js"
import { Button, Input } from "./index.js"

// screen shown when playing the game
export default ({
    nextClue,
    attempt, 
    guess,
    changeGuess,
    text
}) => _([
    p(text('clue')),
    Input({
        value: guess, 
        onChange: changeGuess
    }),
    Button({
        onClick: attempt,
        children: 'try'
    }),
    Button({
        onClick: nextClue,
        children: 'next clue'
    })
])


