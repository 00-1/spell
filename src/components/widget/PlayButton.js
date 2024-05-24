// Button to start playing the game.
export default (
    { Button },
    { useGameContext }
) => function PlayButton () {

    const {start, text} = useGameContext();

    return Button({
        onClick: start,
        children: text('play')
    }) 
}