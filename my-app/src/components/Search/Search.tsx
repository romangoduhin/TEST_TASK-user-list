import React from "react";
import styles from "./Search.module.scss";
import {Props} from "./Search.types";


function Search({value, setValue}: Props) {
    return (
        <div className={styles.searchInput}>
            <input value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder="Type name, username or email"
                   type="text"/>
        </div>
    );
}

export default Search;