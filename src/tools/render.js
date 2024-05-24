import {render} from "https://cdn.skypack.dev/react-dom";
import createElement from "./createElement.js";

// Renders a component using react-dom
export default Component => render(
    createElement(() => Component)(), 
    document.getElementById('root')
);