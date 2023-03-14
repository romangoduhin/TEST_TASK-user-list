import React from "react";
import {Props} from "./IconButton.types";
import styles from "./IconButton.module.scss";


function IconButton({width, height, src, onClick}: Props) {
    return (
        <div onClick={onClick} style={{width: width, height: height}}>
            <img className={styles.icon} src={src} alt="icon"/>
        </div>
    );
}

export default IconButton;