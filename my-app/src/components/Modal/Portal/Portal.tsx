import ReactDOM from "react-dom";
import {Props} from "./Portal.types";


function Portal ({children}: Props) {
    return ReactDOM.createPortal(children, document.getElementById("modal-root")!)
}

export default Portal;