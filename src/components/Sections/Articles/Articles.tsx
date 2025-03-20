import TechblogCardList from '@/components/Molecules/TechblogCardList'
import { MEDIUM_LINK } from '@/utils/const'
import animateExperience from '@/utils/gsap/experience'
import COLOR from '@/utils/styled/color'
import { TextContainer } from '@/utils/styled/common.styled'
import type { Experience } from '@/utils/types'
import gsap from 'gsap/all'
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'

export const Articles = () => {
  // const aniRef = useRef<HTMLDivElement>(null)
  // const expTL = useRef<GSAPTimeline>()

  // const [activeIndex, setActiveIndex] = useState<number>(0)

  // useLayoutEffect(() => {
  //   let ctx: gsap.Context | undefined = undefined

  //   const shouldStartAnimation = exps.length !== 0

  //   if (shouldStartAnimation) {
  //     ctx = gsap.context(() => {
  //       animateExperience(expTL)
  //     }, aniRef)
  //   }

  //   return () => {
  //     ctx ? ctx.revert() : null
  //   }
  // }, [exps.length])

  return (
    <>
      <section className='my-5'>
      <div className="container">
        <TextContainer className="mb-5">
          <h2 style={{
            fontSize: 60,
            fontWeight: 600,
            position: "relative",
          }}>@published</h2>
        </TextContainer>
        <TechblogCardList mediumStories={[
            {
              title: "Next.js SSG: Caching Third-Party Assets for Zero Runtime Cost",
              subtitle: "Minimizing Bandwidth Usage by Serving Third-Party Assets Statically in Next.js",
              date: "2024-09-09",
              link: "https://levelup.gitconnected.com/next-js-ssg-caching-third-party-assets-for-zero-runtime-cost-c99de7a36cd3?sk=6ff4f653d63606e0d8ae582891dd1b15"
            },
            {
              title: "Chrome’s Performance Panel 101: What’s Going on in Your JavaScript Main Thread",
              subtitle: "Learn to use the profiler in Chrome’s Performance Panel with my favourite settings and some useful tips",
              date: "2024-05-03",
              link: "https://levelup.gitconnected.com/chromes-performance-panel-101-what-s-going-on-in-your-javascript-main-thread-da1bb0c6c298?sk=2156d5583abd1d2b553f614da7c14c76"
            },
            {
              title: "Animated Bar Chart with D3.js and React",
              subtitle: "Learn the underlying concepts and how to plot charts with D3.js and React",
              date: "2024-01-29",
              link: "https://levelup.gitconnected.com/animated-bar-chart-with-d3-js-and-react-54779f19d333?sk=1c0f3bf92b55fe5486d3f066508bb83a"
            }
          ]} />
          <p className='mt-3'>View more at <Link href={MEDIUM_LINK} target='_blank' style={{
            color: COLOR.BLACK,
            textDecorationColor: COLOR.BLACK
          }}>Medium</Link></p>
        </div>
      </section>
    </>
  )
}