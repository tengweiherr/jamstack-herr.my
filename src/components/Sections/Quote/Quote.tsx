import animateQuote from "@/utils/gsap/quote"
import { TextContainer } from "@/utils/styled/common"
import gsap from "gsap/all"
import { useEffect, useLayoutEffect, useRef } from "react"
import { QuoteSection } from "./Quote.styled"

const Quote = () => {

    const aniRef = useRef<HTMLDivElement>(null)
    const quoteTL = useRef<GSAPTimeline>()

    useLayoutEffect(()=>{

        let ctx = gsap.context(()=>{
  
          animateQuote(quoteTL)
  
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

export default Quote