import AwardWinningBanner from "@/components/Molecules/AwardWinningBanner"
import { AWS_S3_PREFIX, ICON } from "@/utils/const"
import animateSlider from "@/utils/gsap/slider"
import { Button, SeperateLine, TextContainer } from "@/utils/styled/common"
import { ButtonContainer } from "@/utils/styled/common.styled"
import { Project } from "@/utils/types"
import gsap from "gsap/all"
import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { H2, H3, HighlightImgContainer, HighlightSection, HorizontalContainer, HoverIconBG, HoverIconContainer, RoleTools, Slide, SlideInner, SliderContainer } from "./Highlight.styled"

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
          return a.priority - b.priority;
        });

        setHighlightedProjects(projects)

      }

    },[projects])

    useLayoutEffect(()=>{

      let ctx:gsap.Context|undefined = undefined

      const shouldStartAnimation = highlightedProjects.length !== 0

      if(shouldStartAnimation){
      
          ctx = gsap.context(()=>{
            animateSlider(sliderTL, setWrapperClass, lineWidth, setLineWidth)
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
            <SeperateLine width={lineWidth||'36%'}/>
          </TextContainer>
          <SliderContainer>
            <HorizontalContainer className={wrapperClass}>
              <>
              {highlightedProjects?.map((item, index)=>(
                <Slide id={`item-${index}`} key={`item-${index}`}>
                  {item.awardWinning && 
                    <AwardWinningBanner size='md'/>
                  }
                  <HighlightImgContainer style={{background:`url(${AWS_S3_PREFIX}${item.image}) no-repeat`}}>
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
                      <h4>My other projects</h4>
                      <Button href="/projects" aria-label="My projects" className="cyan read-more">Visit more</Button>
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