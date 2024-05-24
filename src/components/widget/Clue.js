// Button to start playing the game.
export default (
    { Paragraph },
    { useGameContext }
) => function PlayButton () {

    const {text} = useGameContext();

    return Paragraph(
        text('clue')
    )
}