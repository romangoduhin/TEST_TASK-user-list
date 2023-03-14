import React from 'react';
import {ModalFieldProps} from "./ModalField.types";
import styles from "./ModalField.module.scss";


function ModalField({data}: ModalFieldProps): JSX.Element {
    return (
        <p className={styles.field}>
            <span>{data.label}</span>
            {data.value}
        </p>
    );
}

export default ModalField;