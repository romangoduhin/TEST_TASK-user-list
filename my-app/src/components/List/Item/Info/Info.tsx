import React from "react";
import styles from "./Info.module.scss";
import MarkedText from "../MarkedText/MarkedText";
import {Props} from "./Info.types";


function Info({searchValue, name, username, email}: Props) {
    const fields = [
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
            {fields.map(field => (
                <div>
                    <span>{field.label}</span>
                    <MarkedText innerValue={field.value} searchValue={searchValue}/>
                </div>
            ))}
        </div>
    );
}

export default Info;