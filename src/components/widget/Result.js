// The result after an attempt.
export default (
    { Fragment, Diff }
) => function Result ({guess, word}) { 
    return Fragment([
        // Show the difference between guess and word
        Diff({guess, word})

        // TODO: Result text

        // TODO: Button to perform next action
    ])
}