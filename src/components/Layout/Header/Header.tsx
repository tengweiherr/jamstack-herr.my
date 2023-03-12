import Logo from "@/components/Molecules/Logo"
import { BEHANCE_LINK, EMAIL_LINK, RESUME_LINK } from "@/utils/const"
import animateNavbar from "@/utils/gsap/navbar"
import { Button, ContainerFluid } from "@/utils/styled/common.styled"
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { HeaderContainer, Navbar, NavbarCollapse, NavbarItemList, NavbarToggler, NavItem } from "./Header.styled"

type HeaderProps = {
    resume?: string
}

type Tabs = 'Home' | 'Projects' | 'Tech blog'

const Header = ({resume}:HeaderProps) => {

    const [navClass, setNavClass] = useState<string>('')
    const [togglerClass, setTogglerClass] = useState<string>('collapsed')
    const [collapseClass, setCollapseClass] = useState<string>('collapse')
    const aniRef = useRef<HTMLDivElement>(null)
    const navbarTL = useRef<GSAPTimeline>()

    const [activeTab, setActiveTab] = useState<Tabs>('Home')

    useLayoutEffect(()=>{

        let ctx = gsap.context(()=>{

            animateNavbar(navbarTL)

        }, aniRef)

        return () => ctx.revert()

    },[])

    // $(".navbar-toggler").click(function () {
    //     if ($(this).hasClass('collapsed')) {
    //       $("nav").removeClass('mobile-nav-expand');
    //     } else {
    //       $("nav").addClass('mobile-nav-expand');
    //     }
    //   });

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if(togglerClass === 'collapsed'){
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
                        onClick={()=>setActiveTab('Home')}
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
                                    className={`nav-link ${activeTab==='Home' ? 'active' : ''}`} 
                                    onClick={()=>setActiveTab('Home')}
                                    href="/" 
                                    aria-label="Software Eng"
                                >Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link 
                                    className={`nav-link ${activeTab==='Projects' ? 'active' : ''}`} 
                                    onClick={()=>setActiveTab('Projects')}
                                    href="/projects" 
                                    aria-label="Projects"
                                >Projects
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link 
                                    className={`nav-link ${activeTab==='Tech blog' ? 'active' : ''}`} 
                                    onClick={()=>setActiveTab('Tech blog')}
                                    href="/techblog"
                                    aria-label="Tech blog"
                                >Tech blog
                                </Link>
                            </NavItem>
                            <Link 
                                href="/" 
                                onClick={()=>setActiveTab('Home')}
                                className="d-none d-lg-block text-center logo" 
                                aria-label="Logo"
                            >
                                <Logo />
                            </Link>
                            <NavItem>
                                <a className="nav-link" href={BEHANCE_LINK} target="_blank" aria-label="HERR Studio">HERR Studio</a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href={`mailto:${EMAIL_LINK}`} aria-label="Contact">Contact</a>
                            </NavItem>
                            <NavItem className="resume">
                                <Button className="nav-link button resume cyan mx-auto" href={RESUME_LINK} target="_blank" aria-label="Resume">Resume</Button>
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