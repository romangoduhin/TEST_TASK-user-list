import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {getUsers} from "./redux/thunks";
import UserList from "./components/List/UserList";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import {User} from "./redux/types";
import {removeModalUserInfo, setModalUserInfo} from "./redux/slices/usersSlice";


function App() {
    const dispatch = useAppDispatch();

    const {selectedUser} = useAppSelector(state => state.users);

    const [searchValue, setSearchValue] = useState('');

    const isModalOpen = Boolean(selectedUser);

    function onOpenModal(user: User): void {
        dispatch(setModalUserInfo(user));
    }

    function onCloseModal(): void {
        dispatch(removeModalUserInfo());
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div className={styles.app}>
            <Modal isOpen={isModalOpen} data={selectedUser} onClose={onCloseModal}/>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <UserList searchValue={searchValue} onItemClick={onOpenModal}/>
        </div>
    )
}

export default App
