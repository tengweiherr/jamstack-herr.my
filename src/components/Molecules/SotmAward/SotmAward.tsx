import { AWS_S3_PREFIX } from "@/utils/const"
import Image from "next/image"
import { AwardContainer, AwardLink } from "./SotmAward.styled"

const ribbonImage = AWS_S3_PREFIX + 'mwa-sotm-ribbon.webp'

const SotmAward = () => {
    return (
        <AwardContainer>
            <AwardLink href="https://www.mwa.my/2022" target="_blank">
                <Image src={ribbonImage} alt="mwa-sotm-ribbon" width={68} height={100} priority/>
            </AwardLink>
        </AwardContainer>
    )
}

export default SotmAward