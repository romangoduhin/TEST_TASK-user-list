import React from "react";
import styles from "./Avatar.module.scss";
import UserIcon from "../../../../assets/user.svg";


function Avatar() {
    return (
        <div className={styles.avatar}>
            <img src={UserIcon} alt="user icon"/>
        </div>
    );
}

export default Avatar;