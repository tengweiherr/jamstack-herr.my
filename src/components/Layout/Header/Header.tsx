import Logo from '@/components/Molecules/Logo'
import {
  BEHANCE_LINK,
  EMAIL_LINK,
  GITHUB_LINK,
  MEDIUM_LINK,
  RESUME_LINK,
} from '@/utils/const'
import animateNavbar from '@/utils/gsap/navbar'
import { cx } from '@/utils/styles/cx'
import commonStyles from '@/utils/styles/common.module.css'
import gsap from 'gsap'
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [navClass, setNavClass] = useState<string>('')
  const [togglerClass, setTogglerClass] = useState<string>('collapsed')
  const [collapseClass, setCollapseClass] = useState<string>('collapse')
  const aniRef = useRef<HTMLDivElement>(null)
  const navbarTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateNavbar(navbarTL)
    }, aniRef)

    return () => ctx.revert()
  }, [])

  const handleNavClick = () => {
    if (togglerClass === 'collapsed') {
      setNavClass(styles.mobileNavExpand)
      setTogglerClass('')
      setCollapseClass('collapse show')
    } else {
      setNavClass('')
      setTogglerClass('collapsed')
      setCollapseClass('collapse')
    }
  }

  return (
    <header ref={aniRef}>
      <nav className={cx('navbar navbar-expand-lg', styles.navbar, navClass)}>
        <div className="container-fluid">
          <div className="navbar-brand d-lg-none px-2 logo">
            <Logo />
          </div>
          <div
            role="button"
            aria-label="Toggle navigation"
            onClick={handleNavClick}
            className={cx('navbar-toggler', styles.navbarToggler, togglerClass)}
          >
            <span className="navbar-toggler-icon" />
          </div>
          <div
            className={cx('navbar-collapse', styles.navbarCollapse, collapseClass)}
            id="navbarToggler"
          >
            <ul
              className={cx(
                'navbar-nav mx-auto justify-content-around align-items-center w-100',
                styles.navbarItemList
              )}
            >
              <li className={cx('nav-item', styles.navItem)}>
                <Link
                  className="nav-link active"
                  href="/"
                  aria-label="Home"
                  style={{ fontSize: '1.2rem' }}
                >
                  @this
                </Link>
              </li>
              <li className={cx('nav-item', styles.navItem)}>
                <Link
                  className="nav-link"
                  href={GITHUB_LINK}
                  target="_blank"
                  aria-label="Projects"
                >
                  Projects
                </Link>
              </li>
              <li className={cx('nav-item', styles.navItem)}>
                <Link
                  className="nav-link"
                  href={MEDIUM_LINK}
                  target="_blank"
                  aria-label="Tech blog"
                >
                  Tech blog
                </Link>
              </li>
              <div className="d-none d-lg-block text-center logo">
                <Logo />
              </div>
              <li className={cx('nav-item', styles.navItem)}>
                <Link
                  className="nav-link"
                  href={BEHANCE_LINK}
                  target="_blank"
                  aria-label="HERR Studio"
                >
                  HERR Studio
                </Link>
              </li>
              <li className={cx('nav-item', styles.navItem)}>
                <Link
                  className="nav-link"
                  href={`mailto:${EMAIL_LINK}`}
                  target="_blank"
                  aria-label="Contact"
                >
                  Contact
                </Link>
              </li>
              <li className={cx('nav-item resume', styles.navItem)}>
                <Link
                  className={cx(
                    'nav-link button resume cyan mx-auto',
                    commonStyles.button
                  )}
                  href={RESUME_LINK}
                  target="_blank"
                  aria-label="Resume"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
