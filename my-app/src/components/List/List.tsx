import React from "react";
import {Props} from "./List.types";
import Item from "../Item/Item";
import styles from "./List.module.scss";
import {useAppDispatch} from "../../redux/hooks";
import {removeUserById} from "../../redux/slices/usersSlice";


function List({data, searchValue}: Props) {
    const dispatch = useAppDispatch();

    function onRemove(id: number) {
        dispatch(removeUserById(id))
    }

    if (!data) return <div className={styles.emptyContent}>Nothing to show</div>

    return (
        <ul className={styles.list}>
            {data.map(item => <Item searchValue={searchValue} key={item.id} data={item} onRemove={onRemove}/>)}
        </ul>
    );
}

export default List;