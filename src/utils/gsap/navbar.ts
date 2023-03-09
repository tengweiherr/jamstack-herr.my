import gsap from "gsap"
import { MutableRefObject } from "react";

const animateNavbar = (navbarTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    const scrollTriggerConfig = {
      trigger: "nav",
      start: "top 50%"
    }

    navbarTL.current = gsap.timeline({
      scrollTrigger: scrollTriggerConfig
    })
    .to(".nav-item", {
        y: 100,
        opacity: 1,
        stagger: 0.1
    })
    .to("a.logo", {
        y: 100,
        opacity: 1
    }, "-=0.2");

}

export default animateNavbar




