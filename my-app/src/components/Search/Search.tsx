import React from "react";
import styles from "./Search.module.scss";
import {Props} from "./Search.types";


function Search({searchValue, setSearchValue}: Props) {
    return (
        <div className={styles.searchInput}>
            <input value={searchValue}
                   onChange={(e) => setSearchValue(e.target.value)}
                   placeholder="Type name, username or email"
                   type="text"
            />
        </div>
    );
}

export default Search;