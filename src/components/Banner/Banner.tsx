import bannerAnimating from "@/utils/gsap/banner"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"
import Animation from "./Animation"
import { AniContainer, BannerContainer, BannerSection, IntroContainer } from "./Banner.styled"
import { TextContainer } from "@/utils/styled/common"

const Banner = () => {

    const aniRef = useRef<HTMLDivElement>(null)
    const sliderTL = useRef<GSAPTimeline>()

    useEffect(()=>{

        let ctx = gsap.context(()=>{

            bannerAnimating(sliderTL)

        },aniRef)

        return () => ctx.revert()

    },[])

    return(
            <BannerSection ref={aniRef}>
                <BannerContainer>
                    <IntroContainer>
                        <TextContainer>
                            <h1 className="name">Teng Wei Herr</h1>
                        </TextContainer>
                    </IntroContainer>
                        <AniContainer>
                            <Animation />
                        </AniContainer>  
                </BannerContainer>
            </BannerSection>
    )
}

export default Banner