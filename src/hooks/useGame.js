import React, { useState } from "https://cdn.skypack.dev/react";
import words from "../tools/words.js";
import pick from "../tools/pick.js";
import hide from "../tools/hide.js";

export default () => {

    const [word, setWord] = useState()
    const [clues, setClues] = useState([])
    const [guess, setGuess] = useState('');
    const [clueNumber, setClueNumber] = useState(0);
    const [result, setResult] = useState('');
    const [state, setState] = useState('stop');

    const start = () => {
        const picked = pick(words)
        return setWord(picked.word) 
            || setClues(picked.clues)
            || setState('play')
            || setGuess('')
            || setClueNumber(0)
    }

    const attempt = event => {
        event.preventDefault();
        if (guess===word) return setResult('win') 
            || setState('stop')
            || setGuess('')
        return nextClue()
    }

    const nextClue = () => {
        if (clueNumber < 2) return setClueNumber(clueNumber + 1)
        return setResult('fail') 
            || setState('stop')
    }

    const changeGuess = ({target: { value }}) => setGuess(value)

    // generate text used in the game
    const text = reference => ({
        clue: () => `[clue #${
            clueNumber + 1
        }]: ${
            hide(word, clues[clueNumber])
        }`,
        result: () => result 
            ? `it was "${word}".\r\nyou ${result}, with ${clueNumber} extra clue(s).`
            : `try this spelling game.`,
        play: () => `play${result && ' again?'}`
    })[reference]()

    return {
        start, 
        attempt, 
        nextClue, 
        text,
        clueNumber,
        clues, 
        result,
        word,
        state,
        changeGuess
    }
}