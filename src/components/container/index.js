import createElement from '../../tools/createElement.js'
import _GameContext from "../../contexts/GameContext.js"
import * as hooks from '../../hooks/index.js'
import _Game from './Game.js'
import _Playing from './Playing.js'
import _Stopped from './Stopped.js'
import * as html from '../html/index.js'
import * as widget from '../widget/index.js'



/*
 * Exports components as functions.
 * 
 * The functions are just a wrapper for React's `createElement()`:
 * https://react.dev/reference/react/createElement
 * 
 * To keep things clean the functions only take one argument:
 * - If it's a string it's mapped to the `child` argument
 * - Otherwise it's mapped to the `props` argument.
 */

// export context first
export const GameContext = 
    createElement(() => _GameContext.Provider);

// Custom container components
export const [
    Playing,
    Stopped,
    Game
] = [
    _Playing,
    _Stopped,
    _Game
].map(fn => createElement(
    fn, 
    {GameContext, ...html}, 
    hooks
))


