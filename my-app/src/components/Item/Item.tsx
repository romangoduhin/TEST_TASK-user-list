import React from "react";
import {Props} from "./Item.types";
import styles from "./Item.module.scss";
import UserIcon from "../../assets/user.svg";


function Item({data}: Props) {
    return (
        <li className={styles.item}>
            <div className={styles.avatar}>
                <img src={UserIcon} alt="user icon"/>
            </div>

            <div className={styles.info}>
                <p>{data.name}</p>
                <p>{data.username}</p>
                <p>{data.email}</p>
            </div>

        </li>
    );
}

export default Item;