import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import adoptStyles from "./css/adopt.js"
import useGame from "./hooks/useGame.js";

// adopt styles before rendering 
await adoptStyles(['game', 'button', 'input'])

const Button = props => <button {...{
    ...props, 
    className: "Button"
}} />

const Input = props => <input {...{
    ...props, 
    className: "Input",
    autoFocus: true
}} />

// screen shown when playing the game
const Play = ({
    nextClue,
    attempt, 
    guess,
    changeGuess,
    text
}) => <>
    <p>{text('clue')}</p>
    <form onSubmit={attempt}>
        <Input
            value={guess}
            onChange={changeGuess}
        />
        <Button type="submit">try</Button>
        <Button onClick={nextClue}>next clue</Button>
    </form>
</>

// screen shown when the game stops
const Stop = ({
    start,
    text
}) => <>
    <p>{text('result')}</p>
    <Button onClick={start}>{text('play')}</Button> 
</>

// main game component
const Game = () => {
    const {state, ...props} = useGame();

    return <div className="Game"> {
        state==='play' 
            ? <Play {...props} /> 
            : <Stop {...props} />     
    } </div>
};

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);