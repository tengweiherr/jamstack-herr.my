import animateQuote from '@/utils/gsap/quote'
import gsap from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'
import COLOR from '@/utils/styled/color'
import commonStyles from '@/utils/styles/common.module.css'
import styles from './Quote.module.css'
import { cx } from '@/utils/styles/cx'

const Quote = () => {
  const aniRef = useRef<HTMLDivElement>(null)
  const quoteTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateQuote(quoteTL)
    }, aniRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.quoteSection} ref={aniRef}>
      <div className="quote-1">
        <div
          className={cx(
            'text-container justify-content-center pb-2 w-100 text-center',
            commonStyles.textContainer
          )}
        >
          <h2>Software Engineer.</h2>
        </div>
        <div
          className={cx(
            'text-container justify-content-center pb-2 w-100 text-center',
            commonStyles.textContainer
          )}
        >
          <p>
            <span style={{ fontWeight: 600, color: COLOR.CYAN }}>@deprecated</span>{' '}
            motion graphic designer and photographer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Quote
