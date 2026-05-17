import { TextContainer } from '@/utils/styled/common.styled'
import {
  AboutMe,
  DescriptionContainer,
  IntroContainer,
  IntroductionSection,
} from '././Introduction.styled'
import { useLayoutEffect, useRef } from 'react'
import animateIntroduction from '@/utils/gsap/introduction'
import gsap from 'gsap/all'
import {
  Experience as Exp,
  ExpExtraProps,
  MyData,
  MyDataSkills,
} from '@/utils/types'
import { AWS_CLOUDFRONT_PREFIX } from '@/utils/const'
import Experience from '@/components/Sections/Experience'

type IntroductionProps = {
  myDataParagraphs: Array<string>
  myDataSkills: MyDataSkills
  exps: Array<Exp & ExpExtraProps>
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
  exps,
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
        <AboutMe>
          <div className="container mb-4">
          <div>
            <h2 className="display-1 text-start">@author</h2>
          </div>
          </div>
          <div className="container">
            <div>
              <IntroContainer>
                <TextContainer className="justity-content-start">
                  <h5 className="name cyan text-start">
                    <strong>Teng Wei Herr</strong>
                  </h5>
                </TextContainer>
                <DescriptionContainer>
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
                </DescriptionContainer>
              </IntroContainer>
            </div>
            <div>
              <Experience exps={exps} />
            </div>
          </div>
        </AboutMe>
      </div>
    </IntroductionSection>
  )
}

export default Introduction
