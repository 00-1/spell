import { useState, useEffect } from "https://cdn.skypack.dev/react";
import words from "../tools/words.js";
import pick from "../tools/pick.js";
import hide from "../tools/hide.js";

export default () => {

    const [word, setWord] = useState()
    const [clues, setClues] = useState([])
    const [guess, setGuess] = useState('');
    const [clueNumber, setClueNumber] = useState(0);
    const [result, setResult] = useState('');
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Enter') {
            // Handle Enter key press here
            if (playing) return attempt();
            return start();
          }
        };
    
        // Add event listener when component mounts
        document.addEventListener('keypress', handleKeyPress);
    
        // Clean up event listener when component unmounts
        return () =>
          document.removeEventListener('keypress', handleKeyPress);
      }, [playing, guess, clueNumber]); 
    

    // function to start the game
    // picks a new word & clears the game
    const start = () => {
        const picked = pick(words)
        return setWord(picked.word) 
            || setClues(picked.clues)
            || setPlaying(true)
            || setGuess('')
            || setClueNumber(0)
    }

    // guess a word, win if it's right
    // otherwise give next clue
    const attempt = () => {
        if (guess===word) return setResult('win') 
            || setPlaying(false)
            || setGuess('')
        return nextClue()
    }

    // give the next clue. or fail
    // if there's none left
    const nextClue = () => {
        if (clueNumber < 2) return setClueNumber(clueNumber + 1)
        return setResult('fail') 
            || setPlaying(false)
    }

    // update guess with value extracted 
    // from an input element
    const changeGuess = ({target: { value }}) => setGuess(value)

    // generate text used in the game
    const text = reference => ({
        clue: () => `[Clue #${
            clueNumber + 1
        }]: ${
            hide(word, clues[clueNumber])
        }`,
        result: () => result 
            ? `It was "${word}".\r\nyou ${result}, with ${clueNumber} extra clue(s).`
            : `Try this spelling game.`,
        play: () => `Play${result && ' again?'}`
    })[reference]()


    return {
        guess,
        playing,
        start,
        nextClue,
        attempt, 
        changeGuess,
        text
    }
}