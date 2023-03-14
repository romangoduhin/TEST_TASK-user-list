import React from "react";
import styles from "./RemoveButton.module.scss";
import {Props} from "./RemoveButton.types";


function RemoveButton({id, onClick}: Props) {
    return (
        <button className={styles.removeButton} onClick={(e) => onClick(e, id)}>Remove</button>
    );
}

export default RemoveButton;