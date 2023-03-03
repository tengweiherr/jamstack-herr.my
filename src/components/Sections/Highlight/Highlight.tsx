import { ICON } from "@/utils/const"
import animateSlider from "@/utils/gsap/slider"
import { Button, SeperateLine, TextContainer } from "@/utils/styled/common"
import { ButtonContainer } from "@/utils/styled/common.styled"
import { Project } from "@/utils/types"
import gsap from "gsap/all"
import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AwardInner, AwardWrapper, H2, H3, HighlightImgContainer, HighlightSection, HorizontalContainer, HoverIconBG, HoverIconContainer, RoleTools, Slide, SlideInner, SliderContainer } from "./Highlight.styled"

type HighlightProps = {
  projects?: Array<Project>
}

const Highlight = ({projects}:HighlightProps) => {

    const aniRef = useRef<HTMLDivElement>(null)
    const sliderTL = useRef<GSAPTimeline>()

    const [wrapperClass, setWrapperClass] = useState<string>('')
    const [lineWidth, setLineWidth] = useState<string>('')

    const [highlightedProjects, setHighlightedProjects] = useState<Array<Project>>([])

    useEffect(()=>{

      if(projects && projects?.length !== 0){

        projects?.sort(function(a,b){
          const aIndex:number = a.awardWinning ? 1 : 0
          const bIndex:number = b.awardWinning ? 1 : 0
          return bIndex - aIndex;
        });

        setHighlightedProjects(projects)

      }

    },[projects])

    useLayoutEffect(()=>{

      let ctx:gsap.Context|undefined = undefined

      const shouldStartAnimation = highlightedProjects.length !== 0

      if(shouldStartAnimation){
      
          ctx = gsap.context(()=>{
            animateSlider(sliderTL, setWrapperClass, setLineWidth)
          },aniRef)

      }

      return () => {
        ctx ? ctx.revert() : null 
    }

    },[highlightedProjects.length])

    return (
      <HighlightSection ref={aniRef}>
        <div className="highlight-inner">
          <TextContainer className="container d-flex align-items-center justify-content-start mb-3 overflow-hidden">
            <H2>
              <span>Works I&apos;m proud of</span>
            </H2>
            <SeperateLine width={lineWidth||'25%'}/>
          </TextContainer>
          <SliderContainer>
            <HorizontalContainer className={wrapperClass}>
              <>
              {highlightedProjects?.map((item, index)=>(
                <Slide id={`item-${index}`} key={`item-${index}`}>
                  {item.awardWinning && 
                    <AwardWrapper>
                      <AwardInner>
                        <h6 className="white">Award Winning</h6>
                      </AwardInner>
                    </AwardWrapper>
                  }
                  <HighlightImgContainer aria-label={item.image}>
                      <HoverIconContainer>
                        <a href={item.githubLink} target="_blank" aria-label="Github">
                          <Image src={ICON.github} alt="Github" width={20} height={20} />
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
                    <p className="description" dangerouslySetInnerHTML={{__html:item.description}}></p>
                    <ButtonContainer>
                      {item.projectLink && 
                        <Button href={item.projectLink} target="_blank" aria-label="ProjectLink" className="cyan read-more">Visit project</Button>
                      }
                      <Button href={item.githubLink} target="_blank" aria-label="Github" className="cyan read-more">Read more on Github</Button>
                    </ButtonContainer>
                  </SlideInner>
                </Slide>
              ))}
                <Slide id='item-last' key='item-last'>
                    <SlideInner className='m-0'>
                      <h4>View more at</h4>
                      <Button aria-label="My projects" className="cyan read-more">My projects</Button>
                    </SlideInner>
                </Slide>
              </>
              </HorizontalContainer>
            </SliderContainer>
          </div>
      </HighlightSection>
    )
}

export default Highlight