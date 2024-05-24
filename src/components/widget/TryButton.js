// Button to start playing the game.
export default (
    { Button },
    { useGameContext }
) => function PlayButton () {

    const {attempt} = useGameContext();

    return Button({
        onClick: attempt,
        children: 'try'
    })
}