import diff from '../../src/tools/diff.js'
import {deepStrictEqual} from 'assert'

export default () => deepStrictEqual(
    diff({word: "sip", guess: "spy"}), 
    [
        {letter: 's', match: 'yes'},
        {letter: 'p', match: 'near'},
        {letter: 'y', match: 'no'}
    ],
    "diff should find one 'yes', one 'near' & one 'no'."
);


