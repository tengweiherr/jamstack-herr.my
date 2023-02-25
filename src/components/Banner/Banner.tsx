import { TextContainer } from "@/utils/styled/common.styled"
import Animation from "./Animation"
import { AniContainer, BannerContainer, BannerSection, IntroContainer } from "./Banner.styled"

const Banner = () => {
    return(
        <BannerSection>
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