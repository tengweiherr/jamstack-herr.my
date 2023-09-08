import { ReactNode } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}

export default Layout
