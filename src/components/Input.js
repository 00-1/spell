import { input } from "./base.js";
import adoptStyles from "../css/adopt.js"

// adopt styles before rendering 
await adoptStyles(['input'])
export default props => input({...{
    ...props, 
    className: "Input",
    autoFocus: true
}});