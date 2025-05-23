import 'bootstrap/dist/css/bootstrap.css'
import 'react-loading-skeleton/dist/skeleton.css'
import './global.css'
import type { AppProps } from 'next/app'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Layout from '@/components/Layout'
import Head from 'next/head'
import SotyAward from '@/components/Molecules/SotyAward'
import MeInOrangeBg from 'public/herr-orange.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
          <title>
            Teng Wei Herr
          </title>
          <meta name="description" content="A designer/photographer-turned-software-engineer, occasionally writing tech articles and contributing to OSS projects." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="HERR, Teng Wei Herr"
          />
          <meta name="author" content="Teng Wei Herr" />
          <meta
            name="image"
            content={MeInOrangeBg.src}
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="bingbot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:title" content="Teng Wei Herr" />
          <meta
            property="og:description"
            content="A designer/photographer-turned-software-engineer, occasionally writing tech articles and contributing to OSS projects."
          />
          <meta
            property="og:image"
            content={MeInOrangeBg.src}
          />
          <meta property="og:url" content="https://www.herr.my/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Teng Wei Herr" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Teng Wei Herr" />
          <meta
            name="twitter:description"
            content="A designer/photographer-turned-software-engineer, occasionally writing tech articles and contributing to OSS projects."
          />
          <meta name="twitter:image" content="https://www.herr.my" />
          <meta name="twitter:site" content="@tengweiherr" />
          <meta name="twitter:creator" content="@tengweiherr" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <SotyAward />
    </>
  )
}
