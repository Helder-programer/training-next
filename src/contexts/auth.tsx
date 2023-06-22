import { recoverUserInformations, signInRequest } from "@/services/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

interface SignInData {
    email: string;
    password: string;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface IAuthContext {
    user: IUser | null;
    signIn: (data: SignInData) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}



export const AuthContext = createContext({} as IAuthContext);


export function AuthProvider({ children }: { children: React.JSX.Element }) {
    const [user, setUser] = useState<IUser | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'next-token': token } = parseCookies();

        if (token) {
            recoverUserInformations().then(response => {
                setUser(response.user);
            });
        }
        setUser(user);
    }, []);

    const signIn = async ({ email, password }: SignInData) => {
        const { user, token } = await signInRequest({ email, password });


        setCookie(undefined, 'next-token', token, {
            maxAge: 60 * 60 * 1 //1 hour
        });

        setUser(user);

        Router.push('/dashboard');
    }

    const logout = () => {
        destroyCookie(undefined, 'next-token');
        setUser(null);
        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>

    )
}

export function useAuth() {
    const authContext = useContext(AuthContext);
    return authContext;
}