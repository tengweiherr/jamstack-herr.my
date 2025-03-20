import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Script from 'next/script'
import COLOR from '@/utils/styled/color'
import { Chakra_Petch } from 'next/font/google'

const font = Chakra_Petch({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"] })

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const kofiScriptOnLoad = () => {
    window.kofiWidgetOverlay.draw('tengweiherr', {
      type: 'floating-chat',
      'floating-chat.donateButton.text': 'Tip Me',
      'floating-chat.donateButton.background-color': COLOR.CYAN,
      'floating-chat.donateButton.text-color': '#fff',
    })
  }

  return (
    <>
      <main className={font.className}>
        <Header />
        {children}
        <Footer />
      </main>
      <Script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        strategy="afterInteractive"
        onLoad={kofiScriptOnLoad}
      />
    </>
  )
}

export default Layout
