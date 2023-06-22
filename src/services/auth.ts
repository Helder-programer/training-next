import api from "./api";

type SignInRequestData = {
    email: string;
    password: string;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}


export async function signInRequest(data: SignInRequestData) {
    const response = await api.post<{ user: IUser, token: string }>('/users/login', { email: data.email, password: data.password });
    return response.data;
}

export async function recoverUserInformations() {
    const user: IUser = {
        id: 1,
        name: 'nick',
        email: 'nick@gmail.com',
        password: '12345'
    }

    return {
        user
    }
}