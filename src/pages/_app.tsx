import type { AppProps } from 'next/app';
import '../styles/global.css';
import { AuthProvider } from '@/contexts/auth';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}
