import ReactDOM from "react-dom";
import {PortalProps} from "./Portal.types";


function Portal({children}: PortalProps) {
    return ReactDOM.createPortal(children, document.getElementById("modal-root")!);
}

export default Portal;