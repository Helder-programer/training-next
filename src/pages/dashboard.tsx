import { Inter, Roboto } from 'next/font/google';
import Navbar from './navbar';
import { useAuth } from '@/contexts/auth';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { getApiClient } from '@/services/api-utils';
const roboto = Roboto({ weight: "400", subsets: ['latin'] });

function Dashboard() {
    return (
        <>
            <Navbar />
            <main style={{ paddingLeft: '280px' }}>
                <h1>Main</h1>
            </main>
        </>
    )
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