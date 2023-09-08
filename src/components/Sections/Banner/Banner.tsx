import animateBanner from '@/utils/gsap/banner'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import BannerAnimation from '../../Molecules/BannerAnimation'
import {
  AniContainer,
  BannerContainer,
  BannerSection,
  IntroContainer,
} from './Banner.styled'
import { TextContainer } from '@/utils/styled/common'

const Banner = () => {
  const aniRef = useRef<HTMLDivElement>(null)
  const bannerTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateBanner(bannerTL)
    }, aniRef)

    return () => ctx.revert()
  }, [])

  return (
    <BannerSection ref={aniRef}>
      <BannerContainer>
        <IntroContainer>
          <TextContainer className="text-center">
            <h1 className="name" style={{ opacity: 0 }}>
              Teng Wei Herr
            </h1>
          </TextContainer>
        </IntroContainer>
        <AniContainer>
          <BannerAnimation />
        </AniContainer>
      </BannerContainer>
    </BannerSection>
  )
}

export default Banner
