import React from "react";
import {UserListProps} from "./UserList.types";
import Item from "./Item/Item";
import styles from "./UserList.module.scss";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {removeUserById} from "../../redux/slices/usersSlice";
import EmptyContent from "./EmptyContent/EmptyContent";
import {HandleClick, Id} from "../../globalTypes";


function UserList({searchValue, onItemClick}: UserListProps): JSX.Element {
    const dispatch = useAppDispatch();

    const {users, status} = useAppSelector(state => state.users);

    function onRemove(e: HandleClick, id: Id): void {
        e.stopPropagation();

        dispatch(removeUserById(id))
    }

    if (status.isError) return <EmptyContent>{status.errorMessage}</EmptyContent>

    if (status.isLoading) return <EmptyContent>Loading...</EmptyContent>

    if (!users) return <EmptyContent>Nothing to show</EmptyContent>

    return (
        <ul className={styles.list}>
            {users.map(user => <Item searchValue={searchValue}
                                     key={user.id}
                                     data={user}
                                     onClick={onItemClick}
                                     onRemove={onRemove}/>)}
        </ul>

    );
}

export default UserList;