import animateExperience from "@/utils/gsap/experience"
import { TextContainer } from "@/utils/styled/common.styled"
import { Experience, ExpExtraProps } from "@/utils/types"
import gsap from "gsap/all"
import { useLayoutEffect, useRef, useState } from "react"

type ExperienceProps = {
    exps: Array<Experience & ExpExtraProps>
}

const renderDuration = (year:number, month:number) => {
    let renderYear
    let renderMonth
    if(year && !month){
      return renderYear = year + ' ' + (year > 1 ? 'years' : 'year')
    } 
    else if(year && month){
      return renderYear = year + ' ' + (year > 1 ? 'years' : 'year') + ' ' + month + ' ' + (month > 1 ? 'months' : 'month')
    }
    return renderMonth = month + ' ' + (month > 1 ? 'months' : 'month')
}

const Experience = ({exps}:ExperienceProps) => {

    const aniRef = useRef<HTMLDivElement>(null)
    const expTL = useRef<GSAPTimeline>()

    const [activeIndex, setActiveIndex] = useState<number>(0)
    
    useLayoutEffect(() => {

        let ctx:gsap.Context|undefined = undefined

        const shouldStartAnimation = exps.length !== 0

        if(shouldStartAnimation){
            ctx = gsap.context(()=>{
                animateExperience(expTL)
            },aniRef)
        }

        return () => {
            ctx ? ctx.revert() : null 
        }

    }, [exps.length])

    return (
        <>
<section ref={aniRef}>
    <div className="container experience">
        <div className="row">
            <div className="col-sm-12 position-relative">
              <TextContainer className="mb-5">
                <h2 className="display-1">Experience speaks louder.</h2>
              </TextContainer>
                <div className="text-container pt-2">
                    <h5 className="cyan"><strong>Where I&apos;ve worked & volunteered:</strong></h5>
                </div>
            </div>
            <div className="row description mt-4">
                <div className="col-lg-6 exp-title">
                    <div className="row">
                        <div className="col-2">
                            <div className="line vertical-line"></div>
                        </div>
                        <div className="col-10">
                            {exps.map((item, index)=>(
                            <div className={`row exp exp-${index+1} ${activeIndex === index && 'active'}`} 
                                key={`exp-${index+1}`}
                                onClick={()=>setActiveIndex(index)}
                                >
                                <div className="col-sm-3">
                                    <h5>{item.endYear}</h5>
                                </div>
                                <div className="col-sm-9">
                                    <h5 onClick={()=>setActiveIndex(index)}>{item.role}</h5>
                                    <p>{item.company}</p>
                                    <div className={`exp-desc exp-desc-${index+1} mobile ${activeIndex === index && 'active'}`}>
                                        <div className={`row exp-desc-inner exp-desc-inner-${index+1} white ${activeIndex === index && 'active'}`}>
                                            <h5>{item.role}</h5>
                                            <p className="mb-4">{renderDuration(Number(item.yearInWorking),Number(item.monthInWorking))}</p>
                                            <ul dangerouslySetInnerHTML={{__html:item.description}}></ul>
                                        </div>
                                    </div>
                                </div>
                          </div>                                
                            ))}
                        </div>
                    </div>
        
                </div>
                <div className="col-sm-6 exp-desc desktop">
                    {exps.map((item,index)=>(
                  <div className={`row exp-desc-inner exp-desc-inner-${index+1} white p-5 ${activeIndex === index && 'active'}`} key={`exp-desc-inner-${index+1}`}>
                  <h5>{item.role}</h5>
                  <p className="mb-5">{renderDuration(Number(item.yearInWorking),Number(item.monthInWorking))}</p>
                    <ul dangerouslySetInnerHTML={{__html:item.description}}></ul>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Experience