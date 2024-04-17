import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import words from "./tools/words.mjs";
import pick from "./tools/pick.mjs";
import hide from "./tools/hide.mjs";

// Define a simple functional component called Hello
const Hello = () => {
    const [word, setWord] = useState()
    const [clues, setClues] = useState([])
    const [guess, setGuess] = useState('');
    const [clue, setClue] = useState(0);
    const [result, setResult] = useState('');
    const [state, setState] = useState('stop');

    const start = () => {
        const picked = pick(words)
        console.log({picked})
        return setWord(picked.word) 
            || setClues(picked.clues)
            || setState('play')
            || setGuess('')
            || setClue(0)
    }
    const attempt = (event) => {
        event.preventDefault();
        if (guess===word) return setResult('win') || setState('stop')
        return fail()
    }

    const fail = () => {
        if (clue<2) return setClue(clue+1)
        return setResult('fail') || setState('stop')
    }

    if (state==='play') return (
        <div>
            <p>[clue #{clue+1}]: {clues[clue]}</p>
            <form onSubmit={attempt}>
                <input
                    value={guess}
                    onChange={({target: { value }}) => setGuess(value)}
                />
                <button type="submit">try</button>
                <button onClick={fail}>next clue</button>
            </form>
        </div>
    );

    if (state==='stop') return (
        <div>
            {result && <p>
                it was "{word}".<br />
                you {result}, with {clue} extra clues.
            </p>}
            <button onClick={start}>play{result && ' again?'}</button>  
        </div>
    );
};

// Render the Hello component into the root element
ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);