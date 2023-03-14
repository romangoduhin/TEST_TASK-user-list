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
        removeUserById: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const {users} = state;

            if (!users) return;

            const filteredUsers = users.filter(user => user.id !== id)

            if (filteredUsers.length === 0) {
                state.users = null;
                return;
            }

            state.users = filteredUsers;
        },
    }
});

export const {requestUsersStart, requestUsersSuccess, requestUsersFailed, removeUserById} = usersSlice.actions;
export default usersSlice.reducer;
