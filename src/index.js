import {createElement} from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import adoptStyles from "./css/adopt.js"
import useGame from "./hooks/useGame.js";
import { div, _ } from "./components/base.js"
import {  Play, Stop } from "./components/index.js"

// adopt styles before rendering 
await adoptStyles(['game'])

// main game component
const Game = () => {
    const {playing, ...props} = useGame();

    return div({
        className: "Game",
        children: playing 
            ? Play(props)
            : Stop(props)     
    })
};

ReactDOM.render(
    createElement(Game),
    document.getElementById('root')
);