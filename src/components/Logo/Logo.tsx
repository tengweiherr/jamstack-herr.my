import Image from "next/image"
import LogoSVG from "../../../public/logo-dark.svg"

const Logo = () => {
    return (
        <Image 
            src={LogoSVG} 
            alt="HERR Studio"
            width={60}
            height={60}
        />
    )
}

export default Logo