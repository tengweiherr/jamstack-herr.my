import gsap from "gsap"
import { MutableRefObject } from "react";

const animateIntroduction = (introTL:MutableRefObject<gsap.core.Timeline | undefined>, skillsTL:MutableRefObject<gsap.core.Timeline | undefined>) => {


    const scrollTriggerConfigForImg = { 
        trigger: ".about-me", 
        start: "top 70%", 
        end: "bottom top", 
        scrub: 1, 
        toggleActions: "play complete complete complete" 
    }

    gsap.fromTo(".layer-1 img", {
        scrollTrigger: scrollTriggerConfigForImg,
        y: 120
    },{
        scrollTrigger: scrollTriggerConfigForImg,
        y: 0
    });

    gsap.fromTo(".layer-2 img", {
        scrollTrigger: scrollTriggerConfigForImg,
        y: 250
    },{
        scrollTrigger: scrollTriggerConfigForImg,
        y: 0
    });

    const scrollTriggerConfigForHeading = { 
        trigger: ".introducing h2.display-1", 
        start: "top bottom", 
        end: "+=200", 
        scrub: 1, 
        toggleActions: "play complete complete complete" 
    }

    gsap.fromTo(".introducing h2.display-1", {
        scrollTrigger: scrollTriggerConfigForHeading,
        y: 50
    },{
        scrollTrigger: scrollTriggerConfigForHeading,
        y: 0
    });

    introTL.current = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-me",
            start: "top 70%"
        }
    })
    .fromTo(".about-me .text-container h5", {
        y: 120
    },{
        y: 0
    }, "-=0.2")
    .fromTo(".about-me .text-container p", {
        y: 120,
        stagger: 0.3
    },{
        y: 0,
        stagger: 0.3
    }, "-=0.4");


    skillsTL.current = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%"
        }
    })
    .fromTo(".skills .skillsListContainer li", {
        x: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.2
    },{
        x: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.2
    }, "-=0.4");

}

export default animateIntroduction




