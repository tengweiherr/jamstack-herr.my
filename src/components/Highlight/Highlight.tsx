import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "@/utils/const"
import animateSlider from "@/utils/gsap/slider"
import { Button, SeperateLine, TextContainer } from "@/utils/styled/common"
import { ButtonContainer } from "@/utils/styled/common.styled"
import gsap from "gsap/all"
import Image from "next/image"
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react"
import GithubSVG from '../../static/github.svg'
import { AwardInner, AwardWrapper, H2, H3, HighlightImgContainer, HighlightSection, HorizontalContainer, HoverIconBG, HoverIconContainer, RoleTools, Slide, SlideInner, SliderContainer } from "./Highlight.styled"

type Project = {
  title: string
  role: string
  tools: string
  description: string
  githubLink: string
  projectLink?: string
  awardWinning: boolean
  highlighted: boolean
  image: {
    url: string
    width: number
    height: number
  }
}

type HighlightProps = {
  projects?: Array<Project>
}

const Highlight = ({projects}:HighlightProps) => {

    const aniRef = useRef<HTMLDivElement>(null)

    const [wrapperClass, setWrapperClass] = useState<string>('')
    const [lineWidth, setLineWidth] = useState<string>('')

    useEffect(()=>{

      let ctx = gsap.context(()=>{

        animateSlider(setWrapperClass, setLineWidth)

        projects?.sort(function(a,b){
          const aIndex = a.awardWinning ? 1 : 0
          const bIndex = b.awardWinning ? 1 : 0
          return bIndex - aIndex;
        });

      },aniRef)

      return () => ctx.revert()

    },[projects])

    return (
      <HighlightSection ref={aniRef}>
        <TextContainer className="container d-flex align-items-center justify-content-start mb-3 overflow-hidden">
          <H2>
            <span>Works I&apos;m proud of</span>
          </H2>
          <SeperateLine width={lineWidth||'25%'}/>
        </TextContainer>
        <SliderContainer>
          <HorizontalContainer className={wrapperClass}>
            <>
            {projects?.map((item, index)=>(
              <Slide id={`item-${index}`} key={`item-${index}`}>
                {item.awardWinning && 
                  <AwardWrapper>
                    <AwardInner>
                      <h6 className="white">Award Winning</h6>
                    </AwardInner>
                  </AwardWrapper>
                }
                <HighlightImgContainer aria-label={item.image.url}>
                    <HoverIconContainer>
                      <a href={item.githubLink} target="_blank" aria-label="Github">
                        <Image src={GithubSVG} alt="Github" width={20} height={20} />
                      </a>
                    </HoverIconContainer>
                    <HoverIconBG />
                </HighlightImgContainer>
                <SlideInner>
                  <H3>{item.title}</H3>
                    <RoleTools>
                          <p className="mb-0">Role: <strong>{item.role}</strong></p>
                          <p>Tools: <strong>{item.tools}</strong></p>
                    </RoleTools>
                  <p className="description">{item.description}</p>
                  <ButtonContainer>
                    {item.projectLink && 
                      <Button href={item.projectLink} target="_blank" aria-label="ProjectLink" className="cyan read-more">Visit project</Button>
                    }
                    <Button href={item.githubLink} target="_blank" aria-label="Github" className="cyan read-more">Read more on Github</Button>
                  </ButtonContainer>
                </SlideInner>
              </Slide>
            ))}
            </>
            </HorizontalContainer>
          </SliderContainer>
      </HighlightSection>
    )
}

export default Highlight