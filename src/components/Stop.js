import { p, _ } from "./base.js"
import { Button } from "./index.js"

// screen shown when the game stops
export default ({
    start,
    text
}) => _([
    p(
        text('result')
    ),
    Button({
        onClick: start,
        children: text('play')
    }) 
])