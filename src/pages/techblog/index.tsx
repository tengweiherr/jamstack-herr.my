import Loading from "@/components/Molecules/Loading"
import { fetchAllStories } from "@/utils/api/medium"
import { PageSubtitle, PageTitle, Section, TextContainer } from "@/utils/styled/common.styled"
import dynamic from "next/dynamic"

type TechblogProps = {
    mediumRSSResInString: string
}

export async function getStaticProps() {

    const mediumRSSResInString = await fetchAllStories()
  
    return {
      props: {
        mediumRSSResInString
      },
    }
}

const TechblogCardList = dynamic(() => import('../../components/Molecules/TechblogCardList'), {
    loading: () => <Loading />,
})

const Techblog = ({mediumRSSResInString}:TechblogProps) => {
    
    return (
        <Section className='py-5'>
            <TextContainer className='mx-3'>
                <PageTitle>My tech blog</PageTitle>
                <PageSubtitle>Where I document what I&apos;ve learn and share them to others.</PageSubtitle>
                <TechblogCardList mediumRSSResInString={mediumRSSResInString} />
            </TextContainer>
        </Section>
    )
}

export default Techblog