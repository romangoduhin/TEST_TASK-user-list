import {Dispatch} from '@reduxjs/toolkit';
import usersAPI from "../services/api/usersApi";
import {requestUsersFailed, requestUsersStart, requestUsersSuccess} from "./slices/usersSlice";

const DEFAULT_ERROR_MESSAGE = "Something went wrong!"

export const getUsers = () => async (dispatch: Dispatch): Promise<any> => {
    dispatch(requestUsersStart());

    try {
        const users = await usersAPI.getUsers();

        dispatch(requestUsersSuccess(users));
    } catch (err) {
        dispatch(requestUsersFailed(DEFAULT_ERROR_MESSAGE));
    }
};

