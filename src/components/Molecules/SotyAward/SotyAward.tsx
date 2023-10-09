import { AWS_S3_PREFIX } from '@/utils/const'
import Image from 'next/image'
import { AwardContainer, AwardLink } from './SotyAward.styled'

const ribbonImage = AWS_S3_PREFIX + 'mwa-soty-ribbon.webp'

const SotyAward = () => {
  return (
    <AwardContainer>
      <AwardLink href="https://www.mwa.my/2023" target="_blank">
        <Image
          src={ribbonImage}
          alt="mwa-soty-ribbon"
          width={68}
          height={100}
          priority
        />
      </AwardLink>
    </AwardContainer>
  )
}

export default SotyAward
