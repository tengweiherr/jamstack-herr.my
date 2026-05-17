import { useLayoutEffect, useRef } from 'react'
import animateIntroduction from '@/utils/gsap/introduction'
import gsap from 'gsap/all'
import { Experience as Exp, ExpExtraProps } from '@/utils/types'
import Experience from '@/components/Sections/Experience'
import commonStyles from '@/utils/styles/common.module.css'
import styles from './Introduction.module.css'
import { cx } from '@/utils/styles/cx'

type IntroductionProps = {
  myDataParagraphs: Array<string>
  exps: Array<Exp & ExpExtraProps>
}

const Introduction = ({ myDataParagraphs, exps }: IntroductionProps) => {
  const aniRef = useRef<HTMLDivElement>(null)
  const introTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    let ctx: gsap.Context | undefined = undefined

    if (myDataParagraphs?.length !== 0) {
      ctx = gsap.context(() => {
        animateIntroduction(introTL)
      }, aniRef)
    }

    return () => {
      ctx?.revert()
    }
  }, [myDataParagraphs?.length])

  return (
    <section className={styles.introductionSection} ref={aniRef}>
      <div className="introducing">
        <div className={cx('about-me', styles.aboutMe)}>
          <div className="container mb-4">
            <div>
              <h2 className="display-1 text-start">@author</h2>
            </div>
          </div>
          <div className="container">
            <div>
              <div className={cx('intro position-relative', styles.introContainer)}>
                <div
                  className={cx(
                    'text-container justify-content-center pb-2 w-100 justity-content-start',
                    commonStyles.textContainer
                  )}
                >
                  <h5 className="name cyan text-start">
                    <strong>Teng Wei Herr</strong>
                  </h5>
                </div>
                <div className={cx('row description pe-5', styles.descriptionContainer)}>
                  {myDataParagraphs?.map((paragraph, index) => (
                    <div
                      className={cx(
                        'text-container justify-content-center pb-2 w-100 mb-3 text-start',
                        commonStyles.textContainer
                      )}
                      key={`paragraph-${index}`}
                    >
                      <p
                        className="mb-0"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Experience exps={exps} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
