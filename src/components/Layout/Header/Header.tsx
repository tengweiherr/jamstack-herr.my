import Logo from "@/components/Logo"
import { Button } from "@/utils/styled/common.styled"

const Header = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-lg-none px-2 logo">
                        <Logo />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <svg aria-label="Expand" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mx-auto justify-content-around align-items-center w-100 py-3 px-5">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-label="Software Eng">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.behance.net/herrstudio" target="_blank" aria-label="HERR Studio">HERR Studio</a>
                            </li>
                            <a className="d-none d-lg-block text-center logo" href="#" aria-label="Logo">
                                <Logo />
                            </a>
                            <li className="nav-item">
                                <a className="nav-link" href="mailto:herrartwork@gmail.com" aria-label="Contact">Contact</a>
                            </li>
                            <li className="nav-item resume">
                                <Button className="nav-link button resume cyan mx-auto" href="asset/TengWeiHerr-Resume.pdf" aria-label="Resume">Resume</Button>
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