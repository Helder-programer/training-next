import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import LoginForm from "@/components/login-form";
import Router from "next/router";

function LoginPage() {
    return (
        <main className="flex justify-center items-center h-screen w-screen">
            <LoginForm />
        </main>
    );
}

export default LoginPage;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { 'next-token': token } = parseCookies(ctx);

    if (token) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}