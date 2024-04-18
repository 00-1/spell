import {createElement, Fragment} from "https://cdn.skypack.dev/react";

// if a string is passed to function treat it as child
// otherwise treat it as props
const childrenOrProps = (element, props) => typeof props === 'string'
    ? createElement(element, null, props)
    : createElement(element, props)

// make functions for each element
const [
    button, 
    input, 
    p,
    div
] = [
    'button', 
    'input', 
    'p',
    'div'
].map(element => props => childrenOrProps(element, props))

// fragment always uses children 
const _ = children => createElement(Fragment, null, children)

export {
    button,
    input,
    p,
    div,
    _
}