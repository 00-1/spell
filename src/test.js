import { jsx, jsxs, Fragment } from "react/jsx-runtime";

const Input = props => jsx("input", {
    ...props,
    className: "Input",
    autoFocus: true
});


const Game = () => jsxs("div", {
    className: "Game",
    children: [state === 'play' && jsxs(Fragment, {
      children: [jsxs("p", {
        children: ["[clue #", clue + 1, "]: ", hide(word, clues[clue])]
      }), jsxs("form", {
        onSubmit: attempt,
        children: [jsx(Input, {
          value: guess,
          onChange: ({
            target: {
              value
            }
          }) => setGuess(value)
        }), jsx(Button, {
          type: "submit",
          children: "try"
        }), jsx(Button, {
          onClick: fail,
          children: "next clue"
        })]
      })]
    }), state === 'stop' && jsxs(Fragment, {
      children: [result && jsxs("p", {
        children: ["it was \"", word, "\".", jsx("br", {}), "you ", result, ", with ", clue, " extra clue(s)."]
      }), jsxs(Button, {
        onClick: start,
        children: ["play", result && ' again?']
      })]
    })]
});

console.log(Input, Game)

