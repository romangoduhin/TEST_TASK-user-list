import React from "react";
import {Props} from "./List.types";
import Item from "../Item/Item";
import styles from "./List.module.scss";


function List({data}: Props) {
    if (!data) return <div>Nothing to show</div>

    return (
        <ul className={styles.list}>
            {data.map(item => <Item key={item.id} data={item}/>)}
        </ul>
    );
}

export default List;