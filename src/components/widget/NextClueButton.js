// Button to start playing the game.
export default (
    { Button },
    { useGameContext }
) => function PlayButton () {

    const {nextClue} = useGameContext();

    return Button({
        onClick: nextClue,
        children: 'next clue'
    })
}