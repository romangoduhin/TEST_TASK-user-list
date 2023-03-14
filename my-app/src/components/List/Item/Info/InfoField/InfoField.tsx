import React from 'react';
import MarkedText from "../../MarkedText/MarkedText";
import {InfoFieldProps} from "./InfoField.types";
import styles from "./InfoField.module.scss";


function InfoField({data, searchValue}: InfoFieldProps): JSX.Element {
    return (
        <div className={styles.field}>
            <span>{data.label}</span>
            <MarkedText innerValue={data.value} searchValue={searchValue}/>
        </div>
    );
}

export default InfoField;