import diff from '../../tools/diff.js'

export default (
    {div, span},
    {useAdoptStyles}
) => function Diff ({word, guess}) { 
    const {ready} = useAdoptStyles(['Diff'])

    return ready && div(
        diff({word, guess})
            .map(({letter, match}) => span(
                letter,
                match
            )),
        "Diff"
    )
};