// Button to start playing the game.
export default (
    { Input },
    { useGameContext }
) => function PlayButton () {

    const {guess, changeGuess} = useGameContext();

    return Input({
        value: guess, 
        onChange: changeGuess
    })
}