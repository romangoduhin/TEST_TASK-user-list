import React from "react";
import {Props} from "./Item.types";
import styles from "./Item.module.scss";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import RemoveButton from "./RemoveButton/RemoveButton";


function Item({searchValue, data, onClick, onRemove}: Props) {
    const {name, username, email, id, company, address} = data;

    return (
        <li className={styles.item} onClick={() => onClick(company, address)}>
            <Avatar/>
            <Info searchValue={searchValue} name={name} username={username} email={email}/>
            <RemoveButton id={id} onClick={onRemove}/>
        </li>
    );
}

export default Item;