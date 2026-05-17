import animateExperience from '@/utils/gsap/experience'
import type { Experience, ExpExtraProps } from '@/utils/types'
import gsap from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'

type ExperienceProps = {
  exps: Array<Experience & ExpExtraProps>
}

const renderDuration = (year: number, month: number) => {
  let renderYear
  let renderMonth
  if (year && !month) {
    return (renderYear = year + ' ' + (year > 1 ? 'years' : 'year'))
  } else if (year && month) {
    return (renderYear =
      year +
      ' ' +
      (year > 1 ? 'years' : 'year') +
      ' ' +
      month +
      ' ' +
      (month > 1 ? 'months' : 'month'))
  }
  return (renderMonth = month + ' ' + (month > 1 ? 'months' : 'month'))
}

const Experience = ({ exps }: ExperienceProps) => {
  const aniRef = useRef<HTMLDivElement>(null)
  const expTL = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    let ctx: gsap.Context | undefined = undefined

    if (exps.length !== 0) {
      ctx = gsap.context(() => {
        animateExperience(expTL)
      }, aniRef)
    }

    return () => {
      ctx?.revert()
    }
  }, [exps.length])

  const renderStartEndYear = (startYear?: string, endYear?: string) => {
    if (endYear === startYear) {
      return <h6>{endYear}</h6>
    }

    return <h6>{startYear} - {endYear}</h6>
  }

  return (
      <section ref={aniRef}>
        <div className="experience">
          <div>
            <div className="col-sm-12 position-relative">
              <div className="text-container">
                <h5 className="cyan">
                  <strong>Where I&apos;ve worked</strong>
                </h5>
              </div>
            </div>
            <div className="row description">
              <div className="col-lg-12 exp-title">
                <div className="row">
                  <div>
                    {exps.map((item, index) => (
                      <div
                        className={`row exp exp-${index + 1} active`}
                        key={`exp-${index + 1}`}
                      >
                        <div className="col-sm-12">
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '4px',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
                            <h5>{item.role}</h5>
                            <h5>
                              {' '}<span className="exp-at">at</span>{' '}
                              <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                                data-text={item.company}
                              >
                                {item.company}
                                <svg
                                  className="external-arrow"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="M7 17L17 7" />
                                  <path d="M8 7h9v9" />
                                </svg>
                              </a>
                            </h5>
                            </div>
                            {renderStartEndYear(item.startYear, item.endYear)}
                          </div>
                          <div
                            className={`exp-desc exp-desc-${index + 1} mobile`}
                          >
                            <div
                              className={`row exp-desc-inner exp-desc-inner-${
                                index + 1
                              } white`}
                            >
                              <p className="mb-3">
                                {renderDuration(
                                  Number(item.yearInWorking),
                                  Number(item.monthInWorking)
                                )}
                              </p>
                              <ul
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              ></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience
