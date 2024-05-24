import diff from "./tools/diff.js";
import createElement from "./tools/createElement.js";

import Game from "./components/Game.js"

// Default result text.
const result = "ok"

// Run all tests.
Object.entries({
    diff,
    createElement,
    Game
}).map(
    // Run the test.
    ([test, fn]) => fn()
    // Log the result.
    || console.log({test, result})
)