import React from "react";
import styles from "./EmptyContent.module.scss";
import {EmptyContentProps} from "./EmptyContent.types";


function EmptyContent({children}: EmptyContentProps): JSX.Element {
    return (
        <div className={styles.emptyContent}>{children}</div>
    );
}

export default EmptyContent;