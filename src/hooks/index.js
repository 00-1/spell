import { useState, useEffect, useContext } from "https://cdn.skypack.dev/react";
import _useAdoptStyles from "./useAdoptStyles.js";
import _useGame from "./useGame.js";
import GameContext from "../contexts/GameContext.js";

// Contexts
export const useGameContext = () => useContext(GameContext)

// Inject dependences.
export const [
    useAdoptStyles,
    useGame
] = [
    _useAdoptStyles,
    _useGame
].map(fn => fn({useState, useEffect}))