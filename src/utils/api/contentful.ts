import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "@/utils/const"
  
// const query = `{
//   experienceCollection {
//     items {
//         role
//         company
//         startTime
//         endTime
//         description {
//           json
//         }
//     }
//   }
// }`

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

async function fetchProjects () {

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
            highlighted
            image {
                url
                width
                height
            }
          }
        }
    }`

    const fetchOptions = getOptions(query)
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`, fetchOptions)
    const resInJSON = await res.json()
    const projects = await resInJSON.data.projectsCollection.items
    return projects
}

export {
    fetchProjects
}