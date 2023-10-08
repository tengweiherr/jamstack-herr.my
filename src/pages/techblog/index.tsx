import TechblogCardList from '@/components/Molecules/TechblogCardList'
import { fetchAllStories } from '@/utils/api/medium'
import { MEDIUM_LINK } from '@/utils/const'
import {
  PageSubtitle,
  PageTitle,
  Section,
  TextContainer,
} from '@/utils/styled/common.styled'
import { MediumStory } from '@/utils/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Techblog = () => {
  const [mediumStories, setMediumStories] = useState<MediumStory[]>()

  useEffect(() => {
    fetchAllStories()
      .then((res) => setMediumStories(res))
      .catch(() => null)
  }, [])

  return (
    <Section className="py-5">
      <TextContainer className="px-3">
        <PageTitle>Tech blog</PageTitle>
        <PageSubtitle>
          Where I document what I&apos;ve learned and share it to others.
          Presently, my{' '}
          <Link className="orange" href={MEDIUM_LINK}>
            Medium
          </Link>{' '}
          platform receives approximately 2,000 monthly views.
        </PageSubtitle>
      </TextContainer>
      <TechblogCardList mediumStories={mediumStories} />
    </Section>
  )
}

export default Techblog
