import React from "react";
import {Props} from "./List.types";
import Item from "../Item/Item";
import styles from "./List.module.scss";
import {useAppDispatch} from "../../redux/hooks";
import {removeUserById} from "../../redux/slices/usersSlice";


function List({data, value}: Props) {
    const dispatch = useAppDispatch();

    function onRemove(id: number) {
        dispatch(removeUserById(id))
    }

    const filteredData = data?.filter(el => el.name.includes(value) || el.username.includes(value) || el.email.includes(value));

    if (!filteredData) return <div>Nothing to show</div>

    return (
        <ul className={styles.list}>
            {filteredData.map(item => <Item key={item.id} data={item} onRemove={onRemove}/>)}
        </ul>
    );
}

export default List;