import Logo from "@/components/Logo"
import { BEHANCE_LINK, EMAIL_LINK, RESUME_LINK } from "@/utils/const"
import { Button } from "@/utils/styled/common.styled"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const Header = () => {

    const [navClass, setNavClass] = useState<string>('')
    const [togglerClass, setTogglerClass] = useState<string>('collapsed')
    const [collapseClass, setCollapseClass] = useState<string>('collapse')
    const aniRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()

    useEffect(()=>{

        let ctx = gsap.context(()=>{

            tl.current = gsap.timeline({
                scrollTrigger: {
                  trigger: ".navbar",
                  start: "top bottom"
                }
            })
            .from(".nav-item", {
                y: -100,
                opacity: 0,
                stagger: 0.1
            })
            .from("a.logo", {
                y: -100,
                opacity: 0
            }, "-=0.2");

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
                    <a className="navbar-brand d-lg-none px-2 logo">
                        <Logo />
                    </a>
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
                                <a className="nav-link active" href="#" aria-label="Software Eng">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={BEHANCE_LINK} target="_blank" aria-label="HERR Studio">HERR Studio</a>
                            </li>
                            <a className="d-none d-lg-block text-center logo" href="#" aria-label="Logo">
                                <Logo />
                            </a>
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