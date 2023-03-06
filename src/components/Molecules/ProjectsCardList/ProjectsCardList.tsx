import AwardWinningBanner from "@/components/Molecules/AwardWinningBanner"
import { NoContentWrapper } from "@/utils/styled/common.styled"
import { Project } from "@/utils/types"
import { useEffect, useState } from "react"
import { DescriptionBox, ProjectCard, ProjectsWrapper, ToolsBox } from "./ProjectsCardList.styled"

type ProjectsProps = {
    projectsFromAPI: Array<Project>
}

const ProjectsCardList = ({projectsFromAPI}:ProjectsProps) => {

    const [projects, setProjects] = useState<Array<Project>>([])

    useEffect(()=>{

        if(projectsFromAPI.length !== 0){

            projectsFromAPI?.sort(function(a,b){
                return a.priority - b.priority;
            });

            setProjects(projectsFromAPI)
        } 

    },[projectsFromAPI])


    if(projects.length === 0) return (
        <NoContentWrapper>
            <span>No projects found.</span>
        </NoContentWrapper>
    )

    return (
        <ProjectsWrapper>
            {projects.map((item,index)=>(
                <ProjectCard 
                    id={`project-${item.sys.id}`} 
                    key={`project-${index}`} 
                    // onClick={()=>window.open(`/projects/${item.sys.id}`, '_blank')}
                    onClick={()=>window.open(item.githubLink || item.projectLink, '_blank')}
                >
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
    )
}

export default ProjectsCardList