import Logo from '@/components/Molecules/Logo'
import { BEHANCE_LINK, EMAIL_LINK, GITHUB_LINK, MEDIUM_LINK, RESUME_LINK } from '@/utils/const'
import animateNavbar from '@/utils/gsap/navbar'
import { Button, ContainerFluid } from '@/utils/styled/common.styled'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  HeaderContainer,
  Navbar,
  NavbarCollapse,
  NavbarItemList,
  NavbarToggler,
  NavItem,
} from './Header.styled'
import { useRouter } from 'next/router'

type Tabs = 'Home' | 'Projects' | 'Tech blog'

const Header = () => {
  const [navClass, setNavClass] = useState<string>('')
  const [togglerClass, setTogglerClass] = useState<string>('collapsed')
  const [collapseClass, setCollapseClass] = useState<string>('collapse')
  const aniRef = useRef<HTMLDivElement>(null)
  const navbarTL = useRef<GSAPTimeline>()

  const [activeTab, setActiveTab] = useState<Tabs>('Home')

  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      setActiveTab('Home')
    } else if (router.pathname === '/projects') {
      setActiveTab('Projects')
    } else if (router.pathname === '/techblog') {
      setActiveTab('Tech blog')
    }
  }, [router.pathname])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateNavbar(navbarTL)
    }, aniRef)

    return () => ctx.revert()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (togglerClass === 'collapsed') {
      setNavClass('mobile-nav-expand')
      setTogglerClass('')
      setCollapseClass('collapse show')
    } else {
      setNavClass('')
      setTogglerClass('collapsed')
      // setCollapseClass('collapsing')
      setCollapseClass('collapse')
    }
  }

  return (
    <>
      <HeaderContainer ref={aniRef}>
        <Navbar className={navClass}>
          <ContainerFluid>
            <Link
              href="/"
              onClick={() => setActiveTab('Home')}
              className="navbar-brand d-lg-none px-2 logo"
              aria-label="Logo"
            >
              <Logo />
            </Link>
            <NavbarToggler onClick={handleNavClick} className={togglerClass}>
              <span className="navbar-toggler-icon" />
            </NavbarToggler>
            <NavbarCollapse className={collapseClass} id="navbarToggler">
              <NavbarItemList>
                <NavItem>
                  <Link
                    className={`nav-link ${
                      activeTab === 'Home' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Home')}
                    href="/"
                    aria-label="Home"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    @this
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className='nav-link'
                    href={GITHUB_LINK}
                    target="_blank"
                    aria-label="Projects"
                  >
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className='nav-link'
                    href={MEDIUM_LINK}
                    target="_blank"
                    aria-label="Tech blog"
                  >
                    Tech blog
                  </Link>
                </NavItem>
                <Link
                  href="/"
                  onClick={() => setActiveTab('Home')}
                  className="d-none d-lg-block text-center logo"
                  aria-label="Logo"
                >
                  <Logo />
                </Link>
                <NavItem>
                  <Link
                    className="nav-link"
                    href={BEHANCE_LINK}
                    target="_blank"
                    aria-label="HERR Studio"
                  >
                    HERR Studio
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    href={`mailto:${EMAIL_LINK}`}
                    target="_blank"
                    aria-label="Contact"
                  >
                    Contact
                  </Link>
                </NavItem>
                <NavItem className="resume">
                  <Button
                    className="nav-link button resume cyan mx-auto"
                    href={RESUME_LINK}
                    target="_blank"
                    aria-label="Resume"
                  >
                    Resume
                  </Button>
                </NavItem>
              </NavbarItemList>
            </NavbarCollapse>
          </ContainerFluid>
        </Navbar>
      </HeaderContainer>
    </>
  )
}

export default Header
