import TechblogCardList from '@/components/Molecules/TechblogCardList'
import { MEDIUM_LINK } from '@/utils/const'
import commonStyles from '@/utils/styles/common.module.css'
import { cx } from '@/utils/styles/cx'
import Link from 'next/link'

export const Articles = () => {
  return (
    <section className='my-5'>
    <div className="container">
      <div
        className={cx(
          'text-container justify-content-center pb-2 w-100 mb-5',
          commonStyles.textContainer
        )}
      >
        <h2 style={{
          fontSize: 60,
          fontWeight: 600,
          position: "relative",
        }}>@published</h2>
      </div>
      <TechblogCardList mediumStories={[
          {
            title: "TIL from building the simplest LLM task",
            subtitle: "What started as a simple API call to LLM ended up becoming a lesson in rate limiting, cost optimization, async processing trade-offs, and workflow orchestration.",
            date: "2026-04-12",
            link: "https://www.notion.so/Lessons-from-the-Simplest-LLM-Task-340219683416805ca39ac02ff8e97f98"
          },
          {
            title: "React Internals: Which useEffect runs first?",
            subtitle: "It's not particularly obvious, but a child's useEffect will run before a parent's will. Let's look at why.",
            date: "2025-04-28",
            link: "https://frontendmasters.com/blog/react-internals-which-useeffect-runs-first"
          },
          {
            title: "Adaptive Video Streaming With Dash.js In React",
            subtitle: "A complete guide to build a ABR video player in React starting with a MP4 video",
            date: "2025-03-27",
            link: "https://www.smashingmagazine.com/2025/03/adaptive-video-streaming-dashjs-react"
          },
          {
            title: "Next.js SSG: Caching Third-Party Assets for Zero Runtime Cost",
            subtitle: "Minimizing Bandwidth Usage by Serving Third-Party Assets Statically in Next.js",
            date: "2024-09-09",
            link: "https://levelup.gitconnected.com/next-js-ssg-caching-third-party-assets-for-zero-runtime-cost-c99de7a36cd3?sk=6ff4f653d63606e0d8ae582891dd1b15"
          },
          {
            title: "How to Identify Web Performance Bottlenecks Using a Browser Profiler",
            subtitle: "A Step-by-Step Guide to Diagnosing Performance Issues in Web Applications",
            date: "2024-08-20",
            link: "https://levelup.gitconnected.com/how-to-identify-web-performance-bottlenecks-using-a-browser-profiler-0f92426d3a6e?sk=fdb075a4993fb9baa1e41af032ad4277"
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
          },
          {
            title: "Next.js Middleware: Server-side A/B Testing for Enhanced Performance",
            subtitle: "Server-side Feature Flagging via Firebase Remote Config Using Next.js Middleware — With Optimal Performance",
            date: "2023-08-27",
            link: "https://levelup.gitconnected.com/next-js-middleware-server-side-a-b-testing-for-enhanced-performance-f13ed0aa0b40?sk=d5375beaa554e3122818c1d3a6eac53d"
          }
        ]} />
        <p className='mt-3'>
          View more at{' '}
          <Link
            href={MEDIUM_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
            data-text='Medium'
            style={{ fontWeight: 500 }}
          >
            Medium
            <svg
              className='external-arrow'
              width='12'
              height='12'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M7 17L17 7' />
              <path d='M8 7h9v9' />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  )
}