import { fetchExp, fetchHighlightedProjects, fetchMyData } from '@/utils/api/contentful'
import Banner from '@/components/Sections/Banner'
import Quote1 from '@/components/Sections/Quote'
import Highlight from '@/components/Sections/Highlight'
import Introduction from '@/components/Sections/Introduction'
import { Experience as Exp, ExpExtraProps, MyData, MyDataSkills, Project } from '@/utils/types'
import Experience from '@/components/Sections/Experience'
import More from '@/components/Sections/More'
import Contact from '@/components/Sections/Contact'

type HomeProps = {
  projects: Array<Project>
  myData: MyData
  myDataParagraphs: Array<string>
  myDataSkills: MyDataSkills
  exps: Array<Exp>
}

const correctionForInvalidDate = (date:string|null) => {
  return date !== null ? new Date(date) : new Date()
}

const getTimeDifference = (firstDate:string, secondDate:string) => {
  const duration = Number(correctionForInvalidDate(firstDate)) - Number(correctionForInvalidDate(secondDate))
  let month = Math.floor(new Date(duration).getTime() / (1000 * 60 * 60 * 24 * 30))
  let year = 0
  if(month >= 12){
    year = Math.floor(month / 12)
    month = month - (year * 12)
  } else year = 0
  return { year, month } 
}

// This function gets called at build time
export async function getStaticProps() {

  const [projects, myData, exps] = await Promise.all(
  [
    fetchHighlightedProjects(),
    fetchMyData(),
    fetchExp(),
  ],
)

  //projects data clean up
  if(projects && projects?.length !== 0){

    projects?.sort(function(a:Project,b:Project){
      return a.priority - b.priority;
    });

  }

  //myData clean up
  let myDataParagraphs = []
  let myDataSkills = {
    part_1: [],
    part_2: []
  }

  if(myData){
    const paraArray = [myData.paragraph1]
    if(myData.paragraph2) paraArray.push(myData.paragraph2)
    if(myData.paragraph3) paraArray.push(myData.paragraph3)

    myDataParagraphs = paraArray

    if(myData.techStack){
        const middleIndex = Math.ceil(myData.techStack?.length / 2);
        const firstHalf = myData.techStack.slice().splice(0, middleIndex);   
        const secondHalf = myData.techStack.slice().splice(-middleIndex);
        myDataSkills = {
            part_1: firstHalf,
            part_2: secondHalf
        }
    }
  }

  let expsToModify:Array<Exp & ExpExtraProps> = []
  //exp data clean up
  if(exps && exps.length !== 0) {
    let temp:Array<Exp & ExpExtraProps> = exps.map((item:Exp)=>{
        const startYear = new Date(item.startTime).getFullYear().toString()
        const endYear = item.endTime ? new Date(item.endTime).getFullYear().toString() : 'Present'
        const { year, month } = getTimeDifference(item.endTime, item.startTime)
        return {...item, 
            description: item.description, 
            startYear: startYear,
            endYear: endYear,
            yearInWorking: String(year),
            monthInWorking: String(month),
        }
    })
    temp.sort(function(a:Exp,b:Exp){
        const aToCompare = correctionForInvalidDate(a.endTime).getTime()
        const bToCompare = correctionForInvalidDate(b.endTime).getTime()
        if(aToCompare === bToCompare) return correctionForInvalidDate(b.startTime).getTime() - correctionForInvalidDate(a.startTime).getTime()
        return bToCompare - aToCompare
    });
    expsToModify = temp
}

  return {
    props: {
      projects,
      myData,
      myDataParagraphs,
      myDataSkills,
      exps: expsToModify
    },
    revalidate: 3628800
  }
}

export default function Home({projects,myData,myDataParagraphs,myDataSkills,exps}:HomeProps) {

  return (
    <>
      <Banner />
      <Quote1 />
      <Highlight projects={projects} />
      <Introduction myData={myData} myDataParagraphs={myDataParagraphs} myDataSkills={myDataSkills}/>
      <Experience exps={exps} />
      <More />
      <Contact />
    </>
  )
}
