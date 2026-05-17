import { fetchExp, fetchMyData } from '@/utils/api/contentful'
import Banner from '@/components/Sections/Banner'
import Quote from '@/components/Sections/Quote'
import Introduction from '@/components/Sections/Introduction'
import { Experience as Exp, ExpExtraProps } from '@/utils/types'
import Contact from '@/components/Sections/Contact'
import { Articles } from '@/components/Sections/Articles'

type HomeProps = {
  myDataParagraphs: Array<string>
  exps: Array<Exp & ExpExtraProps>
}

const correctionForInvalidDate = (date: string | null) => {
  return date !== null ? new Date(date) : new Date()
}

const getTimeDifference = (firstDate: string, secondDate: string) => {
  const duration =
    Number(correctionForInvalidDate(firstDate)) -
    Number(correctionForInvalidDate(secondDate))
  let month = Math.floor(
    new Date(duration).getTime() / (1000 * 60 * 60 * 24 * 30)
  )
  let year = 0
  if (month >= 12) {
    year = Math.floor(month / 12)
    month = month - year * 12
  }
  return { year, month }
}

export async function getStaticProps() {
  const [myData, exps] = await Promise.all([fetchMyData(), fetchExp()])

  let myDataParagraphs: Array<string> = []

  if (myData) {
    const paraArray = [myData.paragraph1]
    if (myData.paragraph2) paraArray.push(myData.paragraph2)
    if (myData.paragraph3) paraArray.push(myData.paragraph3)
    myDataParagraphs = paraArray
  }

  let expsToModify: Array<Exp & ExpExtraProps> = []
  if (exps && exps.length !== 0) {
    expsToModify = exps
      .map((item: Omit<Exp, 'companyLogoUrl'> & { companyLogoUrl?: { url?: string } | string | null }) => {
        const formatMonthYear = (date: Date) =>
          date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
        const startYear = formatMonthYear(new Date(item.startTime))
        const endYear = item.endTime
          ? formatMonthYear(new Date(item.endTime))
          : 'Present'
        const { year, month } = getTimeDifference(item.endTime, item.startTime)
        const companyLogoUrl =
          typeof item.companyLogoUrl === 'string'
            ? item.companyLogoUrl
            : item.companyLogoUrl?.url ?? null
        return {
          ...item,
          companyLogoUrl,
          startYear,
          endYear,
          yearInWorking: String(year),
          monthInWorking: String(month),
        }
      })
      .sort((a: Exp, b: Exp) => {
        const aToCompare = correctionForInvalidDate(a.endTime).getTime()
        const bToCompare = correctionForInvalidDate(b.endTime).getTime()
        if (aToCompare === bToCompare)
          return (
            correctionForInvalidDate(b.startTime).getTime() -
            correctionForInvalidDate(a.startTime).getTime()
          )
        return bToCompare - aToCompare
      })
  }

  return {
    props: {
      myDataParagraphs,
      exps: expsToModify,
    },
    revalidate: 3628800,
  }
}

export default function Home({ myDataParagraphs, exps }: HomeProps) {
  return (
    <>
      <Banner />
      <Quote />
      <Introduction myDataParagraphs={myDataParagraphs} exps={exps} />
      <Articles />
      <Contact />
    </>
  )
}
