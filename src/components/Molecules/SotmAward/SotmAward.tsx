import Image from "next/image"
import { AwardContainer, AwardLink } from "./SotmAward.styled"

const SotmAward = () => {
    return (
        <AwardContainer>
            <AwardLink href="https://www.mwa.my/2022" target="_blank">
                <Image src="https://www.mwa.my/ribbon/mwa-sotm-ribbon.png" alt="mwa-sotm-ribbon" width={68} height={100} priority/>
            </AwardLink>
        </AwardContainer>
    )
}

export default SotmAward