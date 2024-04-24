// Screen shown when playing the game.
export default (
    { Fragment, Button, Input, Paragraph }
) => function Play ({
    nextClue,
    attempt, 
    guess,
    changeGuess,
    text
}) { 
    return Fragment([
        Paragraph(
            text('clue')
        ),
        Input({
            value: guess, 
            onChange: changeGuess
        }),
        Button({
            onClick: attempt,
            children: 'try'
        }),
        Button({
            onClick: nextClue,
            children: 'next clue'
        })
    ])
}

