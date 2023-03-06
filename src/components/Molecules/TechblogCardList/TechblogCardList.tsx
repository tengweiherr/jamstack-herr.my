import { NoContentWrapper } from "@/utils/styled/common.styled"
import { MediumRSSRes, MediumStory } from "@/utils/types"
import { useEffect, useState } from "react"
import Loading from "../Loading"
import { StoriesWrapper, StoryBottomLine, StoryLeftColumn, StoryRightColumn, StoryRow } from "./TechblogCardList.styled"

type TechblogProps = {
    mediumRSSResInString: string
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

const TechblogCardList = ({mediumRSSResInString}:TechblogProps) => {

    const [stories, setStories] = useState<Array<MediumStory>>([])

    useEffect(() => {

        if(mediumRSSResInString && stories.length === 0) {
            const mediumRSSResInJson:MediumRSSRes = JSON.parse(mediumRSSResInString)
            setStories(mediumRSSResInJson.items)
        }
    
    }, [mediumRSSResInString, stories])

    if(stories.length === 0) return (
        <NoContentWrapper>
            <span>No blogs found.</span>
        </NoContentWrapper>
    )
    
    return (
        <StoriesWrapper>
            {stories.map((item,index)=>(
                <div key={`medium-story-${index}`} >
                    <StoryRow id={`medium-story-${item.id}`} onClick={()=>window.open(item.link,'_blank')}>
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
                </div>
            ))}
        </StoriesWrapper>
    )
}

export default TechblogCardList