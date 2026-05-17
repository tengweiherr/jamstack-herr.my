import styles from './TechblogCardList.module.css'
import { cx } from '@/utils/styles/cx'

type TechblogProps = {
  mediumStories: {
    title: string
    subtitle: string
    date: string
    link: string
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
    <div className={cx('d-flex flex-column', styles.storiesWrapper)}>
      {mediumStories.map((item, index) => (
        <div key={`medium-story-${index}`}>
          <div
            id={`medium-story-${item.title}`}
            onClick={() => window.open(item.link, '_blank')}
            className={cx('d-flex', styles.storyRow)}
          >
            <div className={cx('col-12 col-lg-2', styles.storyLeftColumn)}>
              <span>{renderDate(item.date)}</span>
            </div>
            <div className={cx('col-12 col-lg-10', styles.storyRightColumn)}>
              <h5>{item.title}</h5>
              <p>{item.subtitle}</p>
            </div>
          </div>
          {mediumStories.length !== index + 1 && (
            <hr className={styles.storyBottomLine} />
          )}
        </div>
      ))}
    </div>
  )
}

export default TechblogCardList
