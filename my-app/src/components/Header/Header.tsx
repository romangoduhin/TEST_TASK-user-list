import React from "react";
import styles from "./Header.module.scss";
import {HeaderProps} from "./Header.types";
import ResetButton from "./ResetButton/ResetButton";
import {useAppDispatch} from "../../redux/hooks";
import {getUsers} from "../../redux/thunks";
import Input from "./Input/Input";


function Header({searchValue, setSearchValue}: HeaderProps): JSX.Element {
    const dispatch = useAppDispatch();

    function onReset(): void {
        setSearchValue('');

        dispatch(getUsers());
    }

    return (
        <div className={styles.searchInput}>
            <Input value={searchValue} setValue={setSearchValue}/>
            <ResetButton onClick={onReset}/>
        </div>
    );
}

export default Header;