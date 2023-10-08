import { ReactNode, useEffect } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Script from 'next/script'
import COLOR from '@/utils/styled/color'

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
      <Header />
      <Body>{children}</Body>
      <Footer />
      <Script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        strategy="afterInteractive"
        onLoad={kofiScriptOnLoad}
      />
    </>
  )
}

export default Layout
