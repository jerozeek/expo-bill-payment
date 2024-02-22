import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../utils/interfaces";

const initialState = {
    isLoggedIn: false,
    user: undefined as unknown as IUser,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<IUser>) => {
            state.user          = action.payload;
            state.isLoggedIn    = true;
        },
        setLogout: (state) => {
            state.user = undefined as unknown as IUser;
            state.isLoggedIn = false;
        }
    }
})

export const { actions: authAction, reducer: authReducer } = authSlice;
