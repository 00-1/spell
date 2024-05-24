import diff from '../../tools/diff.js'

export default (
    {ul, li},
    {useAdoptStyles, useGameContext}
) => function Diff () { 
    const {ready} = useAdoptStyles(['Diff'])
    const {word, guesses} = useGameContext();

    return ready && ul(
        guesses.map(guess => li(
            diff({word, guess}).map(({letter, match}) => span(
                letter,
                match
            ))
        )),
        "Diff"
    )     
};