import Image from "next/image"
import PortraitPhoto from '../../../static/portrait-compressed.jpg'
import LinkedInPhoto from '../../../static/linked-photo.jpg'
import { TextContainer } from "@/utils/styled/common.styled"
import { AboutMe, DescriptionContainer, IntroContainer, IntroductionSection, Parallax } from "./Introduction.styled"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import animateIntroduction from "@/utils/gsap/introduction"
import gsap from "gsap/all"
import { MyData } from "@/utils/types"
import { AWS_S3_PREFIX } from "@/utils/const"

type IntroductionProps = {
    myData: MyData
}

type Skills = {
    part_1?: Array<string>,
    part_2?: Array<string>
}

const renderImage = (myData: MyData) => {
    return {
        image1: AWS_S3_PREFIX + myData.image1,
        image2: AWS_S3_PREFIX + myData.image2
    }
}

const Introduction = ({myData}:IntroductionProps) => {

    const aniRef = useRef<HTMLDivElement>(null)
    const introTL = useRef<GSAPTimeline>()
    const skillsTL = useRef<GSAPTimeline>()

    const [skills, setSkills] = useState<Skills>({
        part_1: [],
        part_2: []
    })

    const [paragraphs, setParagraphs] = useState<Array<string>>()

    useLayoutEffect(()=>{

        const paraArray = [myData.paragraph1]
        if(myData.paragraph2) paraArray.push(myData.paragraph2)
        if(myData.paragraph3) paraArray.push(myData.paragraph3)

        setParagraphs(paraArray)

        if(myData.techStack){
            const middleIndex = Math.ceil(myData.techStack?.length / 2);
            const firstHalf = myData.techStack.slice().splice(0, middleIndex);   
            const secondHalf = myData.techStack.slice().splice(-middleIndex);
            setSkills({
                part_1: firstHalf,
                part_2: secondHalf
            })
        }
  
    },[myData.paragraph1, myData.paragraph2, myData.paragraph3, myData.techStack])

    useLayoutEffect(() => {

        let ctx:gsap.Context|undefined = undefined

        const shouldStartAnimation = skills.part_1?.length !== 0 && skills.part_2?.length !== 0 && paragraphs?.length !== 0

        if(shouldStartAnimation){
            ctx = gsap.context(()=>{
                animateIntroduction(introTL, skillsTL)
            },aniRef)
        }

        return () => {
            ctx ? ctx.revert() : null 
        }

    }, [paragraphs?.length, skills.part_1?.length, skills.part_2?.length])
    

    return (
        <IntroductionSection ref={aniRef}>
            <div className="introducing">
                <TextContainer className='container'>
                    <h2 className="display-1 text-start">Introducing</h2>
                </TextContainer>
                <AboutMe>
                    <div className="container">
                        <div className="row mb-5">
                            <IntroContainer>
                                <TextContainer className='my-4 mt-5 justity-content-start'>
                                    <h5 className="name cyan text-start">
                                        <strong>Teng Wei Herr</strong>
                                    </h5>
                                </TextContainer>
                                    <DescriptionContainer>
                                        <>
                                        {paragraphs?.map((paragraph,index) => (
                                            <TextContainer className='mb-3 text-start' key={`paragraph-${index}`}>
                                                <p className='mb-0' dangerouslySetInnerHTML={{__html:paragraph}}></p>
                                            </TextContainer>
                                        ))}
                                        </>
                                    </DescriptionContainer>
                            </IntroContainer>
                            
                            <Parallax>
                                <div className="layer layer-1">
                                    <Image src={renderImage(myData).image1} width={200} height={200} alt="Teng Wei Herr" />
                                </div>
                                <div className="layer layer-2">
                                    <Image src={renderImage(myData).image2} width={200} height={200} alt="Teng Wei Herr" />
                                </div>
                                <div className="mobile">
                                    <Image src={renderImage(myData).image2} width={200} height={200} alt="Teng Wei Herr" />
                                    <Image className="ipad" src={renderImage(myData).image1} width={200} height={200} alt="Teng Wei Herr" />
                                </div>

                            </Parallax>
                        </div>

                        <div className="row position-relative skills">
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h5 className="cyan"><strong>Tech I&apos;ve worked with: </strong></h5>
                                </div>
                                <div className="row description mt-4 px-3">
                                    <ul className="col-6">
                                        {skills.part_1?.map((item, index)=>(
                                            <li key={`skill-${index}`}>{item}</li>
                                        ))}
                                    </ul>
                                    <ul className="col-6">
                                        {skills.part_2?.map((item, index)=>(
                                            <li key={`skill-${index}`}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutMe>
            </div>
        </IntroductionSection>
    )
}

export default Introduction