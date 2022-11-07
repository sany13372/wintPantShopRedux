import MainProvaider from '../app/providers/MainProvider'
import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <MainProvaider>
      <Component {...pageProps} Component={Component}/>
      </MainProvaider>
    </>
  )
}

export default MyApp
