import {
    GameContext,
    Game, 
    Playing, 
    Stopped
} from "./components/container/index.js"
import {
    Result, 
    PlayButton, 
    Clue, 
    Diff, 
    Guess,
    TryButton,
    NextClueButton
} from "./components/widget/index.js"
import {useGame, useAdoptStyles} from "./hooks/index.js"
import render from "./tools/render.js";

// Main game component.
function App () {
    
    const {ready} = useAdoptStyles(['body'])

    const {playing, ...value} = useGame();

    return ready && GameContext(
        Game([
            playing 
                ? Playing([
                    Clue,
                    Diff,
                    Guess,
                    TryButton,
                    NextClueButton
                ])   
                : Stopped([
                    Result,
                    PlayButton
                ])
        ]), null, {value}
    )
};

render(App)