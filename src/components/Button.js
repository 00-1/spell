import { button } from './base.js'
import adoptStyles from "../css/adopt.js"

// adopt styles before rendering 
await adoptStyles(['button'])

export default props => button({...{
    ...props, 
    className: "Button"
}});