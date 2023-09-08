import { AwardInner, AwardWrapper } from './AwardWinningBanner.styled'

type AwardWinningBannerProps = {
  size: 'sm' | 'md'
}

const AwardWinningBanner = ({ size }: AwardWinningBannerProps) => {
  return (
    <AwardWrapper className={size}>
      <AwardInner className={size}>
        <span>Award Winning</span>
      </AwardInner>
    </AwardWrapper>
  )
}

export default AwardWinningBanner
