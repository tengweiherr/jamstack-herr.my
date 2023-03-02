import animateQuote1 from "@/utils/gsap/quote1"
import { TextContainer } from "@/utils/styled/common"
import gsap from "gsap/all"
import { useEffect, useLayoutEffect, useRef } from "react"
import { QuoteSection } from "./Quote1.styled"

const Quote1 = () => {

    const aniRef = useRef<HTMLDivElement>(null)
    const quote1TL = useRef<GSAPTimeline>()

    useLayoutEffect(()=>{

        let ctx = gsap.context(()=>{
  
          animateQuote1(quote1TL)
  
        },aniRef)
  
        return () => ctx.revert()
  
      },[])

    return (
        <QuoteSection ref={aniRef}>
            <div className='quote-1'>
                <TextContainer className='text-center'>
                    <h2>Software Engineer.</h2>
                </TextContainer>
                <TextContainer className='text-center'>
                    <p>Also a motion graphic designer and photographer.</p>
                </TextContainer>
            </div>
        </QuoteSection>
    )
}

export default Quote1