import Loading from '@/components/Molecules/Loading'
import { fetchAllStories } from '@/utils/api/medium'
import {
  PageSubtitle,
  PageTitle,
  Section,
  TextContainer,
} from '@/utils/styled/common.styled'
import { MediumStory } from '@/utils/types'
import dynamic from 'next/dynamic'

type TechblogProps = {
  mediumStories?: MediumStory[]
}

export async function getStaticProps() {
  const mediumStories = await fetchAllStories()

  return {
    props: {
      mediumStories,
    },
    revalidate: 3628800,
  }
}

const TechblogCardList = dynamic(
  () => import('../../components/Molecules/TechblogCardList'),
  {
    loading: () => <Loading />,
  }
)

const Techblog = ({ mediumStories }: TechblogProps) => {
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
