import React from "react";
import {Props} from "./Item.types";
import styles from "./Item.module.scss";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import RemoveButton from "./RemoveButton/RemoveButton";


function Item({searchValue, data, onRemove}: Props) {
    const {name, username, email, id} = data;

    return (
        <li className={styles.item}>
            <Avatar/>
            <Info searchValue={searchValue} name={name} username={username} email={email}/>
            <RemoveButton id={id} onClick={onRemove}/>
        </li>
    );
}

export default Item;