import {createElement} from "https://cdn.skypack.dev/react";
import _Button from './Button.js'
import _Input from './Input.js'
import _Play from './Play.js'
import _Stop from './Stop.js'

const [
    Button,
    Input,
    Play,
    Stop
] = [
    _Button,
    _Input,
    _Play,
    _Stop
].map(element => props => createElement(element, props))

export {
    Button,
    Input,
    Play,
    Stop
}