import gsap from "gsap"
import { MutableRefObject } from "react";

const animateIntroduction = (introTL:MutableRefObject<gsap.core.Timeline | undefined>, skillsTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    gsap.from(".layer-1 img", {
        scrollTrigger: { 
            trigger: ".about-me", 
            start: "top 70%", 
            end: "bottom top", 
            scrub: 1, 
            toggleActions: "play complete complete complete" 
        },
        y: 120
    });

    gsap.from(".layer-2 img", {
        scrollTrigger: { 
            trigger: ".about-me", 
            start: "top 70%", 
            end: "bottom top", 
            scrub: 1, 
            toggleActions: "play complete complete complete" 
        },
        y: 250
    });

    gsap.from(".introducing h2.display-1", {
        scrollTrigger: { 
            trigger: ".introducing h2.display-1", 
            start: "top bottom", 
            end: "+=200", 
            scrub: 1, 
            toggleActions: "play complete complete complete" 
        },
        y: 50
    });

    introTL.current = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-me",
            start: "top 70%"
        }
    })
    .from(".about-me .text-container h5", {
        y: 120
    }, "-=0.2")
    .from(".about-me .text-container p", {
        y: 120,
        stagger: 0.3
    }, "-=0.4");


    skillsTL.current = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%"
        }
    })
    .from(".skills .description li", 0.2, {
        x: 50,
        opacity: 0,
        stagger: 0.08
    }, "-=0.4");

}

export default animateIntroduction




