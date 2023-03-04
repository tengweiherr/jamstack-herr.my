import Logo from "@/components/Molecules/Logo"
import { BEHANCE_LINK, EMAIL_LINK, MEDIUM_LINK, RESUME_LINK } from "@/utils/const"
import animateNavbar from "@/utils/gsap/navbar"
import { Button } from "@/utils/styled/common.styled"
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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

    useEffect(()=>{

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

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(togglerClass === 'collapsed'){
            setNavClass('mobile-nav-expand')
            setTogglerClass('')
            setCollapseClass('collapse show')
        } else {
            setNavClass('')
            setTogglerClass('collapsed')
            setCollapseClass('collapsing')
            setTimeout(() => {
                setCollapseClass('collapse')
            }, 500);
        }

    }

    return (
        <>
        <header ref={aniRef}>
            <nav className={`navbar navbar-expand-lg ${navClass}`}>
                <div className="container-fluid">
                    <Link 
                        href="/" 
                        onClick={()=>setActiveTab('Home')}
                        className="navbar-brand d-lg-none px-2 logo" 
                        aria-label="Logo"
                    >
                        <Logo />
                    </Link>
                    <button onClick={handleNavClick} className={`navbar-toggler ${togglerClass}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded={togglerClass!=='collapsed'} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <svg aria-label="Expand" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </span>
                    </button>
                    <div className={`navbar-collapse ${collapseClass}`} id="navbarToggler">
                        <ul className="navbar-nav mx-auto justify-content-around align-items-center w-100 py-3 px-5">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab==='Home' ? 'active' : ''}`} 
                                    onClick={()=>setActiveTab('Home')}
                                    href="/" 
                                    aria-label="Software Eng"
                                >Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab==='Projects' ? 'active' : ''}`} 
                                    onClick={()=>setActiveTab('Projects')}
                                    href="/projects" 
                                    aria-label="Projects"
                                >Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${activeTab==='Tech blog' ? 'active' : ''}`} 
                                    onClick={()=>setActiveTab('Tech blog')}
                                    href="/techblog"
                                    aria-label="Tech blog"
                                >Tech blog
                                </Link>
                            </li>
                            <Link 
                                href="/" 
                                onClick={()=>setActiveTab('Home')}
                                className="d-none d-lg-block text-center logo" 
                                aria-label="Logo"
                            >
                                <Logo />
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href={BEHANCE_LINK} target="_blank" aria-label="HERR Studio">HERR Studio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`mailto:${EMAIL_LINK}`} aria-label="Contact">Contact</a>
                            </li>
                            <li className="nav-item resume">
                                <Button className="nav-link button resume cyan mx-auto" href={RESUME_LINK} target="_blank" aria-label="Resume">Resume</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header