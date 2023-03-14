import React from "react";
import {ItemProps} from "./Item.types";
import styles from "./Item.module.scss";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import RemoveButton from "./RemoveButton/RemoveButton";


function Item({searchValue, data, onClick, onRemove}: ItemProps): JSX.Element {
    return (
        <li className={styles.item} onClick={() => onClick(data)}>
            <Avatar/>
            <Info searchValue={searchValue} name={data.name} username={data.username} email={data.email}/>
            <RemoveButton id={data.id} onClick={onRemove}/>
        </li>
    );
}

export default Item;