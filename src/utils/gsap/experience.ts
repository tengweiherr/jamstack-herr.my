import gsap from 'gsap'
import { MutableRefObject } from 'react'

const animateExperience = (
  expTL: MutableRefObject<gsap.core.Timeline | undefined>
) => {
  gsap.to('.experience .text-container h2.display-1', {
    scrollTrigger: {
      trigger: '.experience .text-container h2.display-1',
      start: 'top bottom',
      end: '+=100',
      scrub: 1,
      toggleActions: 'play complete complete complete',
    },
    y: -100,
  })

  expTL.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: '.experience',
        start: 'top 70%',
      },
    })
    .fromTo(
      '.exp',
      { opacity: 0, stagger: 0.3 },
      { opacity: 1, stagger: 0.3 },
      0
    )
}

export default animateExperience
