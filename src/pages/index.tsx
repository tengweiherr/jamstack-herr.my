import { fetchExp, fetchHighlightedProjects, fetchMyData } from '@/utils/api/contentful'
import Banner from '@/components/Sections/Banner'
import Quote1 from '@/components/Sections/Quote'
import Highlight from '@/components/Sections/Highlight'
import Introduction from '@/components/Sections/Introduction'
import { Experience as Exp, MyData, Project } from '@/utils/types'
import Experience from '@/components/Sections/Experience'
import More from '@/components/Sections/More'
import Contact from '@/components/Sections/Contact'
import { GetServerSidePropsContext } from 'next'

type HomeProps = {
  projects: Array<Project>
  myData: MyData
  exps: Array<Exp>
}

// export async function getServerSideProps({ req, res }:GetServerSidePropsContext) {
//   res.setHeader(
//     'Cache-Control',
//     'public, max-age=31536000, immutable'
//   )

//   const projects = await fetchHighlightedProjects()
//   const myData = await fetchMyData()
//   const exps = await fetchExp()

//   return {
//     props: {
//       projects,
//       myData,
//       exps
//     },
//   }
// }

// This function gets called at build time
export async function getStaticProps() {

  const projects = await fetchHighlightedProjects()
  const myData = await fetchMyData()
  const exps = await fetchExp()

  return {
    props: {
      projects,
      myData,
      exps
    },
  }
}

export default function Home({projects,myData,exps}:HomeProps) {

  return (
    <>
      <Banner />
      <Quote1 />
      <Highlight projects={projects} />
      <Introduction myData={myData} />
      <Experience exps={exps} />
      <More />
      <Contact />
    </>
  )
}
