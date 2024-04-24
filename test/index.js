import diff from "./tools/diff.js";
import createElement from "./tools/createElement.js";

// Default result text.
const result = "ok"

// Run all tests.
Object.entries({
    diff,
    createElement
}).map(
    // Run the test.
    ([test, fn]) => fn()
    // Log the result.
    || console.log({test, result})
)