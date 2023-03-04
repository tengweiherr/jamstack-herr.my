import AwardWinningBanner from "@/components/Molecules/AwardWinningBanner"
import { fetchAllProjects } from "@/utils/api/contentful"
import { PageSubtitle, PageTitle, Section, TextContainer } from "@/utils/styled/common.styled"
import { Project } from "@/utils/types"
import { useEffect, useState } from "react"
import { DescriptionBox, ProjectCard, ProjectsWrapper, ToolsBox } from "./projects.styled"

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

    const [projects, setProjects] = useState<Array<Project>>([])

    useEffect(()=>{

        if(projectsFromAPI.length !== 0){

            projectsFromAPI?.sort(function(a,b){
                return a.priority - b.priority;
            });

            setProjects(projectsFromAPI)
        } 

    },[projectsFromAPI])

    return (
        <Section className='py-5'>
            <TextContainer className='mx-3'>
                <PageTitle>Projects I&apos;ve done.</PageTitle>
                <PageSubtitle>Some side projects I&apos;ve worked on since the first day of my software engineering journey.</PageSubtitle>
            </TextContainer>
            <ProjectsWrapper>
            {projects.map((item,index)=>(
                <ProjectCard key={`project-${index}`} onClick={()=>window.open(item.githubLink || item.projectLink, '_blank')}>
                    {item.awardWinning && 
                        <AwardWinningBanner size='sm'/>
                    }
                    <h5>{item.title}</h5>
                    <DescriptionBox>
                        <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                    </DescriptionBox>
                    <ToolsBox>
                    {item.tools.split(', ').map((tool,index)=>(
                        <span className='tool' key={`tool-${index}`}>{tool}</span>
                    ))}
                    </ToolsBox>

                </ProjectCard>
            ))}
            </ProjectsWrapper>
        </Section>
    )
}

export default Projects