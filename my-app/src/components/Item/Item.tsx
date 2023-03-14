import React from "react";
import {Props} from "./Item.types";
import styles from "./Item.module.scss";
import UserIcon from "../../assets/user.svg";


function Item({data, onRemove}: Props) {
    const {name, username, email, id} = data;

    return (
        <li className={styles.item}>
            <div className={styles.avatar}>
                <img src={UserIcon} alt="user icon"/>
            </div>

            <div className={styles.info}>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
            </div>

            <button className={styles.removeButton} onClick={() => onRemove(id)}>Remove</button>
        </li>
    );
}

export default Item;