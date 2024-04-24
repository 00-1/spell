import createElement from '../../tools/createElement.js'
import hooks from '../../hooks/index.js'
import _Button from './Button.js'
import _Input from './Input.js'
import _Paragraph from './Paragraph.js'
import * as html from '../html/index.js'

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

export const Fragment = createElement(
    Symbol.for('react.fragment')
);

// Custom basic components
export const [
    Button,
    Input,
    Paragraph,
] = [
    _Button,
    _Input,
    _Paragraph,
].map(injectDeps => createElement(
    injectDeps(html, hooks)
))