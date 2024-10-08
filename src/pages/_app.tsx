import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Tailwind CSS imports
import Layout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
