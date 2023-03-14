import React from "react";
import {InputProps} from "./Input.types";
import styles from "./Input.module.scss";


function Input({value, setValue}: InputProps): JSX.Element {
    return (
        <input value={value}
               className={styles.customInput}
               onChange={(e) => setValue(e.target.value)}
               placeholder="Type name, username or email"
               type="text"
        />
    );
}

export default Input;