import {deepStrictEqual} from 'assert'
import Game from '../../src/components/container/Game.js'

// Mock components.
const components = {
    div: (child,label) => ({[label]: child}),
    Play: props => ["Play", props],
    Stop: props => ["Stop", props]
}

// Mock hooks.
const hooks = {
    useGame: () => ({playing: true, props: "props"}),
    useAdoptStyles: () => ({ready: true})
}

// Run tests.
export default () => deepStrictEqual(
    Game(components, hooks)(),
    { Game: [ 'Play', { props: 'props' } ]},
    "Game should return Play with props, when playing"
) 
|| deepStrictEqual(
    Game(components, {
        ...hooks, 
        useGame: () => ({playing: false, props: "props"})
    })(),
    { Game: [ 'Stop', { props: 'props' } ]},
    "Game should return Stop with props, when not playing"
) 
|| deepStrictEqual(
    Game(components, {
        ...hooks, 
        useAdoptStyles: () => ({ready: false})
    })(),
    false,
    "Game should return false, when not ready"
);
