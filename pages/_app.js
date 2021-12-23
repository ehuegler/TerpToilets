import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Toilet-UMD</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
