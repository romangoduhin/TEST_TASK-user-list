import {Dispatch} from '@reduxjs/toolkit';
import usersAPI from "../services/api/usersApi";
import {requestUsersFailed, requestUsersStart, requestUsersSuccess} from "./slices/usersSlice";


export const setUsersThunk = () => async (dispatch: Dispatch) => {
    dispatch(requestUsersStart());

    try {
        const users = await usersAPI.getUsers();

        dispatch(requestUsersSuccess(users));

    } catch (err) {
        if (err instanceof Error) {
            const errorMessage = err.message;

            dispatch(requestUsersFailed(errorMessage));
        }
    }
};

