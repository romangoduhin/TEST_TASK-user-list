import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {setUsersThunk} from "./redux/thunks";
import List from "./components/List/List";
import styles from "./App.module.scss";
import Search from "./components/Search/Search";
import Modal from "./components/Modal/Modal";
import {UserAddress, UserCompany} from "./redux/types";
import {removeModalUserInfo, setModalUserInfo} from "./redux/slices/usersSlice";


function App() {
    const dispatch = useAppDispatch();

    const {users, status, modalUserInfo} = useAppSelector(state => state.users);

    const [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    function onOpenModal(company: UserCompany, address: UserAddress) {
        dispatch(setModalUserInfo({company, address}));
    }

    function onCloseModal() {
        dispatch(removeModalUserInfo());
    }

    useEffect(() => {
        const {address, company} = modalUserInfo;

        if (address && company) {
            setIsModalOpen(true);
            return;
        }

        setIsModalOpen(false);
    }, [modalUserInfo]);

    useEffect(() => {
        dispatch(setUsersThunk());
    }, [])

    return (<>
            {isModalOpen && <Modal data={modalUserInfo} onClose={onCloseModal}/>}

            <div className={styles.app}>
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                <List data={users} status={status} searchValue={searchValue} onItemClick={onOpenModal}/>
            </div>
        </>
    )
}

export default App
