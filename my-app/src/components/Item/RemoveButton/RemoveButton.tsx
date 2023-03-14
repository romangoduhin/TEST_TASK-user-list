import React from "react";
import styles from "./RemoveButton.module.scss";
import {Props} from "./RemoveButton.types";


function RemoveButton({id, onRemove}: Props) {
    return (
        <button className={styles.removeButton} onClick={() => onRemove(id)}>Remove</button>
    );
}

export default RemoveButton;