import { TextContainer } from '@/utils/styled/common.styled'
import {
  AboutMe,
  DescriptionContainer,
  IntroContainer,
  IntroductionSection,
  SkillsContainer,
  SkillsList,
  SkillsListContainer,
} from '././Introduction.styled'
import { useLayoutEffect, useRef } from 'react'
import animateIntroduction from '@/utils/gsap/introduction'
import gsap from 'gsap/all'
import { MyData, MyDataSkills } from '@/utils/types'
import { AWS_CLOUDFRONT_PREFIX } from '@/utils/const'

type IntroductionProps = {
  myDataParagraphs: Array<string>
  myDataSkills: MyDataSkills
}

const renderImage = (myData: MyData) => {
  return {
    image1: AWS_CLOUDFRONT_PREFIX + myData.image1,
    image2: AWS_CLOUDFRONT_PREFIX + myData.image2,
  }
}

const Introduction = ({
  myDataParagraphs,
  myDataSkills,
}: IntroductionProps) => {
  const aniRef = useRef<HTMLDivElement>(null)
  const introTL = useRef<GSAPTimeline>()
  const skillsTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    let ctx: gsap.Context | undefined = undefined

    const shouldStartAnimation =
      myDataSkills.part_1?.length !== 0 &&
      myDataSkills.part_2?.length !== 0 &&
      myDataParagraphs?.length !== 0

    if (shouldStartAnimation) {
      ctx = gsap.context(() => {
        animateIntroduction(introTL, skillsTL)
      }, aniRef)
    }

    return () => {
      ctx ? ctx.revert() : null
    }
  }, [
    myDataParagraphs?.length,
    myDataSkills.part_1?.length,
    myDataSkills.part_2?.length,
  ])

  return (
    <IntroductionSection ref={aniRef}>
      <div className="introducing">
        <TextContainer className="container">
          <h2 className="display-1 text-start">@author</h2>
        </TextContainer>
        <AboutMe>
          <div className="container">
            <div>
              <IntroContainer>
                <TextContainer className="justity-content-start">
                  <h5 className="name cyan text-start">
                    <strong>Teng Wei Herr</strong>
                  </h5>
                </TextContainer>
                <DescriptionContainer>
                  <>
                    {myDataParagraphs?.map((paragraph, index) => (
                      <TextContainer
                        className="mb-3 text-start"
                        key={`paragraph-${index}`}
                      >
                        <p
                          className="mb-0"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        ></p>
                      </TextContainer>
                    ))}
                  </>
                </DescriptionContainer>
              </IntroContainer>
            </div>

            <SkillsContainer>
              <div>
                <TextContainer>
                  <h5 className="cyan">
                    <strong>Tech I&apos;ve worked with: </strong>
                  </h5>
                </TextContainer>
                <SkillsListContainer>
                  <SkillsList>
                    {myDataSkills.part_1?.map((item, index) => (
                      <li key={`skill-${index}`}>{item}</li>
                    ))}
                  </SkillsList>
                  <SkillsList>
                    {myDataSkills.part_2?.map((item, index) => (
                      <li key={`skill-${index}`}>{item}</li>
                    ))}
                  </SkillsList>
                </SkillsListContainer>
              </div>
            </SkillsContainer>
          </div>
        </AboutMe>
      </div>
    </IntroductionSection>
  )
}

export default Introduction
