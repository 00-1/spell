// Screen shown when the game stops.
export default (
    { Fragment, Button, Paragraph }
) => function Stop ({
    start,
    text
}) {
 return Fragment([
        Paragraph(
            text('result')
        ),
        Button({
            onClick: start,
            children: text('play')
        }) 
    ])
}