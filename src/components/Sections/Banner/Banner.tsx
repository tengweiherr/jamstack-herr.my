import animateBanner from '@/utils/gsap/banner'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import BannerAnimation from '../../Molecules/BannerAnimation'
import commonStyles from '@/utils/styles/common.module.css'
import styles from './Banner.module.css'
import { cx } from '@/utils/styles/cx'

const Banner = () => {
  const aniRef = useRef<HTMLDivElement>(null)
  const bannerTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateBanner(bannerTL)
    }, aniRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.bannerSection} ref={aniRef}>
      <div className={cx('container banner-container banner', styles.bannerContainer)}>
        <div className={cx('intro py-5', styles.introContainer)}>
          <div
            className={cx(
              'text-container justify-content-center pb-2 w-100 text-center',
              commonStyles.textContainer
            )}
          >
            <h1 className="name" style={{ opacity: 0 }}>
              Teng Wei Herr
            </h1>
          </div>
        </div>
        <div className={cx('ani-container', styles.aniContainer)}>
          <BannerAnimation />
        </div>
      </div>
    </section>
  )
}

export default Banner
