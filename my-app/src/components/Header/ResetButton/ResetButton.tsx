import React from "react";
import {ResetButtonProps} from "./ResetButton.types";
import IconButton from "../../IconButton/IconButton";
import RefreshIcon from "../../../assets/icons/refreshIcon.svg";


function ResetButton({onClick}: ResetButtonProps): JSX.Element {
    return (
        <IconButton width="40px" height="40px" src={RefreshIcon} onClick={onClick}/>
    );
}

export default ResetButton;