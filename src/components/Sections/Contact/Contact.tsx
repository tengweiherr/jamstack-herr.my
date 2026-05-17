import ContactAnimation from '@/components/Molecules/ContactAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import animateContact from '@/utils/gsap/contact'
import gsap from 'gsap/all'
import { ICON } from '@/utils/const'
import commonStyles from '@/utils/styles/common.module.css'
import { cx } from '@/utils/styles/cx'

const Contact = () => {
  const aniRef = useRef<HTMLDivElement>(null)
  const catTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateContact(catTL)
    }, aniRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="contact" ref={aniRef}>
      <div className="container contact-inner">
        <div className="row">
          <div className="col-lg-6">
            <div className="cat-ani-container position-relative">
              <ContactAnimation />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <div
                className={cx(
                  'text-container justify-content-center pb-2 w-100',
                  commonStyles.textContainer
                )}
              >
                <h2 className="display-1">Get in touch</h2>
              </div>
              <div
                className={cx(
                  'text-container justify-content-center pb-2 w-100',
                  commonStyles.textContainer
                )}
              >
                <p className="description py-2">
                  Drop me a message if you have any questions or just want to
                  say hi. <br />
                  Any collaborations and opportunities are welcomed.
                </p>
              </div>
              <Link
                href="mailto:herrartwork@gmail.com"
                className={cx('button text-center cyan mt-2', commonStyles.button)}
                aria-label="Contact"
              >
                Say Hello
              </Link>
              <div className="social-media-icon row d-flex flex-row justify-content-between align-items-center mt-4">
                <a
                  href="https://www.linkedin.com/in/teng-wei-herr-15a7891a9/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Image
                    src={ICON.linkedIn}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://github.com/tengweiherr"
                  target="_blank"
                  aria-label="Github"
                >
                  <Image
                    src={ICON.github}
                    alt="Github"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://www.behance.net/herrstudio"
                  target="_blank"
                  aria-label="Behance"
                >
                  <Image
                    src={ICON.behance}
                    alt="Behance"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://www.instagram.com/herr_studio/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Image
                    src={ICON.instagram}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
