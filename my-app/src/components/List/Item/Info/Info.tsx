import React from "react";
import styles from "./Info.module.scss";
import MarkedText from "../MarkedText/MarkedText";
import {Props} from "./Info.types";


function Info({searchValue, name, username, email}: Props) {
    const items = [
        {
            label: "Name: ",
            value: name,
        },
        {
            label: "Username: ",
            value: username,
        },
        {
            label: "Email: ",
            value: email,
        },
    ]

    return (
        <div className={styles.info}>
            {items.map(item => (
                <div>
                    <span>{item.label}</span>
                    <MarkedText innerValue={item.value} searchValue={searchValue}/>
                </div>
            ))}
        </div>
    );
}

export default Info;