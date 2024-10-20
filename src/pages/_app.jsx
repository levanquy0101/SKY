import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Default App Name';
    return (
        <>
            <Head>
                <title>{appName}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
