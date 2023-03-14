import React from "react";
import {Id, Props} from "./List.types";
import Item from "../Item/Item";
import styles from "./List.module.scss";
import {useAppDispatch} from "../../redux/hooks";
import {removeUserById} from "../../redux/slices/usersSlice";


function List({data, status, searchValue}: Props) {
    const dispatch = useAppDispatch();

    function onRemove(id: Id) {
        dispatch(removeUserById(id))
    }

    if (status.isError) return <div className={styles.emptyContent}>{status.errorMessage}</div>

    if (status.isLoading) return <div className={styles.emptyContent}>Loading...</div>

    if (!data) return <div className={styles.emptyContent}>Nothing to show</div>

    return (
        <ul className={styles.list}>
            {data.map(item => <Item searchValue={searchValue} key={item.id} data={item} onRemove={onRemove}/>)}
        </ul>
    );
}

export default List;