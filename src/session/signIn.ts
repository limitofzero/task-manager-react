import {Dispatch} from "@reduxjs/toolkit";
import {finishSignIn, startSignIn} from "./sessionSlice";
import {api} from "../api/api";

export interface SignInOptions {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface SignInResponse {
    token: string;
}

export function signIn(userForm: SignInOptions) {
    return async (dispatch: Dispatch) => {
        dispatch(startSignIn());

        const { data } = await api.post<SignInResponse>('login', userForm);
        dispatch(finishSignIn(data));

        localStorage.setItem('token', data.token);
    }
}
