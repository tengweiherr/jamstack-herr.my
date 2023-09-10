import AwardWinningBanner from '@/components/Molecules/AwardWinningBanner'
import { Project } from '@/utils/types'
import { useEffect, useState } from 'react'
import {
  DescriptionBox,
  ProjectCard,
  ProjectsWrapper,
  ToolsBox,
} from './ProjectsCardList.styled'
import Skeleton from 'react-loading-skeleton'
import COLOR from '@/utils/styled/color'

type ProjectsProps = {
  projectsFromAPI: Array<Project>
}

const ProjectsCardList = ({ projectsFromAPI }: ProjectsProps) => {
  const [projects, setProjects] = useState<Array<Project>>([])

  useEffect(() => {
    if (projectsFromAPI.length !== 0) {
      projectsFromAPI?.sort(function (a, b) {
        return a.priority - b.priority
      })

      setProjects(projectsFromAPI)
    }
  }, [projectsFromAPI])

  return (
    <ProjectsWrapper>
      {projects.length === 0 ? (
        <div style={{ flex: '1 1' }}>
          <Skeleton
            height={280}
            width="100%"
            baseColor={COLOR.LIGHT_GREY}
            highlightColor={COLOR.WHITE}
            borderRadius="0.4rem"
            style={{ margin: '0 1rem' }}
          />
        </div>
      ) : (
        projects.map((item, index) => (
          <ProjectCard
            id={`project-${item.sys.id}`}
            key={`project-${index}`}
            onClick={() =>
              window.open(item.githubLink || item.projectLink, '_blank')
            }
          >
            {item.awardWinning && <AwardWinningBanner size="sm" />}
            <h5>{item.title}</h5>
            <DescriptionBox>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </DescriptionBox>
            <ToolsBox>
              {item.tools.split(', ').map((tool, index) => (
                <span className="tool" key={`tool-${index}`}>
                  {tool}
                </span>
              ))}
            </ToolsBox>
          </ProjectCard>
        ))
      )}
    </ProjectsWrapper>
  )
}

export default ProjectsCardList
