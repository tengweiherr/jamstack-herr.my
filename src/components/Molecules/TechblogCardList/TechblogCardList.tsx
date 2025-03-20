import {
  StoriesWrapper,
  StoryBottomLine,
  StoryLeftColumn,
  StoryRightColumn,
  StoryRow,
} from './TechblogCardList.styled'

type TechblogProps = {
  mediumStories: {
    title: string,
    subtitle: string,
    date: string,
    link: string,
  }[]
}

const renderDate = (dateInString: string) => {
  const dateObj = new Date(dateInString)
  const dateArray = dateObj.toDateString().split(' ')
  const day = dateArray[1]
  const month = dateArray[2]
  const year = dateArray[3]
  return day + ' ' + month + ', ' + year
}

const TechblogCardList = ({ mediumStories }: TechblogProps) => {
  return (
    <StoriesWrapper>
      {
        mediumStories.map((item, index) => (
          <div key={`medium-story-${index}`}>
            <StoryRow
              id={`medium-story-${item.title}`}
              onClick={() => window.open(item.link, '_blank')}
            >
              <StoryLeftColumn>
                <span>{renderDate(item.date)}</span>
              </StoryLeftColumn>
              <StoryRightColumn>
                <h5>{item.title}</h5>
                <p>{item.subtitle}</p>
              </StoryRightColumn>
            </StoryRow>
            {mediumStories.length !== index + 1 && <StoryBottomLine />}
          </div>
        ))}
    </StoriesWrapper>
  )
}

export default TechblogCardList
