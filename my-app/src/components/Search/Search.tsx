import React from "react";
import styles from "./Search.module.scss";
import {Props} from "./Search.types";
import ResetButton from "./ResetButton/ResetButton";
import {useAppDispatch} from "../../redux/hooks";
import {setUsersThunk} from "../../redux/thunks";
import Input from "./Input/Input";


function Search({searchValue, setSearchValue}: Props) {
    const dispatch = useAppDispatch();

    function onReset() {
        setSearchValue('');

        dispatch(setUsersThunk());
    }

    return (
        <div className={styles.searchInput}>
            <Input value={searchValue} setValue={setSearchValue}/>
            <ResetButton onClick={onReset}/>
        </div>
    );
}

export default Search;