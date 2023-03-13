import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {setUsersThunk} from "./redux/thunks";


function App() {
    const dispatch = useAppDispatch();

    const {users, status} = useAppSelector(state => state.users);

    useEffect(() => {
        dispatch(setUsersThunk());
    }, [])

    if (status.isError) return <div>{status.errorMessage}</div>

    if (status.isLoading) return <div>Loading</div>

    return (
        <div>
            {JSON.stringify(users)}
        </div>
    )
}

export default App
