import ProjectsCardList from "@/components/Molecules/ProjectsCardList"
import { fetchAllProjects } from "@/utils/api/contentful"
import { PageSubtitle, PageTitle, Section, TextContainer } from "@/utils/styled/common.styled"
import { Project } from "@/utils/types"

type ProjectsProps = {
    projectsFromAPI: Array<Project>
}

export async function getStaticProps() {

    const projectsFromAPI = await fetchAllProjects()
  
    return {
      props: {
        projectsFromAPI
      },
    }
}

const Projects = ({projectsFromAPI}:ProjectsProps) => {

    return (
        <Section className='py-5'>
            <TextContainer className='mx-3'>
                <PageTitle>Projects I&apos;ve done.</PageTitle>
                <PageSubtitle>Some side projects I&apos;ve worked on since the first day of my software engineering journey.</PageSubtitle>
            </TextContainer>
            <ProjectsCardList projectsFromAPI={projectsFromAPI} />
        </Section>
    )
}

export default Projects