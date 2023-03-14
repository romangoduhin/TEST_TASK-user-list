import React from "react";
import styles from "./Reset.module.scss";
import {Props} from "./ResetButton.types";


function ResetButton({onClick}: Props) {
    return (
        <button onClick={onClick} className={styles.resetButton}>Reset</button>
    );
}

export default ResetButton;