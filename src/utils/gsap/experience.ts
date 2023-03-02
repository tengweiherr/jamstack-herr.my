import gsap from "gsap"
import { MutableRefObject } from "react";

const animateExperience = (expTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    gsap.from(".experience .text-container h2.display-1", {
        scrollTrigger: { trigger: ".experience .text-container h2.display-1", start: "top bottom", end: "+=100", scrub: 1, toggleActions: "play complete complete complete" },
        y: 100
    });
    
    expTL.current = gsap.timeline({
    scrollTrigger: {
        trigger: ".experience",
        start: "top center"
    }
    })
    // .from(".experience .vertical-line", {height:0}, 0)
    .from(".exp", { opacity: 0, stagger: 0.3 }, 0)
    .from(".experience .exp-desc", { x: 100, opacity: 0 }, "-=0.8");

}

export default animateExperience




