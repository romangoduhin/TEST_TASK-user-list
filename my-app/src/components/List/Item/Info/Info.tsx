import React from "react";
import styles from "./Info.module.scss";
import MarkedText from "../MarkedText/MarkedText";
import {Props} from "./Info.types";


function Info({searchValue, name, username, email}: Props) {
    return (
        <div className={styles.info}>
            <MarkedText innerValue={name} searchValue={searchValue}/>
            <MarkedText innerValue={username} searchValue={searchValue}/>
            <MarkedText innerValue={email} searchValue={searchValue}/>
        </div>
    );
}

export default Info;