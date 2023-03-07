import gsap from "gsap"
import { Power1 } from "gsap/all";
import { MutableRefObject } from "react";

const animateContact = (catTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    // gsap.to(".contact-inner .text-container h2", {
    //     scrollTrigger: { trigger: ".contact-inner", start: "top 80%", end: "+=200", scrub: 1, toggleActions: "play complete complete complete" },
    //     y: -100
    // });

    // gsap.to(".contact-inner p.description", {
    //     scrollTrigger: { trigger: ".contact-inner", start: "top 80%", end: "+=200", scrub: 1, toggleActions: "play complete complete complete" },
    //     y: -100
    // });

    // gsap.to(".contact-inner .social-media-icon a", {
    //     scrollTrigger: { trigger: ".contact-inner", start: "top 50%", end: "+=150", scrub: 0.1, toggleActions: "play complete complete complete" },
    //     y: -30,
    //     opacity: 1,
    //     stagger: 0.1,
    //     duration: 0.1
    // });
      
    //cat-ani
    catTL.current = gsap.timeline({
        scrollTrigger: {
            trigger: ".cat-ani",
            start: "top bottom",
        },
        repeat: -1, yoyo: true
    })
    .to("#tail", { rotate: 10, transformOrigin: "bottom center", ease: Power1.easeInOut, duration: 1 })
    .to("#cat-nose", { y: -3, x: -1, duration: 1 })
    .to("#body", { scale: 1.05, transformOrigin: "start bottom", duration: 1 }, "-=1")
    .to(".cat-eyes", { y: -2, duration: 1 }, "-=1")
    .to("#cat-head", { rotate: 1, duration: 1 }, "-=1")
    .to(".bulu-right", { x: 3, duration: 1 }, "-=1")
    .to(".bulu-left", { x: -3, duration: 1 }, "-=1")

    gsap.fromTo(".cat-sleeping-2", {
        scrollTrigger: { trigger: ".cat-ani", start: "top bottom", end: "+=600", scrub: 2, toggleActions: "play complete complete complete" },
        scale: 0.7,
        transformOrigin: "45 center"
    },{
        scrollTrigger: { trigger: ".cat-ani", start: "top bottom", end: "+=600", scrub: 2, toggleActions: "play complete complete complete" },
        scale: 1,
        transformOrigin: "45 center"
    });

    gsap.fromTo(".sleeping-z",
        { y: 80, x: 70 },
        { y: 40, x: 50, scale: 0.9, opacity: 0, duration: 2, repeat: -1 }
    );

}

export default animateContact




