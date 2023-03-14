import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {setUsersThunk} from "./redux/thunks";
import List from "./components/List/List";
import styles from "./App.module.scss";
import Search from "./components/Search/Search";


function App() {
    const dispatch = useAppDispatch();

    const {users, status} = useAppSelector(state => state.users);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(setUsersThunk());
    }, [])

    return (
        <div className={styles.app}>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            <List data={users} status={status} searchValue={searchValue}/>
        </div>
    )
}

export default App
