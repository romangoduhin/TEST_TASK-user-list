import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {InitialState, ModalUserInfo, Users} from '../types';


const initialState: InitialState = {
    users: null,
    status: {
        isLoading: false,
        isError: false,
        errorMessage: null
    },
    modalUserInfo: {
        address: null,
        company: null,
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
        setModalUserInfo: (state, action: PayloadAction<ModalUserInfo>) => {
            const {address, company} = action.payload;

            state.modalUserInfo = {
                company: company,
                address: address
            }
        },
        removeModalUserInfo: (state) => {
            state.modalUserInfo = {
                company: null,
                address: null
            }
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
