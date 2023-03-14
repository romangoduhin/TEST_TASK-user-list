import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {InitialState, Users} from '../types';


const initialState: InitialState = {
    users: null,
    status: {
        isLoading: false,
        isError: false,
        errorMessage: null
    }
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        requestUsersStart: (state) => {
            state.status.isError = false;
            state.status.errorMessage = null;
            state.status.isLoading = true;
        },
        requestUsersSuccess: (state, action: PayloadAction<Users>) => {
            const users = action.payload;

            state.users = users;
            state.status.isLoading = false;
        },
        requestUsersFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload;

            state.status.isError = true;
            state.status.errorMessage = message;
            state.status.isLoading = false;
        },
    }
});

export const {requestUsersStart, requestUsersSuccess, requestUsersFailed} = usersSlice.actions;
export default usersSlice.reducer;
