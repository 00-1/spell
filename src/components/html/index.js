import createElement from '../../tools/createElement.js'

// Basic html elements
export const [
    button, 
    input, 
    p,
    div,
    span,
    ul,
    li
] = [
    'button', 
    'input', 
    'p',
    'div',
    'span',
    'ul',
    'li'
].map(createElement)