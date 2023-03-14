import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {User, State} from '../types';


const initialState: State = {
    users: null,
    status: {
        isLoading: false,
        isError: false,
        errorMessage: null
    },
    selectedUser: null
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        requestUsersStart: (state: State) => {
            state.status.isError = false;
            state.status.errorMessage = null;
            state.status.isLoading = true;
        },
        requestUsersSuccess: (state: State, action: PayloadAction<User[]>) => {
            const users = action.payload;

            state.users = users;
            state.status.isLoading = false;
        },
        requestUsersFailed: (state: State, action: PayloadAction<string>) => {
            const message = action.payload;

            state.status.isError = true;
            state.status.errorMessage = message;
            state.status.isLoading = false;
        },
        removeUserById: (state: State, action: PayloadAction<number>) => {
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
        setModalUserInfo: (state: State, action: PayloadAction<User>) => {
            const user = action.payload;

            state.selectedUser = user;
        },
        removeModalUserInfo: (state: State) => {
            state.selectedUser = null;
        },
    }
});

export const {
    requestUsersStart,
    requestUsersSuccess,
    requestUsersFailed,
    removeUserById,
    setModalUserInfo,
    removeModalUserInfo
} = usersSlice.actions;
export default usersSlice.reducer;
