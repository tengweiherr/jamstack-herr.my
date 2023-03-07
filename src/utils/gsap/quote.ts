import gsap from "gsap"
import { MutableRefObject } from "react";

const animateQuote = (quoteTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    const scrollTriggerConfig = {
        trigger: ".quote-1",
        start: "top bottom",
        end: "+=200",
        scrub: 1,
        toggleActions: "play complete complete complete"
    }

    quoteTL.current = gsap.timeline({
        scrollTrigger: scrollTriggerConfig
    })
    .to(".quote-1 h2", {
      y: -50,
      opacity: 1
    })
    .to(".quote-1 p", {
      y: -20,
      opacity: 1
    })

}

export default animateQuote




