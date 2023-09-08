import { NoContentWrapper } from '@/utils/styled/common.styled'
import { MediumStory } from '@/utils/types'
import {
  StoriesWrapper,
  StoryBottomLine,
  StoryLeftColumn,
  StoryRightColumn,
  StoryRow,
} from './TechblogCardList.styled'
import Skeleton from 'react-loading-skeleton'
import COLOR from '@/utils/styled/color'

type TechblogProps = {
  mediumStories?: MediumStory[]
}

const renderDate = (dateInString: string) => {
  const dateObj = new Date(dateInString)
  const dateArray = dateObj.toDateString().split(' ')
  const day = dateArray[1]
  const month = dateArray[2]
  const year = dateArray[3]
  return day + ' ' + month + ', ' + year
}

const renderSubtitle = (content?: string) => {
  if (content) {
    const firstSplit = content.split('<h4>')[1]
    const secondSplit = firstSplit ? firstSplit.split('</h4>')[0] : firstSplit
    return secondSplit
  }
}

const TechblogCardList = ({ mediumStories }: TechblogProps) => {
  if (!mediumStories || mediumStories.length === 0)
    return (
      <div style={{ marginTop: '4rem' }}>
        <Skeleton
          height={180}
          width="100%"
          baseColor={COLOR.LIGHT_GREY}
          highlightColor={COLOR.WHITE}
          borderRadius="0.4rem"
          count={3}
        />
      </div>
    )

  return (
    <StoriesWrapper>
      {!!mediumStories.length &&
        mediumStories.map((item, index) => (
          <div key={`medium-story-${index}`}>
            <StoryRow
              id={`medium-story-${item.id}`}
              onClick={() => window.open(item.link, '_blank')}
            >
              <StoryLeftColumn>
                <span>{renderDate(item.published)}</span>
              </StoryLeftColumn>
              <StoryRightColumn>
                <h5>{item.title}</h5>
                <p>{renderSubtitle(item.content)}</p>
                {item.category.map((tool, index) => (
                  <span className="tool" key={`tool-${index}`}>
                    {tool}
                  </span>
                ))}
              </StoryRightColumn>
            </StoryRow>
            {mediumStories.length !== index + 1 && <StoryBottomLine />}
          </div>
        ))}
    </StoriesWrapper>
  )
}

export default TechblogCardList
