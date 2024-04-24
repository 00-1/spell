import createElement from "../../src/tools/createElement.js";
import {deepStrictEqual} from 'assert'

const elementFn = createElement('span')
const element = elementFn('text', 'Text')
const props = {onClick: "Click"}

const expectedResult = {
    '$$typeof': Symbol.for('react.element'),
    type: 'span',
    props: { children: 'text', className: "Text" },
    ref: null,
    key: 0
}

export default () => deepStrictEqual(
    element,
    expectedResult,
    "createElement should make text child"
) || deepStrictEqual(
    elementFn(element, 'Container'),
    {
        ...expectedResult,
        props: { children: element, className: 'Container' }
    },
    "createElement should make element child"
) || deepStrictEqual(
    elementFn(props, 'Button'),
    {
        ...expectedResult,
        props: { ...props, className: 'Button', children: undefined}
    },
    "createElement should make props props"
)  || deepStrictEqual(
    elementFn(['a'], 'List'),
    {
        ...expectedResult,
        props: { ...props, className: 'List', children: ['a']}
    },
    "createElement should make array children"
)