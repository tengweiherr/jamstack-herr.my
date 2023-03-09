import animateExperience from "@/utils/gsap/experience"
import { TextContainer } from "@/utils/styled/common.styled"
import { Experience } from "@/utils/types"
import gsap from "gsap/all"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

type ExperienceProps = {
    exps: Array<Experience>
}

type ExpExtraProps = {
    startYear: string
    endYear: string
    yearInWorking: string
    monthInWorking: string
}

const correctionForInvalidDate = (date:string) => {
    return date ? new Date(date) : new Date()
}

const getTimeDifference = (firstDate:string, secondDate:string) => {
    const duration = Number(correctionForInvalidDate(firstDate)) - Number(correctionForInvalidDate(secondDate))
    let month = Math.floor(new Date(duration).getTime() / (1000 * 60 * 60 * 24 * 30))
    let year = 0
    if(month >= 12){
      year = Math.floor(month / 12)
      month = month - (year * 12)
    } else year = 0
    return { year, month } 
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

    const [listOfExp, setListOfExp] = useState<Array<Experience & ExpExtraProps>>([])
    const [activeIndex, setActiveIndex] = useState<number>(0)

    useLayoutEffect(() => {
      
        if(exps.length !== 0 && listOfExp.length === 0) {
            let temp = exps.map(item=>{
                const startYear = new Date(item.startTime).getFullYear().toString()
                const endYear = item.endTime ? new Date(item.endTime).getFullYear().toString() : 'Present'
                const { year, month } = getTimeDifference(item.endTime, item.startTime)
                return {...item, 
                    description: item.description, 
                    startYear: startYear,
                    endYear: endYear,
                    yearInWorking: String(year),
                    monthInWorking: String(month),
                }
            })
            temp.sort(function(a,b){
                const aToCompare = correctionForInvalidDate(a.endTime).getTime()
                const bToCompare = new Date(b.endTime).getTime()
                return bToCompare - aToCompare
            });
            setListOfExp(temp)
        }

    }, [exps, listOfExp])
    

    useLayoutEffect(() => {

        let ctx:gsap.Context|undefined = undefined

        const shouldStartAnimation = listOfExp.length !== 0

        if(shouldStartAnimation){
            ctx = gsap.context(()=>{
                animateExperience(expTL)
            },aniRef)
        }

        return () => {
            ctx ? ctx.revert() : null 
        }

    }, [listOfExp.length])

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
                            {listOfExp.map((item, index)=>(
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
                    {listOfExp.map((item,index)=>(
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