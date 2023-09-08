import { fetchAllProjects, fetchProjectById } from '@/utils/api/contentful'
import { Section } from '@/utils/styled/common.styled'
import { Project } from '@/utils/types'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type ProjectPageProps = {
  projectById: Project
}

export async function getStaticProps(
  context: GetStaticPropsContext<PageParams>
) {
  const { params } = context

  if (!params) return

  const projectById = await fetchProjectById(params.id)

  return {
    props: {
      projectById,
    },
  }
}

export async function getStaticPaths() {
  const projects = await fetchAllProjects()

  if (projects && projects.length === 0) return

  const paths = projects.map((item: Project) => {
    return {
      params: { id: String(item.sys.id) },
    }
  })

  return {
    paths: [], //paths
    fallback: false,
  }
}

const ProjectPage = ({ projectById }: ProjectPageProps) => {
  const router = useRouter() //add this line

  const [project, setProject] = useState<Project>()

  useEffect(() => {
    if (projectById) setProject(projectById)
  }, [projectById])

  if (router.isFallback) {
    return <h2>The Page is loading...</h2>
  }

  return (
    <Section className="py-5">{project && <h1>{project.title}</h1>}</Section>
  )
}

export default ProjectPage
