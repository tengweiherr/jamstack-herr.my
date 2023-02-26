import gsap from "gsap"
import { MutableRefObject } from "react";

const bannerAnimating = (sliderTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    const scrollTriggerConfig = {
        trigger: '.ani-container',
        start: 'top 20%',
        end: '+=350',
        scrub: 1,
        toggleActions: 'play complete complete complete'
    }

    sliderTL.current = gsap.timeline({
        scrollTrigger: {
        trigger: ".banner",
        start: "top bottom"
        }
    })
    .from(".banner h1.name", {
        y: 200
    });
    
    gsap.from("#background", {
        scrollTrigger: scrollTriggerConfig,
        scale: 1.16,
        transformOrigin: "bottom center"
    });
    gsap.from("#hair", {
    scrollTrigger: scrollTriggerConfig,
    y: -645,
    rotation: 8,
    transformOrigin: "center center"
    });
    gsap.from("#basketball", {
    scrollTrigger: scrollTriggerConfig,
    y: -170,
    rotation: -80,
    transformOrigin: "center center"
    });
    gsap.from("#camera", {
    scrollTrigger: scrollTriggerConfig,
    y: -80,
    rotation: 20,
    transformOrigin: "center center"
    });
    gsap.from("#music", {
    scrollTrigger: scrollTriggerConfig,
    y: -100,
    x: 70,
    rotation: 30,
    transformOrigin: "center center"
    });
    gsap.from("#_1001", {
    scrollTrigger: scrollTriggerConfig,
    y: -150,
    x: 75,
    rotation: -10,
    transformOrigin: "center center"
    });
    gsap.from("#eth", {
    scrollTrigger: scrollTriggerConfig,
    y: -100,
    x: -65,
    rotation: -30,
    transformOrigin: "center center"
    });
    gsap.from("#ae", {
    scrollTrigger: scrollTriggerConfig,
    y: -160,
    x: -70,
    rotation: -40,
    transformOrigin: "center center"
    });
    gsap.from("#left-eye", {
    scrollTrigger: scrollTriggerConfig,
    y: -9
    });
    gsap.from("#right-eye", {
    scrollTrigger: scrollTriggerConfig,
    y: -9
    });
    gsap.from("#left-eye-brow", {
    scrollTrigger: scrollTriggerConfig,
    y: -453
    });
    gsap.from("#right-eye-brow", {
    scrollTrigger: scrollTriggerConfig,
    y: -453
    });
    gsap.from("#nose", {
    scrollTrigger: scrollTriggerConfig,
    y: -446
    });
    gsap.from("#left-ear", {
    scrollTrigger: scrollTriggerConfig,
    y: -430
    });
    gsap.from("#left-ear-inner", {
    scrollTrigger: scrollTriggerConfig,
    y: -430
    });
    gsap.from("#right-ear", {
    scrollTrigger: scrollTriggerConfig,
    y: -430
    });
    gsap.from("#right-ear-inner", {
    scrollTrigger: scrollTriggerConfig,
    y: -430
    });
    gsap.from("#mouth", {
    scrollTrigger: scrollTriggerConfig,
    scale: 1.4,
    y: -5,
    transformOrigin: "center center"
    });
    gsap.from("#glass", {
    scrollTrigger: scrollTriggerConfig,
    y: -6
    });
    gsap.from("#neck", {
    scrollTrigger: scrollTriggerConfig,
    y: -8
    });

}

export default bannerAnimating




