import { fetchAllStories } from "@/utils/api/medium"
import { PageSubtitle, PageTitle, Section, TextContainer } from "@/utils/styled/common.styled"
import { MediumRSSRes, MediumStory } from "@/utils/types"
import { useEffect, useState } from "react"
import { StoriesWrapper, StoryBottomLine, StoryLeftColumn, StoryRightColumn, StoryRow } from "./techblog.styled"

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

const renderDate = (dateInString: string) => {
    const dateObj = new Date(dateInString)
    const dateArray = dateObj.toDateString().split(' ')
    const day = dateArray[1]
    const month = dateArray[2]
    const year = dateArray[3]
    return day + ' ' + month + ', ' + year
}

const renderSubtitle = (content:string) => {
    const firstSplit = content.split('<h4>')[1]
    const secondSplit = firstSplit ? firstSplit.split('</h4>')[0] : firstSplit
    return secondSplit
}


const Techblog = ({mediumRSSResInString}:TechblogProps) => {

    const [stories, setStories] = useState<Array<MediumStory>>([])

    useEffect(() => {

        if(mediumRSSResInString && stories.length === 0) {
            const mediumRSSResInJson:MediumRSSRes = JSON.parse(mediumRSSResInString)
            setStories(mediumRSSResInJson.items)
        }
    
    }, [mediumRSSResInString, stories])
    
    return (
        <Section className='py-5'>
            <TextContainer className='mx-3'>
                <PageTitle>My tech blog</PageTitle>
                <PageSubtitle>Where I document what I&apos;ve learn and share them to others.</PageSubtitle>
                <StoriesWrapper>
                {stories.map((item,index)=>(
                    <>
                    <StoryRow key={`medium-story-${item.id}`} onClick={()=>window.open(item.link,'_blank')}>
                        <StoryLeftColumn>
                            <span>{renderDate(item.published)}</span>
                        </StoryLeftColumn>
                        <StoryRightColumn>
                            <h5>{item.title}</h5>
                            <p>{renderSubtitle(item.content)}</p>
                            {item.category.map((tool,index)=>(
                                <span className='tool' key={`tool-${index}`}>{tool}</span>
                            ))}
                        </StoryRightColumn>
                    </StoryRow>
                    {stories.length !== (index+1) && 
                        <StoryBottomLine />
                    }
                    </>
                ))}
                </StoriesWrapper>

            </TextContainer>
        </Section>
    )
}

export default Techblog