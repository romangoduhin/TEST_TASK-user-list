import React from 'react';
import styles from "./EmptyContent.module.scss";
import {Props} from "./EmptyContent.types";


function EmptyContent({children}: Props) {
    return (
        <div className={styles.emptyContent}>{children}</div>
    );
}

export default EmptyContent;