import createElement from '../../tools/createElement.js'
import * as hooks from '../../hooks/index.js'
import _Result from './Result.js'
import _Diff from './Diff.js'
import _PlayButton from './PlayButton.js'
import _Clue from './Clue.js'
import _Guess from './Guess.js'
import _NextClueButton from './NextClueButton.js'
import _TryButton from './TryButton.js'
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
    Result,
    Diff,
    PlayButton,
    Clue,
    Guess,
    TryButton,
    NextClueButton
] = [
    _Result,
    _Diff,
    _PlayButton,
    _Clue,
    _Guess,
    _TryButton,
    _NextClueButton
].map(fn => createElement(
    fn,
    {
        ...html, 
        ...basic
    },
    hooks
))