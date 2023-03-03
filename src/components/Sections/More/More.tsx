import { Button } from "@/utils/styled/common.styled"
import Image from "next/image"
import { BlackOverlapped, H4, MoreCardContent, MoreCardOuter, MoreContainer, MoreInnerContainer, SingleMoreCard } from "./More.styled"
import pgcnySVG from '../../../static/pgcny.jpg'
import travelogSVG from '../../../static/travelog.jpg'
import { AWS_S3_PREFIX, MEDIUM_LINK } from "@/utils/const"

const renderImage = {
    more_bg_1: AWS_S3_PREFIX + 'more-bg-1.webp',
    more_bg_2: AWS_S3_PREFIX + 'more-bg-2.webp'
}

const More = () => {
    return(
        <MoreContainer>
            <MoreInnerContainer>
                <div className="row">
                    <MoreCardOuter>
                        <SingleMoreCard>
                        <BlackOverlapped/>
                            <Image className="position-absolute" src={renderImage.more_bg_1} alt="My other works" width={200} height={200}/>
                            <MoreCardContent>
                                <H4>My other works</H4>
                                <Button>Visit more</Button>
                                <h3 className="display-1 white position-absolute">01</h3>
                            </MoreCardContent>
                        </SingleMoreCard>
                    </MoreCardOuter>
                    <MoreCardOuter>
                        <SingleMoreCard>
                            <BlackOverlapped/>
                            <Image className="position-absolute" src={renderImage.more_bg_2} alt="My tech blog" width={200} height={200}/>
                            <MoreCardContent>
                                <H4>My tech blog</H4>
                                <Button href={MEDIUM_LINK} target="_blank">tengweiherr.medium.com</Button>
                                <h3 className="display-1 white position-absolute">02</h3>
                            </MoreCardContent>
                        </SingleMoreCard>
                    </MoreCardOuter>
                </div>
            </MoreInnerContainer>
        </MoreContainer>
    )
}

export default More