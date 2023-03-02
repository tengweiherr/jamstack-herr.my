import gsap from "gsap"
import { MutableRefObject } from "react";

const animateNavbar = (navbarTL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    const scrollTriggerConfig = {
      trigger: ".navbar",
      start: "top bottom"
    }

    navbarTL.current = gsap.timeline({
      scrollTrigger: scrollTriggerConfig
    })
    .from(".nav-item", {
        y: -100,
        opacity: 0,
        stagger: 0.1
    })
    .from("a.logo", {
        y: -100,
        opacity: 0
    }, "-=0.2");

}

export default animateNavbar




