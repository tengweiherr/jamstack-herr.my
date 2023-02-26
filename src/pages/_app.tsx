import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import type { AppProps } from 'next/app'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
