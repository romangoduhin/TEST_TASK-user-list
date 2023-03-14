import React from "react";
import styles from "./RemoveButton.module.scss";
import {RemoveButtonProps} from "./RemoveButton.types";


function RemoveButton({id, onClick}: RemoveButtonProps): JSX.Element {
    return (
        <button className={styles.removeButton} onClick={(e) => onClick(e, id)}>Remove</button>
    );
}

export default RemoveButton;