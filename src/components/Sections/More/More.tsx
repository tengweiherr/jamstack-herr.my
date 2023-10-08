import { Button } from '@/utils/styled/common.styled'
import Image from 'next/image'
import {
  BlackOverlapped,
  H4,
  MoreCardContent,
  MoreCardOuter,
  MoreContainer,
  MoreInnerContainer,
  SingleMoreCard,
} from './More.styled'
import { AWS_S3_PREFIX } from '@/utils/const'

const renderImage = {
  more_bg_1: AWS_S3_PREFIX + 'more-bg-1.webp',
  more_bg_2: AWS_S3_PREFIX + 'more-bg-2.webp',
}

const More = () => {
  return (
    <MoreContainer>
      <MoreInnerContainer>
        <div className="row">
          <MoreCardOuter>
            <SingleMoreCard>
              <BlackOverlapped />
              <Image
                className="position-absolute"
                src={renderImage.more_bg_1}
                alt="My other works"
                width={200}
                height={200}
              />
              <MoreCardContent>
                <H4>Other Projects</H4>
                <Button href="/projects">Visit More</Button>
                <h3 className="display-1 white position-absolute">01</h3>
              </MoreCardContent>
            </SingleMoreCard>
          </MoreCardOuter>
          <MoreCardOuter>
            <SingleMoreCard>
              <BlackOverlapped />
              <Image
                className="position-absolute"
                src={renderImage.more_bg_2}
                alt="My tech blog"
                width={200}
                height={200}
              />
              <MoreCardContent>
                <H4>Tech Blog</H4>
                <Button href="/techblog">Read More</Button>
                <h3 className="display-1 white position-absolute">02</h3>
              </MoreCardContent>
            </SingleMoreCard>
          </MoreCardOuter>
        </div>
      </MoreInnerContainer>
    </MoreContainer>
  )
}

export default More
