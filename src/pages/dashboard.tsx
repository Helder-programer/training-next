import { Inter, Roboto } from 'next/font/google';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import dynamic from 'next/dynamic';


const DinamycNavbar: any = dynamic(() => import('@/components/navbar'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

function Dashboard() {
    return (
        <>
            <DinamycNavbar />
            <main className="container-fluid">
                <h1>Main</h1>
            </main>
        </>
    );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { 'next-token': token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default Dashboard;