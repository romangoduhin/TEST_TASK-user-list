import React from "react";
import {HandleClick, Id, Props} from "./List.types";
import Item from "./Item/Item";
import styles from "./List.module.scss";
import {useAppDispatch} from "../../redux/hooks";
import {removeUserById} from "../../redux/slices/usersSlice";
import EmptyContent from "./EmptyContent/EmptyContent";


function List({data, status, searchValue, onItemClick}: Props) {
    const dispatch = useAppDispatch();

    function onRemove(e: HandleClick, id: Id) {
        e.stopPropagation();

        dispatch(removeUserById(id))
    }

    if (status.isError) return <EmptyContent>{status.errorMessage}</EmptyContent>

    if (status.isLoading) return <EmptyContent>Loading...</EmptyContent>

    if (!data) return <EmptyContent>Nothing to show</EmptyContent>

    return (
        <ul className={styles.list}>
            {data.map(item => <Item searchValue={searchValue}
                                    key={item.id}
                                    data={item}
                                    onClick={onItemClick}
                                    onRemove={onRemove}/>)}
        </ul>

    );
}

export default List;