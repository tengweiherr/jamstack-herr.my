import { AWS_CLOUDFRONT_PREFIX } from '@/utils/const'
import Image from 'next/image'
import styles from './SotyAward.module.css'

const ribbonImage = AWS_CLOUDFRONT_PREFIX + 'mwa-soty-ribbon.webp'

const SotyAward = () => {
  return (
    <div className={styles.awardContainer}>
      <a
        href="https://www.mwa.my/2023"
        target="_blank"
        tabIndex={-1}
        aria-hidden="true"
        className={styles.awardLink}
      >
        <Image
          src={ribbonImage}
          alt="mwa-soty-ribbon"
          width={68}
          height={100}
          priority
        />
      </a>
    </div>
  )
}

export default SotyAward
