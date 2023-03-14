import React from "react";
import {IconButtonProps} from "./IconButton.types";
import styles from "./IconButton.module.scss";


function IconButton({width, height, src, onClick}: IconButtonProps): JSX.Element {
    return (
        <div onClick={onClick} style={{width: width, height: height}}>
            <img className={styles.icon} src={src} alt="icon"/>
        </div>
    );
}

export default IconButton;