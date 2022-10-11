import App from 'next/App'
import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle'

const MyApp = ({Component, pageProps}) => {

  return <>
    <GlobalStyle />

{/*     <Head>
      <title>blz s</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
    </Head>
 */}


    <Component {...pageProps} />

  </>
}

export default MyApp