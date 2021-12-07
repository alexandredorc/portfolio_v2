import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
            
            <link rel="icon" type="image/png" sizes="250x250" href="/favicon.png"/>
            <title>My App</title>
    </Head>

    <Component {...pageProps} />
  </>
  )
}

export default MyApp
