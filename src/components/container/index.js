import createElement from '../../tools/createElement.js'
import hooks from '../../hooks/index.js'
import _Game from './Game.js'
import * as html from '../html/index.js'
import * as basic from '../basic/index.js'
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

// Custom container components
export const [
    Game,
] = [
    _Game,
].map(injectDeps => createElement(
    injectDeps(
        {
            ...html, 
            ...basic,
            ...widget
        },
        hooks
    )
))