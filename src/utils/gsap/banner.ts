import gsap from "gsap"
import { MutableRefObject } from "react";

const animateBanner = (bannerTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    const scrollTriggerConfig = {
        trigger: '.ani-container',
        start: 'top 20%',
        end: '+=450',
        scrub: 1,
        toggleActions: 'play complete complete complete'
    }

    const scrollTriggerConfigForBannerTL = {
        trigger: ".banner",
        start: "top bottom"
    }

    bannerTL.current = gsap.timeline({
        scrollTrigger: scrollTriggerConfigForBannerTL
    })
    .to(".banner h1.name", {
        y: -200,
        opacity: 1
    });
    
    gsap.fromTo("#background", {
        scrollTrigger: scrollTriggerConfig,
        scale: 1.16,
        transformOrigin: "bottom center"
    },{
        scrollTrigger: scrollTriggerConfig,
        scale: 1,
        transformOrigin: "bottom center"
    });

    gsap.fromTo("#hair", {
        scrollTrigger: scrollTriggerConfig,
        y: -645,
        rotation: 8,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96,
        rotation: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#basketball", {
        scrollTrigger: scrollTriggerConfig,
        y: -170,
        rotation: -80,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0,
        rotation: 0,
        transformOrigin: "center center"
    });
    
    gsap.fromTo("#camera", {
        scrollTrigger: scrollTriggerConfig,
        y: -80,
        rotation: 20,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0,
        rotation: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#music", {
        scrollTrigger: scrollTriggerConfig,
        y: -100,
        x: 70,
        rotation: 30,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#_1001", {
        scrollTrigger: scrollTriggerConfig,
        y: -150,
        x: 75,
        rotation: -10,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#eth", {
        scrollTrigger: scrollTriggerConfig,
        y: -100,
        x: -65,
        rotation: -30,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#ae", {
        scrollTrigger: scrollTriggerConfig,
        y: -160,
        x: -70,
        rotation: -40,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#left-eye", {
        scrollTrigger: scrollTriggerConfig,
        y: -10
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0
    });

    gsap.fromTo("#right-eye", {
        scrollTrigger: scrollTriggerConfig,
        y: -10
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0
    });
    
    gsap.fromTo("#left-eye-brow", {
        scrollTrigger: scrollTriggerConfig,
        y: -453
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });

    gsap.fromTo("#right-eye-brow", {
        scrollTrigger: scrollTriggerConfig,
        y: -453
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });

    gsap.fromTo("#nose", {
        scrollTrigger: scrollTriggerConfig,
        y: -446
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });
    
    gsap.fromTo("#left-ear", {
        scrollTrigger: scrollTriggerConfig,
        y: -430
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });
    
    gsap.fromTo("#left-ear-inner", {
        scrollTrigger: scrollTriggerConfig,
        y: -430
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });

    gsap.fromTo("#right-ear", {
        scrollTrigger: scrollTriggerConfig,
        y: -430
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });

    gsap.fromTo("#right-ear-inner", {
        scrollTrigger: scrollTriggerConfig,
        y: -430
    },{
        scrollTrigger: scrollTriggerConfig,
        y: -437.96
    });

    gsap.fromTo("#mouth", {
        scrollTrigger: scrollTriggerConfig,
        scale: 1.4,
        y: -5,
        transformOrigin: "center center"
    },{
        scrollTrigger: scrollTriggerConfig,
        scale: 1,
        y: 0,
        transformOrigin: "center center"
    });

    gsap.fromTo("#glass", {
        scrollTrigger: scrollTriggerConfig,
        y: -6
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0
    });

    gsap.fromTo("#neck", {
        scrollTrigger: scrollTriggerConfig,
        y: -8
    },{
        scrollTrigger: scrollTriggerConfig,
        y: 0
    });

}

export default animateBanner




