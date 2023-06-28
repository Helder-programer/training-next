import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import LoginForm from "@/components/login-form";

function LoginPage() {
    return (
        <main className="d-flex container-fluid vh-100 vw-100 justify-content-center align-items-center">
            <div style={{ width: '20rem' }}>
                <h2 className="text-center mb-2 fw-bold">Service Max</h2>
                <h5 className="text-center mb-2 fw-semi-bold">Make Your Login</h5>
                <LoginForm />
            </div>
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