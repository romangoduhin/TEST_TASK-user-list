import React from "react";
import styles from "./Info.module.scss";
import MarkedText from "../MarkedText/MarkedText";
import {Props} from "./Info.types";


function Info({searchValue, name, username, email}: Props) {
    return (
        <div className={styles.info}>
            <div>
                <span>Name:</span>
                <MarkedText innerValue={name} searchValue={searchValue}/>
            </div>

            <div>
                <span>Username:</span>
                <MarkedText innerValue={username} searchValue={searchValue}/>
            </div>

            <div>
                <span>Email:</span>
                <MarkedText innerValue={email} searchValue={searchValue}/>
            </div>
        </div>
    );
}

export default Info;