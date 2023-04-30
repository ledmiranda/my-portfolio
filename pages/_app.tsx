import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/ui/nav-bar';
import Footer from '../components/ui/footer';

const monstserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${monstserrat.variable} font-mont dark:bg-dark bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}

export default MyApp;
