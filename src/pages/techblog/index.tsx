import TechblogCardList from '@/components/Molecules/TechblogCardList'
import { fetchAllStories } from '@/utils/api/medium'
import {
  PageSubtitle,
  PageTitle,
  Section,
  TextContainer,
} from '@/utils/styled/common.styled'
import { MediumStory } from '@/utils/types'
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
        <PageTitle>My tech blog</PageTitle>
        <PageSubtitle>
          Where I document what I&apos;ve learn and share them to others.
        </PageSubtitle>
      </TextContainer>
      <TechblogCardList mediumStories={mediumStories} />
    </Section>
  )
}

export default Techblog
