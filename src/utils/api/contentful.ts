import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "@/utils/const"
  
const getOptions = (query:string) => {
    return {
        spaceID: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        method: "POST",
        headers: {
            Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
    }
}

async function fetchMyData () {

    const query = `{
        aboutCollection {
          items {
            paragraph1
            paragraph2
            paragraph3
            techStack
            resume
            image1
            image2
          }
        }
    }`

    const fetchOptions = getOptions(query)
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`, fetchOptions)
    const resInJSON = await res.json()
    const myDataData = await resInJSON.data.aboutCollection.items[0]
    return myDataData
}

async function fetchAllProjects () {

    const query = `{
        projectsCollection {
          items {
            title
            role
            tools
            description
            githubLink
            projectLink
            awardWinning
            priority
          }
        }
    }`

    const fetchOptions = getOptions(query)
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`, fetchOptions)
    const resInJSON = await res.json()
    const projects = await resInJSON.data.projectsCollection.items
    return projects
}

async function fetchHighlightedProjects () {

    const query = `{
        projectsCollection (where:{highlighted:true}) {
          items {
            title
            role
            tools
            description
            githubLink
            projectLink
            awardWinning
            highlighted
            image
            priority
          }
        }
    }`

    const fetchOptions = getOptions(query)
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`, fetchOptions)
    const resInJSON = await res.json()
    const projects = await resInJSON.data.projectsCollection.items
    return projects
}

async function fetchExp () {

    const query = `{
        experienceCollection {
            items {
                role
                company
                startTime
                endTime
                description
            }
        }
    }`

    const fetchOptions = getOptions(query)
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`, fetchOptions)
    const resInJSON = await res.json()
    const exps = await resInJSON.data.experienceCollection.items
    return exps
}

export {
    fetchAllProjects,
    fetchHighlightedProjects,
    fetchMyData,
    fetchExp
}