import { useState, useEffect } from "https://cdn.skypack.dev/react";
import _useAdoptStyles from "./useAdoptStyles.js";
import _useGame from "./useGame.js";

// Inject dependences.
const [
    useAdoptStyles,
    useGame
] = [
    _useAdoptStyles,
    _useGame
].map(fn => fn({useState, useEffect}))

export default {
    useAdoptStyles,
    useGame
}

export {
    useAdoptStyles,
    useGame
}