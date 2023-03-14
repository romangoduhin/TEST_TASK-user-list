import React from "react";
import styles from "./Info.module.scss";
import {InfoProps} from "./Info.types";
import InfoField from "./InfoField/InfoField";


function Info({searchValue, name, username, email}: InfoProps): JSX.Element {
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
                <InfoField key={field.value} data={field} searchValue={searchValue}/>
            ))}
        </div>
    );
}

export default Info;