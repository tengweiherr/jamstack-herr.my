import gsap from "gsap"
import { MutableRefObject } from "react";

const animateExperience = (expTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    gsap.to(".experience .text-container h2.display-1", {
        scrollTrigger: { trigger: ".experience .text-container h2.display-1", start: "top bottom", end: "+=100", scrub: 1, toggleActions: "play complete complete complete" },
        y: -100
    });
    
    expTL.current = gsap.timeline({
    scrollTrigger: {
        trigger: ".experience",
        start: "top center"
    }
    })
    // .from(".experience .vertical-line", {height:0}, 0)
    .fromTo(".exp", { opacity: 0, stagger: 0.3 },{ opacity: 1, stagger: 0.3 }, 0)
    // .fromTo(".experience .exp-desc", { x: 100, opacity: 0 },{ x: 0, opacity: 1 }, "-=1");

}

export default animateExperience




