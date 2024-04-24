import createElement from '../../tools/createElement.js'
import hooks from '../../hooks/index.js'
import _Play from './Play.js'
import _Stop from './Stop.js'
import _Result from './Result.js'
import _Diff from './Diff.js'
import * as html from '../html/index.js'
import * as basic from '../basic/index.js'

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
    Play,
    Stop,
    Result,
    Diff,
] = [
    _Play,
    _Stop,
    _Result,
    _Diff,
].map(injectDeps => createElement(
    injectDeps(
        {
            ...html, 
            ...basic
        },
        hooks
    )
))