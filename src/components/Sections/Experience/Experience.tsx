import animateExperience from '@/utils/gsap/experience'
import COLOR from '@/utils/styled/color'
import { TextContainer } from '@/utils/styled/common.styled'
import type { Experience, ExpExtraProps } from '@/utils/types'
import gsap from 'gsap/all'
import { useLayoutEffect, useRef, useState } from 'react'

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

  const [activeIndex, setActiveIndex] = useState<number>(0)

  useLayoutEffect(() => {
    let ctx: gsap.Context | undefined = undefined

    const shouldStartAnimation = exps.length !== 0

    if (shouldStartAnimation) {
      ctx = gsap.context(() => {
        animateExperience(expTL)
      }, aniRef)
    }

    return () => {
      ctx ? ctx.revert() : null
    }
  }, [exps.length])

  const renderStartEndYear = (startYear?: string, endYear?: string) => {
    if (endYear === startYear) {
      return <h6>{endYear}</h6>
    }

    return <h6>{startYear} - {endYear}</h6>
  }

  return (
    <>
      <section ref={aniRef}>
        <div className="container experience">
          <div>
            <div className="col-sm-12 position-relative">
              <TextContainer className="mb-5">
                <h2 className="display-1">@works</h2>
              </TextContainer>
              <div className="text-container">
                <h5 className="cyan">
                  <strong>Where I&apos;ve worked & volunteered:</strong>
                </h5>
              </div>
            </div>
            <div className="row description mt-4">
              <div className="col-lg-6 exp-title">
                <div className="row">
                  <div>
                    {exps.map((item, index) => (
                      <div
                        className={`row exp exp-${index + 1} ${
                          activeIndex === index && 'active'
                        }`}
                        key={`exp-${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <div className="col-sm-2">
                          <div>
                            {renderStartEndYear(item.startYear, item.endYear)}
                          </div>
                        </div>
                        <div className="col-sm-10">
                          <div style={activeIndex === index ? {
                            borderLeft: '2px solid ' + COLOR.CYAN,
                            paddingLeft: '16px',
                          }: undefined}>
                            <h5 onClick={() => setActiveIndex(index)}>
                              {item.role}
                            </h5>
                            <p>{item.company}</p>
                          </div>
                          <div
                            className={`exp-desc exp-desc-${index + 1} mobile ${
                              activeIndex === index && 'active'
                            }`}
                          >
                            <div
                              className={`row exp-desc-inner exp-desc-inner-${
                                index + 1
                              } white ${activeIndex === index && 'active'}`}
                            >
                              <h5>{item.role}</h5>
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
              <div className="col-sm-6 exp-desc desktop">
                {exps.map((item, index) => (
                  <div
                    className={`row exp-desc-inner exp-desc-inner-${
                      index + 1
                    } white px-3 py-4 ${activeIndex === index && 'active'}`}
                    key={`exp-desc-inner-${index + 1}`}
                  >
                    <h5>{item.role}</h5>
                    <p className="mb-4">
                      {renderDuration(
                        Number(item.yearInWorking),
                        Number(item.monthInWorking)
                      )}
                    </p>
                    <ul
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
