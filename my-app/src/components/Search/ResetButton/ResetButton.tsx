import React from "react";
import {Props} from "./ResetButton.types";
import IconButton from "../../IconButton/IconButton";
import RefreshIcon from "../../../assets/icons/refreshIcon.svg";


function ResetButton({onClick}: Props) {
    return (
        <IconButton width="40px" height="40px" src={RefreshIcon} onClick={onClick}/>
    );
}

export default ResetButton;